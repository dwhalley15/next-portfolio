'use client'

import { SendEmail } from "@/app/services/sendEmailService/sendEmailService.";
import "./Contact.css";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const initialState = {
  message: "",
}

function SubmitButton(){
  const { pending } = useFormStatus();
  return (
    <input type="submit" value="Send Message" className="btn" aria-disabled={pending} />
  )
}

export default function Contact({}){
  
  const [state, formAction] = useFormState(SendEmail, initialState);

  return(
    <>
      <section className="contact" id="contact">
        <h2>Contact <span>Me</span></h2>
        <form action={formAction}>
            <div className="input-box">
                <input type="text" name="senderName" placeholder="Name" required/>
                <input type="email" name="senderEmail" placeholder="Email" required />
                <input type="number" name="senderNumber" placeholder="Phone Number" required/>
                <input type="text" name="subject" placeholder="Subject" required/>
                <textarea name="message" cols={30} rows={10} placeholder="Your Message" required></textarea>
            </div>    
           <SubmitButton />
           <p aria-live="polite" className="contact-message" role="status">
            {state?.message}
           </p>
        </form>
      </section>
    </>
  );
};