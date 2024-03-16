import { Resend } from 'resend';

const resend = new Resend('re_WzNP5iDZ_JKo7AapXzUEMRTTyBX4hncUm');

export const sendEmail = async (formData: FormData) => {
    try{
        const senderName = formData.get('name') as string;
        const senderEmail = formData.get('email') as string;
        const senderNumber = formData.get('number') as string;
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
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'one_winged@hotmail.com',
        subject: "Message from Contact Form",
        reply_to: senderEmail,
        text: emailBody,
        headers: {
            Authorization: `Bearer re_WzNP5iDZ_JKo7AapXzUEMRTTyBX4hncUm`
        }
    });
        return { success: true};
    } catch(error){
        console.error("Error sending email", error);
        return {error: 'Failed to send email'};
    }
    
};