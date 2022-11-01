import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcrypt'

bcrypt

const PatientSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: [true, 'Please enter your name'],
            maxLength: [50, 'Your name cannot exceed 50 characters']
        },
        email: {
            type: String,
            required: [true, 'Please enter your email'],
            unique: true,
            validate: [validator.isEmail, 'Please enter valid email address']
        },
        password: {
            type: String,
            required: [true, 'Please enter your password'],
            minLength: [8, 'Your password must be longer than 9 characters'],
            select: false
        },
        avatar: {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        role: {
            type: String,
            default: 'patient'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    }
);

// Encrypting password before saving user
PatientSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

// Compare user password
PatientSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.models.User ||
  mongoose.model("User", PatientSchema); 