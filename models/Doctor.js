import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcrypt'

const DoctorSchema = new mongoose.Schema (
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
            },
            url: {
                type: String,
            }
        },
        role: {
            type: String,
            default: 'doctor'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        specilities: {
            type: [String],
            required: true,
        },
        price: {
            type: Number,
            default: 300
        },
        desc: {
            type: String,
            default:'',
            maxlength: 500,
        },
        availability: {
            type: Boolean,
            default: true,
            maxlength: 40,
        },
        rating: {
            type: Number,
            default: 5,
        },
        times: {
            type: [String],
            default:["10:00 am","10:30 am","11:00 am","11:30 pm","12:00 pm","2:00 pm","2:30 pm","3:00 pm","3:30 pm","4:00 pm","4:30 pm","5:00 pm"]
        },
        gender: {
            type: String,
        },
        service: {
            type: String,
        },
        institution: {
            type: String,
            default: '',
        },
        location: {
            type: String,
            default: '',
        },
        languanges: {
            type: [String],
            default: 'English',
        },
        reviews: {
            type: [String],
            default: '',
        },
    }
);

// Encrypting password before saving user
DoctorSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

// Compare user password
DoctorSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.models.Doctor ||
  mongoose.model("Doctor", DoctorSchema);