"use client"

import "./Contact.css";
import { sendEmail } from "../../services/sendEmailService/sendEmailService";
import { useRef, useState } from 'react';
import { useFormStatus } from "react-dom";

export interface ContactItem{
  id: number;
  email: string;
  button_text: string;
  submission_text: string;
}

export interface ContactProps{
  contactInfo: ContactItem[];
  contactDescription: string;
}

const SubmitButton = ({label}: {label: string}) => {
  
  const { pending } = useFormStatus();

  return (
    <input type="submit" className={`btn ${pending ? "disabled" : ""}`} value={label} disabled={pending}/>
  );
}

export default function Contact({ contactInfo, contactDescription }:ContactProps ) {

  const ref = useRef<HTMLFormElement>(null);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const firstItem = contactInfo[0];

  return (
    <>
      <section className="contact" id="contact">
        <h2>Contact <span>Me</span></h2>
        <p>{contactDescription}</p>
        {formSubmitted ? (
          <div className="contact-form-submission">
            <h3>Thank You!</h3>
            <p>{firstItem.submission_text}</p>
          </div>
        ) : (
          <form ref={ref} action={async (formData) => {
            await sendEmail(formData);
            ref.current?.reset();
            setFormSubmitted(true);
          }}
          >
            <div className="input-box">
              <input type="text" name="senderName" placeholder="Name" required />
              <input type="email" name="senderEmail" placeholder="Email" required />
              <input type="number" name="senderNumber" placeholder="Phone Number" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" cols={30} rows={10} placeholder="Your Message" required></textarea>
            </div>
            <input type="hidden" name="receiverEmail" value={firstItem.email}/>
            <SubmitButton label={firstItem.button_text}/>
          </form>
        )}
      </section>
    </>
  );
};