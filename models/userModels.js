import mongoose from "mongoose";
import { required } from "nodemon/lib/config";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: String,
        emum: ["Admin", "User"],
        default: "User",
    },
    accountVerified: { type: Boolean, default: false },
    projectStarted: [
        {
            projectId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Started",
            },
            completed: {
                type: Boolean,
                default: false,
            },
            projectTitle: String,
            startedDate: Date,
        },
    ],
    avatar: {
        publid_id: String,
        url: String,
    },
    verificationCode: Number,
    verificationCodeExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
},
    {
        timestamps: true,
    },

);

export const User = mongoose.model("User", userSchema);