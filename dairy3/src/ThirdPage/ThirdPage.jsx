import React from "react";
import "./ThirdPage.css";
import img1 from "../assets/Rectangle 36.png";
import img2 from "../assets/Rectangle 37.png";
import img3 from "../assets/Rectangle 38.png";
import img4 from "../assets/Rectangle 41.png";
import img5 from "../assets/Rectangle 42.png";
import img6 from "../assets/Rectangle 43.png";
import img7 from "../assets/Rectangle 44.png";
import img8 from "../assets/visit2.webp";
import { motion } from 'framer-motion';
import farm6 from "../assets/farm6.png";
import { Link } from "react-router-dom";



const ThirdPage = () => {
  return (
    <div className="third-container">
      <div className="heading">
        <h1>Purety is our surety</h1>
      </div>
      <div className="image3-container">
        <div className="img_1">
          <img src={img1} alt="Milk" />
          <div className="h3-text">
            <h3>Providing you the<br/> best Milk</h3>
          </div>
          <div className="p3-text">
            <p>
              We are providing you the<br />
              milk at a very reasonable price<br />
              you can buy milk directly from our website
            </p>
          </div>
        </div>
        <div className="img_2">
          <img src={img2} alt="Order milk" />
          <div className="h3-text">
            <h3>Order milk directly <br/>from the farm</h3>
          </div>
          <div className="p3-text">
            <p>
              you can place the order directly<br />
              by clicking at login and<br />
              placed your order from the website
            </p>
          </div>
        </div>
        <div className="img_3">
          <img src={img3} alt="Buy cows" />
          <div className="h3-text">
            <h3>You can now buy cows <br/>online at our website</h3>
          </div>
          <div className="p3-text">
            <p>
              you can now buy cows from<br />
              our website<br />
              by checking prices and request a visit
            </p>
          </div>
        </div>
        
      </div>
      <div className="heading-2">
            <h1> How it Works?</h1>
            <p className="p2-text"> Buying our milk is not simple as grabbing a bottle<br/> firstly you have to create a account<br/>and then placed the order according to the availability</p>
            <div className="image3-container">
                <div className="img_4">
                <img src = {img4}/>
<div className="h3-text">
   <h3> Create your account</h3>
</div>
<div className="p3-text">
    <p>Firstly you have to<br/>create an account and<br/> than message us to check the availability</p>
</div>
</div>
<div className="img_5">
                <img src = {img5}/>
<div className="h3-text">
   <h3>Place your order </h3>
</div>
<div className="p3-text">
    <p>After creating account<br/>you can check the availability<br/>and place the order</p>
</div>
</div>
<div className="img_6">
                <img src = {img6}/>
<div className="h3-text">
   <h3>Pickup your order </h3>
</div>
<div className="p3-text">
    <p>Add to cart the <br/>quantity you want <br/>and pickup the order from farm directly</p>
</div>
</div>

</div>
<div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#FFF',
      }}>
        <motion.img 
          src={farm6} 
          alt="Happy Cow" 
          style={{ width: '40%', height: 'auto', marginRight: '20px' }} 
          animate={{
            y: [0, -25, 0], // Move up and down
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div style={{ maxWidth: '40%', textAlign: 'left' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#003D29',
            marginBottom: '10px',
          }}>Experience the Best Quality Milk</h2>
          <p style={{
            fontSize: '1rem',
            color: '#003D29',
            marginBottom: '10px',
            lineHeight: '1.6',
          }}>
            Our happy cows ensure that you get the best milk every day. Quality milk, from healthy cows, directly to your table.
          </p>
          <Link to = "/buynow">
          <motion.button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#FFF',
              backgroundColor: '#003D29',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy It Now
          </motion.button>
          </Link>
        </div>
      </div>

    
        </div>
</div>

            
        
    
  );
};

export default ThirdPage;
