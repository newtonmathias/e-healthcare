import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
            maxlength: 40,
        },
        type: {
            type: String,
            required: true,
            maxlength: 40,
        },
        img: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
            maxlength: 200,
        },
        availabilty: {
            type: String,
            required: true,
            maxlength: 40,
        },
        rating: {
            type: Number,
            required: true,
        },
        times: {
            type: [String],
            required: true,
        },
    }
);

export default mongoose.models.Doctor ||
  mongoose.model("Doctor", DoctorSchema);