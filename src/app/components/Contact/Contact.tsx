"use client"

import "./Contact.css";
import { sendEmail } from "../../services/sendEmailService/sendEmailService";
import { useRef, useState } from 'react';
import { useFormStatus } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export interface ContactItem {
  id: number;
  email: string;
  button_text: string;
  submission_text: string;
}

export interface ContactProps {
  contactInfo: ContactItem[];
  contactDescription: string;
}

const SubmitButton = ({ label }: { label: string }) => {

  const { pending } = useFormStatus();

  return (
    <button type="submit" className={`btn ${pending ? "disabled" : ""}`} disabled={pending}>
      <FontAwesomeIcon icon={faPaperPlane} size="sm" />
      {label}
    </button>
  );
}

export default function Contact({ contactInfo, contactDescription }: ContactProps) {

  const ref = useRef<HTMLFormElement>(null);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const firstItem = contactInfo[0];

  return (
    <>
      <section className="contact" id="contact">
        <h1>Get In <span>Touch</span></h1>
        <p>{contactDescription}</p>
        <div className="contact-container">
          <div className="contact-info">
            <h2>{"Let's Connect"}</h2>
            <p>{"I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to chat about technology, feel free to reach out!"}</p>
            <div className="contact-details">
              <FontAwesomeIcon icon={faEnvelope} size="sm" />
              <div className="contact-text">
                <h3>Email</h3>
                <Link href={"mailto:david.whalley.dev@proton.me"}>
                  {"david.whalley.dev@proton.me"}
                </Link>
              </div>
            </div>
            <div className="contact-details">
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
              <div className="contact-text">
                <h3>Location</h3>
                <p>{"Available for Remote Work"}</p>
              </div>
            </div>
            <div className="contact-details">
              <FontAwesomeIcon icon={faPhone} size="sm" />
              <div className="contact-text">
                <h3>Response Time</h3>
                <p>{"Usually within 24 hours"}</p>
              </div>
            </div>
          </div>
          {formSubmitted ? (
            <div className="contact-form-submission">
              <h2>Thank You!</h2>
              <p>{firstItem.submission_text}</p>
            </div>
          ) : (
            <form ref={ref} action={async (formData) => {
              await sendEmail(formData);
              ref.current?.reset();
              setFormSubmitted(true);
            }}
            >
              <h2>Send a Message</h2>
              <div className="input-box">
                <label htmlFor="senderName">Name *</label>
                <input type="text" name="senderName" placeholder="Your name" required />
                <label htmlFor="senderEmail">Email *</label>
                <input type="email" name="senderEmail" placeholder="your.email@example.com" required />
                <label htmlFor="senderNumber">Phone Number *</label>
                <input type="number" name="senderNumber" placeholder="Your phone number" required />
                <label htmlFor="subject">Subject *</label>
                <input type="text" name="subject" placeholder="What's this about?" required />
                <label htmlFor="message">Message *</label>
                <textarea name="message" cols={30} rows={10} placeholder="Tell me about your project or idea..." required></textarea>
              </div>
              <input type="hidden" name="receiverEmail" value={firstItem.email} />
              <SubmitButton label={firstItem.button_text} />
            </form>
          )}
        </div>
      </section>
    </>
  );
};