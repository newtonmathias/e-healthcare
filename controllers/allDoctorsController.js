import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import Doctor from "../models/Doctor";
import Booking from "../models/Booking";
import APIFeatures from "../utils/apiFeatures";
import ErrorHandler from "../utils/errorHandler";
import cloudinary from 'cloudinary'

// Setting up cloudinary config
cloudinary.config({ 
    cloud_name: 'dnytljy0h', 
    api_key: '576126941489683', 
    api_secret: 'vNMDbjvyYRGXDRwLrQ_BGjcjA5E' 
  });


//get all doctors api/doctors
const allDoctors = catchAsyncErrors(async (req, res) => {

    const resPerPage = 4;

    const doctorsCount = await Doctor.countDocuments();

    const apiFeatures = new APIFeatures(Doctor.find(), req.query)
    .search()
    .filter()

    let doctors = await apiFeatures.query;
    let filteredDoctorsCount = doctors.length;
        
    apiFeatures.pagination(resPerPage)
    /* doctors = await apiFeatures.query; */

    res.status(200).json({
        success: true,
        doctorsCount,
        resPerPage,
        filteredDoctorsCount,
        doctors
    })

})

//get all doctors api/doctors
const getSingleDoctor = catchAsyncErrors(async (req, res, next) => {

    const doctor = await Doctor.findById(req.query.id);

    if (!doctor) {
        return next(new ErrorHandler('Doctor not found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        doctor
    })

})

// Create a new review   =>   /api/reviews
const createDoctorReview = catchAsyncErrors(async (req, res) => {

    const { rating, comment, doctorId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const doctor = await Doctor.findById(doctorId);

        doctor.reviews.push(review);
        doctor.numOfReviews = doctor.reviews.length

    doctor.ratings = doctor.reviews.reduce((acc, item) => item.rating + acc, 0) / doctor.reviews.length

    await doctor.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
    })

})

// Check Review Availability   =>   /api/reviews/check_review_availability

const checkReviewAvailability = catchAsyncErrors(async (req, res) => {

    const { doctorId } = req.query;

    const bookings = await Booking.find({ user: req.user._id, doctor: doctorId })

    let isReviewAvailable = false;
    if (bookings.length > 0) isReviewAvailable = true


    res.status(200).json({
        success: true,
        isReviewAvailable
    })

})

// Get all doctors - ADMIN   =>   /api/admin/doctors
const allAdminDoctors = catchAsyncErrors(async (req, res) => {

    const doctors = await Doctor.find();

    res.status(200).json({
        success: true,
        doctors
    })

})


// Delete Doctor   =>   /api/doctor/:id
const deleteDoctor = catchAsyncErrors(async (req, res) => {

    const doctor = await Doctor.findById(req.query.id);

    if (!doctor) {
        return next(new ErrorHandler('doctor not found with this ID', 404))
    }

    // Delete images associated with the doctor
    for (let i = 0; i < doctor.avatar.length; i++) {
        await cloudinary.v2.uploader.destroy(doctor.avatar.public_id)
    }

    await doctor.remove();

    res.status(200).json({
        success: true,
        message: 'doctor is deleted.'
    })

})

export {
    allDoctors,
    getSingleDoctor,
    createDoctorReview,
    checkReviewAvailability,
    allAdminDoctors,
    deleteDoctor
}