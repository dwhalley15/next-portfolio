"use server";

import { Resend } from "resend";
import { revalidatePath } from "next/cache";
import { validateContactForm, FormErrors } from "./validation";
import { checkRateLimit, getClientIp } from "./rateLimit";

interface SendEmailResult {
  success: boolean;
  errors?: FormErrors;
}

export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  // Honeypot field check
  if (formData.get("company")) {
    return { success: true };
  }

  // Rate limiting
  const ip = await getClientIp();
  const allowed = checkRateLimit(ip);
  if (!allowed) {
    return {
      success: false,
      errors: {
        message: "Too many messages sent. Please try again later.",
      },
    };
  }

  const rawData = {
    senderName: (formData.get("senderName") as string)?.trim(),
    senderEmail: (formData.get("senderEmail") as string)?.trim(),
    senderNumber: (formData.get("senderNumber") as string)?.trim(),
    subject: (formData.get("subject") as string)?.trim(),
    message: (formData.get("message") as string)?.trim(),
  };

  // Validate form data
  const validation = validateContactForm(rawData);

  if (!validation.success) {
    return { success: false, errors: validation.errors };
  }

  const { senderName, senderEmail, senderNumber, subject, message } =
    validation.data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const emailBody = `
          Name: ${senderName || "N/A"}
          Email: ${senderEmail || "N/A"}
          Phone Number: ${senderNumber || "N/A"}
          Subject: ${subject || "N/A"}
  
          Message:
          ${message}
      `;

  await resend.emails.send({
    from: "Portfolio Form Submission <contact@ortheyus.uk>",
    to: "david.whalley.dev@proton.me",
    subject: "Message from Contact Form",
    reply_to: senderEmail,
    text: emailBody,
  });

  await resend.emails.send({
    from: "Ortheyus <no-reply@ortheyus.uk>",
    to: senderEmail,
    subject: "Thank you for contacting me",
    text: `Hi ${senderName},

Thanks for reaching out through my portfolio site.

I've received your message and will review it shortly. If your enquiry requires a response, I'll get back to you as soon as possible.

Best regards,
David Whalley
Ortheyus
https://ortheyus.uk`,
  });

  revalidatePath("/");

  return { success: true };
}
