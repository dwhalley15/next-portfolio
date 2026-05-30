"use client";

import "./ContactForm.css";
import { sendEmail } from "../../services/sendEmailService/sendEmailService";
import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";

export interface ContactFormProps {
  title: string | null;
  button_text: string | null;
  submission_text: string | null;
}

const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`contact-form-submit-button ${pending ? "disabled" : ""}`}
      disabled={pending}
    >
      {pending ? "$./sending..." : label}
    </button>
  );
};

export default function ContactForm({
  title,
  button_text,
  submission_text,
}: ContactFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <section className="contact-form-container">
      {formSubmitted ? (
        <div className="contact-form-submission-text">
          <h2 className="contact-form-submission-title">{"// thank you"}</h2>
          <p className="contact-form-submission-message">{submission_text}</p>
        </div>
      ) : (
        <>
          <h2 className="contact-form-title">
            {"// "}
            {title}
          </h2>
          <form
            ref={ref}
            action={async (formData) => {
              const result = await sendEmail(formData);

              if (!result.success) {
                setErrors(result.errors ?? {});
                return;
              }
              setErrors({});
              ref.current?.reset();
              setFormSubmitted(true);
            }}
          >
            <div className="contact-form-grid">
              <label className="contact-form-label">
                <span>name/</span>
                <input required name="name" className="contact-form-input" />
              </label>
              <label className="contact-form-label">
                <span>email/</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="contact-form-input"
                />
              </label>
              <label className="contact-form-company-label">
                <span>company/</span>
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>
            <label className="contact-form-message-label">
              <span>message/</span>
              <textarea
                required
                name="message"
                rows={6}
                className="contact-form-textarea"
              />
            </label>
            {Object.keys(errors).length > 0 && (
              <div className="contact-form-error">
                {Object.values(errors).map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}
            <SubmitButton label={button_text ?? ""} />
          </form>
        </>
      )}
    </section>
  );
}
