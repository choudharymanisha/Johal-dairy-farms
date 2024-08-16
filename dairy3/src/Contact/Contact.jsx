import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dg9m0x2", // Replace with your actual service ID
        "template_tz9d9dn", // Replace with your actual template ID
        form.current,
        "KtW_FbsR8d75ne7nm" // Replace with your actual user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset(); // Corrected form reset
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    

    <div className="contact-form" id="contact">
        
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch<br/></span>
          <span>to check availability</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;