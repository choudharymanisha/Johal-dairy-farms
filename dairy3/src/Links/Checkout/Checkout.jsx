import React from "react";
import farm7 from "../../assets/farm7.png";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./Checkout.css"
const Checkout = () => {
  return (
    <>
      <div style={containerStyle}>
        <motion.img
          src={farm7}
          alt="Happy Cow"
          style={imageStyle}
          animate={{
            y: [0, -45, 0], // Move up and down
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div style={textStyle}>
          <h2 style={headingStyle}>Thanks for buying Milk</h2>
          <p style={paragraphStyle}>
            You can come to our farm to pick up milk directly. We hope you have a great experience with us.
          </p>
          <Link to="/main">
            <motion.button
              style={buttonStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Click here
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  padding: '20px',
  backgroundColor: '#FFF',
  flexDirection: 'row',
};

const imageStyle = {
  width: '300px',
  height: '300px',
  marginRight: '20px',
};

const textStyle = {
  maxWidth: '40%',
  textAlign: 'left',
};

const headingStyle = {
  fontSize: '40px',
  color: '#003D29',
  marginBottom: '10px',
};

const paragraphStyle = {
  fontSize: '20px',
  color: '#003D29',
  marginBottom: '10px',
  lineHeight: '1.6',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  color: '#FFF',
  backgroundColor: '#003D29',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

/* Mobile view */

 

export default Checkout;
