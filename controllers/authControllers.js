
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import User from '../models/User';
import cloudinary from 'cloudinary'

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
 
export {
    currentUserProfile,
    updateProfile,
}
