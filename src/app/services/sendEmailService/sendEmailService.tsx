'use server'

import { Resend } from 'resend';
import { revalidatePath } from 'next/cache';

export async function sendEmail(formData: FormData) {

    const API_KEY = process.env.RESEND_API_KEY;

    const resend = new Resend(API_KEY);

    try {
        const senderName = formData.get('senderName') as string;
        const senderEmail = formData.get('senderEmail') as string;
        const senderNumber = formData.get('senderNumber') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;
        const receiverEmail = formData.get('receiverEmail') as string;

        const emailBody = `
          Name: ${senderName || 'N/A'}
          Email: ${senderEmail}
          Phone Number: ${senderNumber || "N/A"}
          Subject: ${subject || "N/A"}
  
          Message:
          ${message}
      `;

        const { data } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: receiverEmail,
            subject: "Message from Contact Form",
            reply_to: senderEmail,
            text: emailBody,
        });

        console.log(data);

        revalidatePath('/');
    }
    catch (error) {
        console.log(error);
    }
}

