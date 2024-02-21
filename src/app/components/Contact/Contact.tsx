import "./Contact.css";

export interface ContactItem {
  id: number;
  
}

export interface ContactProps {
  contactInfo: ContactItem[];
}

const Contact/*: React.FC<ContactProps>*/ = ({ /*contactInfo*/ }) => {

  return(
    <>
      <section className="contact" id="contact">
        <h2>Contact <span>Me</span></h2>
        <form action="">
            <div className="input-box">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="number" name="Number" placeholder="Phone Number" required />
                <input type="text" name="Subject" placeholder="Subject" required />
                <textarea name="message" cols={30} rows={10} placeholder="Your Message"></textarea>
            </div>    
            <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </>
  );
};

export default Contact;


