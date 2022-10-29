import dbConnect from "../../../utils/mongo";
import Doctor from "../../../models/Doctor";

export default async function handler(req, res) {
    const { method,
            query: { id },
        } = req;

    dbConnect();

    if (method === "GET"){
        try {
            const doctors = await Doctor.findById(id);
            res.status(200).json(doctors);
        } catch (err) {
            res.status(500).jsoon(err);
        }
    }
    if (method === "PUT") {
        try {
            const doctor = await Doctor.create(req.body);
            res.status(201).json(doctor);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "DELETE") {
        try {
            const doctor = await Doctor.create(req.body);
            res.status(201).json(doctor);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}