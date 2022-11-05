import User from "../../../models/User";
import dbConnect from "../../../utils/mongo";
import cloudinary from 'cloudinary';

// Setting up cloudinary config
cloudinary.config({ 
    cloud_name: 'dnytljy0h', 
    api_key: '576126941489683', 
    api_secret: 'vNMDbjvyYRGXDRwLrQ_BGjcjA5E' 
  });

export default async function handler(req, res) {

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'ehealthcare/avatars',
        width: '150',
        crop: 'scale'
    })

    const { method } = req;

    await dbConnect();

    if (method ==='POST') {
        const { name, email, password } = req.body;
        
        try {
            const user = await User.create({
                name,
                email,
                password,
                avatar: {
                    public_id: result.public_id,
                    url: result.secure_url
                }
            });
            res.status(200).json({
                success: true,
                message: 'Account Registered successfully'
            })
        } catch (err) {
            res.status(500).json(err);
        }
    }
}