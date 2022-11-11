
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import User from '../models/User';
import cloudinary from 'cloudinary'
import Doctor from '../models/Doctor';

// Setting up cloudinary config
cloudinary.config({ 
    cloud_name: 'dnytljy0h', 
    api_key: '576126941489683', 
    api_secret: 'vNMDbjvyYRGXDRwLrQ_BGjcjA5E' 
  });


// Cuurent user profile   =>   /api/me
const currentUserProfile = catchAsyncErrors(async (req, res) => {

    const user = await User.findById(req.user._id);

    res.status(200).json({
        success: true,
        user
    })

})

// Update user profile   =>   /api/me/update
const updateProfile = catchAsyncErrors(async (req, res) => {

    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name;
        user.email = req.body.email;

        if (req.body.password) user.password = req.body.password;
    }

    // Update avatar
    if (req.body.avatar !== '') {

        const image_id = user.avatar.public_id;

        // Delete user previous image/avatar
        await cloudinary.v2.uploader.destroy(image_id);

        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'ehealthcare/avatars',
            width: '150',
            crop: 'scale'
        })

        user.avatar = {
            public_id: result.public_id,
            url: result.secure_url
        }

    }

    await user.save();

    res.status(200).json({
        success: true
    })

})

// Register Doctor   =>   /api/auth/register
const registerDoctor = catchAsyncErrors(async (req, res) => {

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'ehealthcare/avatars',
        width: '150',
        crop: 'scale'
    })

    const { name, email, password, service, gender,specilities, location  } = req.body;

    const doctor = await Doctor.create({
        name,
        email,
        password,
        service,
        gender,
        specilities,
        location,
        avatar: {
            public_id: result.public_id,
            url: result.secure_url
        }
    });

    res.status(200).json({
        success: true,
        message: 'Account Registered successfully'
    })

})

// Cuurent doctor profile   =>   /api/me
const currentDoctorProfile = catchAsyncErrors(async (req, res) => {

    const doctor = await Doctor.findById(req.user._id);

    res.status(200).json({
        success: true,
        doctor
    })

})

// Cuurent doctor profile   =>   /api/me
const updateDoctorProfile = catchAsyncErrors(async (req, res) => {

    const doctor = await Doctor.findById(req.user._id);

    if (doctor) {
        doctor.name = req.body.name;
        doctor.email = req.body.email;
        doctor.service = req.body.service;
        doctor.gender = req.body.gender;
        doctor.specilities = req.body.specilities;
        doctor.location = req.body.location;
        doctor.price = req.body.price;
        doctor.desc = req.body.desc;
        doctor.institution = req.body.institution;
        doctor.languanges = req.body.languanges;

        if (req.body.password) doctor.password = req.body.password;
    }

    res.status(200).json({
        success: true,
        doctor
    })

        // Update avatar
        if (req.body.avatar !== '') {

            const image_id = doctor.avatar.public_id;
    
            // Delete doctor previous image/avatar
            await cloudinary.v2.uploader.destroy(image_id);
    
            const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
                folder: 'bookit/avatars',
                width: '150',
                crop: 'scale'
            })
    
            doctor.avatar = {
                public_id: result.public_id,
                url: result.secure_url
            }
    
        }
    
        await doctor.save();
    
        res.status(200).json({
            success: true
        })

})
 
export {
    currentUserProfile,
    updateProfile,
    registerDoctor,
    currentDoctorProfile,
    updateDoctorProfile
}
