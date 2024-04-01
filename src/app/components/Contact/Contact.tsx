"use client"

import "./Contact.css";
import { sendEmail } from "../../services/sendEmailService/sendEmailService";
import { useRef } from 'react'

export default function Contact({ }) {

  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <section className="contact" id="contact">
        <h2>Contact <span>Me</span></h2>
        <form ref={ref} action={async (formData) => {
          await sendEmail(formData)
          ref.current?.reset()
        }}
        >
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