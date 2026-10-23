import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import { User } from "../models/userModels.js";
import bcrypt from "bcrypt";
import { sendVerificationCode } from "../utils/sendVerificationCode.js";

export const register = catchAsyncErrors(async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !password || !email) {
            return next(new ErrorHandler("Please enter all fields", 400));
        };
        const isRegistered = await User.findOne({ email, accountVerified: true });
        if (isRegistered) {
            return next(new ErrorHandler("User already exists!", 400));
        };
        const registerationAttemptsByUser = await User.find({
            email,
            accountVerified: false,
        });
        if (registerationAttemptsByUser.length >= 5) {
            return next(
                new ErrorHandler("Registeration attempts exceeded, Please contact support.", 400)
            );
        };
        if (password.length < 4 || password.length > 16) {
            return next(new ErrorHandler("Password Length must be between 4 and 16 characters", 400));
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })
        const verificationCode = user.generateVerificationCode();
        await user.save();
        await sendVerificationCode(verificationCode, email);
        res.status(200).json({
            success: true,
            message: "Verification code sent successfully.",
        });
    } catch (error) {
        next(error);
    }
})