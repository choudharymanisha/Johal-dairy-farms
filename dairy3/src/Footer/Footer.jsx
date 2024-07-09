import React from "react";
import "./Footer.css";
import wp from "../assets/Rectangle 95.png";
import mail from "../assets/Rectangle 96.png";
import call from "../assets/Frame 4.png";
import lik from "../assets/Rectangle 98.png"
import facebook from "../assets/Rectangle 99.png"
import insta from "../assets/Rectangle 100.png"
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
      <div className="logo-container">
        <div className="logo">
          <div className="wp-logo">
            <img src={call} alt="Call" />
           
     <p className="logo-text" >+91 222323999</p>
          </div>
          
          <div className="call-logo">
            <img src={wp} alt="WhatsApp" />
            <p className="logo-text">+91233434348</p>
          </div>
          <div className="mail-logo">
            <img src={mail} alt="Mail" />
            <p className="logo-text">mail us at johal's dairy.com</p>
          </div>
        </div>
        <div className="logo">
            <p className="logo-text">About us</p>
            <p className="logo-text">Contact us</p>
            <p className="logo-text">Our Milk</p>
            
        </div>
        <div className="logo">
            <p className="logo-text">Download the app</p>
            <p className="logo-text">Follow us at</p>
            <div className="logo2">
            <img src  = {insta}/>
            <img src  = {lik}/>
            <img src  = {facebook}/>
            </div>
            
        </div>
        
      </div>
      <div className="dairy-logo">
        <div className="image-dairy">
                <img src = {logo}/>
            </div>
            </div>
    </>
  );
};

export default Footer;
