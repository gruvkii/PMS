import { generationVerificationOtpEmailTemplate } from "./emailTemplates.js";
import { sendEmail } from "./sendEmail.js";

export async function sendVerificationCode(verificationCode, email) {
    const message = generationVerificationOtpEmailTemplate(verificationCode);
    await sendEmail({
        email,
        subject: "Verification Code (PMS)",
        message,
    });
}