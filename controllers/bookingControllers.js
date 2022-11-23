import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import Booking from "../models/Booking";
import { format } from 'date-fns';

import ErrorHandler from '../utils/errorHandler'
import sendEmail from "../utils/sendMail";

// Create new Booking   =>   /api/bookings
const newBooking = catchAsyncErrors(async (req, res) => {

    const {
        doctor,
        sessionStart,
        sessionStop,
        amountPaid,
        paymentInfo,
        dateOfBooking
    } = req.body;

    const booking = await Booking.create({
        doctor,
        user: req.user._id,
        sessionStart,
        sessionStop,
        amountPaid,
        paymentInfo,
        dateOfBooking
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

    const { doctorId,  } = req.query;
        //date variables
        const today = new Date()
        const tomorrow = new Date(today)
        const overmorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        overmorrow.setDate(tomorrow.getDate() + 1)
        const formatedToday = format(today, "PPP") 
        const formatedTomorrow = format(tomorrow, "PPP") 
        const formatedOvermorrow = format(overmorrow, "PPP")

    const todayBookings = await Booking.find({ doctor: doctorId, dateOfBooking: formatedToday });
    const tomorrowBookings = await Booking.find({ doctor: doctorId, dateOfBooking: formatedTomorrow });
    const overmorrowBookings = await Booking.find({ doctor: doctorId, dateOfBooking: formatedOvermorrow });

    let todayTimes = [];
    let tomorrowTimes = [];
    let overmorrowTimes = [];


    todayBookings.forEach(booking => {
        const sessionStart = booking.sessionStart
        const times = [sessionStart]
        todayTimes = todayTimes.concat(times)
    })

    tomorrowBookings.forEach(booking => {
        const sessionStart = booking.sessionStart
        const times = [sessionStart]
        tomorrowTimes = tomorrowTimes.concat(times)
    })

    overmorrowBookings.forEach(booking => {
        const sessionStart = booking.sessionStart
        const times = [sessionStart]
        overmorrowTimes = overmorrowTimes.concat(times)
    })
    let bookedTimes = [{todayTimes}, {tomorrowTimes},{overmorrowTimes}]
    res.status(200).json({
        success: true,
        bookedTimes
    })
})

// Get all bookings of current user   =>   /api/bookings/me
const myBookings = catchAsyncErrors(async (req, res) => {

    const bookings = await Booking.find({ user: req.user._id })
    .populate({
        path: 'doctor',
        select: 'name institution price location specilities avatar'
    })
    .populate({
        path: 'user',
        select: 'name email'
    })
        

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
        .populate({
            path: 'doctor',
            select: 'name'
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
    getPatientDetails,

}