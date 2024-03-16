'use client'

import { sendEmail } from "@/app/services/sendEmailService/sendEmailService.";
import "./Contact.css";
import React, { useState } from 'react';

async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const response = await sendEmail(formData);

  if(response.success){
    event.currentTarget.reset();
    alert("Message sent successfully!");
  } else{
    alert('Error ' + response.error);  
  }
}

const Contact = ({}) => {
  
  return(
    <>
      <section className="contact" id="contact">
        <h2>Contact <span>Me</span></h2>
        <form onSubmit={handleSubmit}>
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

export default Contact;


