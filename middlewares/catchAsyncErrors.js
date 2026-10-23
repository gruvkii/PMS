import { promises } from "nodemailer/lib/xoauth2"

export const catchAsyncerrors = (func) => {
    return (req, res, next) => {
        Promise.resolve(func(res, req, next)).catch(next);
    };
};