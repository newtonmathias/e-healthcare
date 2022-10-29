import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
            maxlength: 40,
        },
        specilities: {
            type: [String],
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
            maxlength: 500,
        },
        availability: {
            type: Boolean,
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
        gender: {
            type: String,
            required: true,
        },
        service: {
            type: String,
            required: true,
        },
        institution: {
            type: String,
            required: true,
        },
        languanges: {
            type: [String],
            required: true,
        },
        reviews: {
            type: [String],
            required: true,
        },
    }
);

export default mongoose.models.Doctor ||
  mongoose.model("Doctor", DoctorSchema);