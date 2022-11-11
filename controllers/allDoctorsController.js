import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import Doctor from "../models/Doctor";
import APIFeatures from "../utils/apiFeatures";
import ErrorHandler from "../utils/errorHandler";


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

export {
    allDoctors,
    getSingleDoctor
}