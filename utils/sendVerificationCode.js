import { generationVerificationOtpEmailTemplate } from "./emailTemplates";
export async function sendVerificationCode(verificationCode, email, res) {
    try {
        const message = generationVerificationOtpEmailTemplate(verificationCode);
        sendEmail({
            email,
            subject: "Verification Code (PMS)",
            message,
        });
        res.status(200).json({
            success: true,
            message: "Verification code sent successfully."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Verification Code failed to send",
        })
    }
}