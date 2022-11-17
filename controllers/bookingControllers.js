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

// Get all bookings of current user   =>   /api/bookings/me
const myBookings = catchAsyncErrors(async (req, res) => {

    const bookings = await Booking.find({ user: req.user._id })
        

    res.status(200).json({
        success: true,
        bookings
    })
})

// Get booking details   =>   /api/bookings/:id
const getBookingDetails = catchAsyncErrors(async (req, res) => {

    const booking = await Booking.findById(req.query.id)
        .populate({
            path: 'doctor',
            select: 'name institution location specilities avatar'
        })
        .populate({
            path: 'user',
            select: 'name email'
        })

    res.status(200).json({
        success: true,
        booking
    })
})

// Get all bookings of current doctor   =>   /api/bookings/me
const docBookings= catchAsyncErrors(async (req, res) => {

    const bookings = await Booking.find({ doctor: req.user._id })
        

    res.status(200).json({
        success: true,
        bookings
    })
})


// Get patient booking details   =>   /api/bookings/:id
const getPatientDetails = catchAsyncErrors(async (req, res) => {

    const booking = await Booking.findById(req.query.id)
        .populate({
            path: 'user',
            select: 'name email avatar'
        })

    res.status(200).json({
        success: true,
        booking
    })
})


export {
    newBooking,
    checkBookingAvailability,
    checkBookedTimesOfDoctor,
    myBookings,
    getBookingDetails,
    docBookings,
    getPatientDetails
}