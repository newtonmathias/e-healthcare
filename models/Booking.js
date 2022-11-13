import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema ({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    sessionStart: {
        type: String,
        required: true,
    },
    sessionStop: {
        type: String,
        required: true,
    },
    amountPaid: {
        type: Number,
        required: true,
    },
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        }
    },
})

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema)
