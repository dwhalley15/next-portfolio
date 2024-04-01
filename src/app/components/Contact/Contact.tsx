import "./Contact.css";
import { Resend } from 'resend';
import { revalidatePath } from 'next/cache';

async function sendEmail(formData: FormData) {
  'use server';

  const API_KEY = process.env.RESEND_API_KEY;

  const resend = new Resend(API_KEY);

  try {
    const senderName = formData.get('senderName') as string;
    const senderEmail = formData.get('senderEmail') as string;
    const senderNumber = formData.get('senderNumber') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!senderEmail || typeof senderEmail !== "string") {
      return {
        message: "Invalid Email Address",
      };
    }

    if (!message || typeof message !== "string") {
      return {
        message: "Invalid Message",
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

    const { data } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'one_winged@hotmail.com',
      subject: "Message from Contact Form",
      reply_to: senderEmail,
      text: emailBody,
    });

    console.log(data);

    revalidatePath('/');

    return { message: `Message Sent`};
  }
  catch(error){

    console.log(error);

    return {message: '$Failed to send message'};
  }
}

export default function Contact({ }) {
  return (
    <>
      <section className="contact" id="contact">
        <h2>Contact <span>Me</span></h2>
        <form action={sendEmail}>
          <div className="input-box">
            <input type="text" name="senderName" placeholder="Name" required />
            <input type="email" name="senderEmail" placeholder="Email" required />
            <input type="number" name="senderNumber" placeholder="Phone Number" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" cols={30} rows={10} placeholder="Your Message" required></textarea>
          </div>
          <input type="submit" className="btn" value={"Send Message"} />
        </form>
      </section>
    </>
  );
};