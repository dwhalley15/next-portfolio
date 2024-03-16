import { Resend } from 'resend';

const API_KEY = 're_WzNP5iDZ_JKo7AapXzUEMRTTyBX4hncUm'

const resend = new Resend(API_KEY);

export const sendEmail = async (formData: FormData) => {
    try{
        const senderName = formData.get('senderName') as string;
        const senderEmail = formData.get('senderEmail') as string;
        const senderNumber = formData.get('senderNumber') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

    if(!senderEmail || typeof senderEmail !== "string"){
        return{
            error: "Invalid Email Address",
        };
    }

    if(!message || typeof message !== "string"){
        return{
            error: "Invalid Message",
        };
    }

    const emailBody = `
        Name: ${senderName || 'N/A'}
        Email: ${senderEmail}
        Phone Number: ${senderNumber || "N/A"}
        Subject: ${subject || "N/A"}

        Message:
        ${message}
    `;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'one_winged@hotmail.com',
        subject: "Message from Contact Form",
        reply_to: senderEmail,
        text: emailBody,
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    });
        return { success: true};
    } catch(error){
        console.error("Error sending email", error);
        return {error: 'Failed to send email'};
    }
    
};