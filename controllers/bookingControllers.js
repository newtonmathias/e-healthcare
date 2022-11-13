import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import Booking from "../models/Booking";
import ErrorHandler from '../utils/errorHandler'

// Create new Booking   =>   /api/bookings
const newBooking = catchAsyncErrors(async (req, res) => {

    const {
        doctor,
        sessionStart,
        sessionStop,
        amountPaid,
        paymentInfo,
    } = req.body;

    const booking = await Booking.create({
        doctor,
        user: req.user._id,
        sessionStart,
        sessionStop,
        amountPaid,
        paymentInfo,
    })

    res.status(200).json({
        success: true,
        booking
    })

})
// Check Booking availability   =>   /api/bookings/check
const checkBookingAvailability  = catchAsyncErrors(async (req, res) => {

    let { doctorId, sessionStart, sessionStop } = req.query;


    const bookings = await Booking.find({
        doctor: doctorId,
        $and: [{
            sessionStart: {
                $ne: sessionStart
            }
        }, {
            sessionStop: {
                $ne: sessionStop
            }
        }]
    })

    // Check if there is any booking available
    let isAvailable;

    if (bookings && bookings.length === 0) {
        isAvailable = true
    } else {
        isAvailable = false
    }

    res.status(200).json({
        success: true,
        isAvailable
    })

})

// Check booked times for a doctor   =>   /api/bookings/check_booked_times
const checkBookedTimesOfDoctor = catchAsyncErrors(async (req, res) => {

    const { doctorId } = req.query;

    const bookings = await Booking.find({ doctor: doctorId });

    let bookedTimes = [];


    bookings.forEach(booking => {

        const sessionStart = booking.sessionStart
        const sessionStop = booking.sessionStop

        const times = [sessionStart, sessionStop]
        bookedTimes = bookedTimes.concat(times)
    })

    res.status(200).json({
        success: true,
        bookedTimes
    })
})

export {
    newBooking,
    checkBookingAvailability,
    checkBookedTimesOfDoctor
}