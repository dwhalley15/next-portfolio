import { sendEmail } from "@/app/services/sendEmailService/sendEmailService.";
import "./Contact.css";

export default function Contact({}){
  
  return(
    <>
      <section className="contact" id="contact">
        <h2>Contact <span>Me</span></h2>
        <form>
            <div className="input-box">
                <input type="text" name="senderName" placeholder="Name" required/>
                <input type="email" name="senderEmail" placeholder="Email" required />
                <input type="number" name="senderNumber" placeholder="Phone Number" required/>
                <input type="text" name="subject" placeholder="Subject" required/>
                <textarea name="message" cols={30} rows={10} placeholder="Your Message" required></textarea>
            </div>    
            <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </>
  );
};