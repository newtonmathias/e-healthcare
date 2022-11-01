import User from "../../../models/User";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
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
                    public_id: 'PUBLIC ID',
                    url: 'URL'
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