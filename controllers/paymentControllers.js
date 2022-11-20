import Doctor from "../models/Doctor";
import User from "../models/User";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import Booking from "../models/Booking";
import getRawBody from 'raw-body'


import absoluteUrl from 'next-absolute-url'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// Generate stripe checkout session   =>   /api/checkout_session/:doctorID
const stripCheckoutSession = catchAsyncErrors(async (req, res) => {

    // Get doctor details
    const doctor = await Doctor.findById(req.query.doctorId);

    const { sessionStart, sessionStop, dateOfBooking } = req.query;

    // Get origin
    const { origin } = absoluteUrl(req);

    // Create stripe checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: `${origin}/bookings/mybookings`,
        cancel_url: `${origin}/doctor/${doctor._id}`,
        customer_email: req.user.email,
        client_reference_id: req.query.doctorId,
        metadata: { sessionStart, sessionStop, dateOfBooking },
        line_items: [{
            price_data: {
              currency: 'kes',
              unit_amount: req.query.amount * 100,
              product_data: {
                name: `${doctor.name}`,
                images: [`${doctor.avatar.url}`],
                description: `${doctor.service} 
                              ${sessionStart} 
                              ${dateOfBooking}`,
              },
            },
            quantity: 1,
          }],
          mode: 'payment',
    })

    res.status(200).json(session)

})

// Create new booking after payment   =>   /api/webhook
const webhookCheckout = catchAsyncErrors(async (req, res) => {

    const rawBody = await getRawBody(req);

    try {

        const signature = req.headers['stripe-signature']

        const event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);

        if (event.type === 'checkout.session.completed') {

            const session = event.data.object;

            const doctor = session.client_reference_id;
            const user = (await User.findOne({ email: session.customer_email })).id;

            const amountPaid = session.amount_total / 100;

            const paymentInfo = {
                id: session.payment_intent,
                status: session.payment_status
            }

            const sessionStart = session.metadata.sessionStart
            const sessionStop = session.metadata.sessionStop
            const dateOfBooking = session.metadata.dateOfBooking

            const booking = await Booking.create({
                doctor,
                user,
                sessionStart,
                sessionStop,
                amountPaid,
                paymentInfo,
                dateOfBooking,
                paidAt: Date.now()
            })

            res.status(200).json({ success: true })

        }



    } catch (error) {
        console.log('Error in Stripe Checkout Payment => ', error);
    }

})


export {
    stripCheckoutSession,
    webhookCheckout
}