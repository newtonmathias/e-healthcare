import Doctor from "../../../models/Doctor";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();
    
    if (method === "GET"){
        try {
            const doctors = await Doctor.find();
            res.status(200).json(doctors);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "POST") {
        try {
            const doctor = await Doctor.create(req.body);
            res.status(201).json(doctor);
        } catch (err) {
            res.status(500).json(err);
        }
    }
  }