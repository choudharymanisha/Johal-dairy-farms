import React from 'react';
import { motion } from 'framer-motion';
import farm1 from "../../assets/farm1.jpg";
import farm2 from "../../assets/farm2.jpg";
import farm3 from "../../assets/farm3.jpg";
import farm6 from "../../assets/farm6.png";
import { Link } from 'react-router-dom';

const images = [farm1, farm2, farm3];

const Farm = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#F9F8EC' }}>
      {/* Heading */}
      <h1 style={{
        textAlign: 'center',
        fontSize: '67px',
        color: '#003D29',
      }}>
        Happy Cow Yields More Milk
      </h1>
      
      {/* Paragraph */}
      <p style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#003D29',
        margin: '0 auto 20px', // Reduced top margin and added bottom margin
        maxWidth: '800px',
        lineHeight: '1.6',
        fontFamily: 'Arial, sans-serif'
      }}>
        The happier the cow is, the more it yields milk. This means we can provide you with the best quality milk, which not only benefits you but also ensures the well-being of our cows.
      </p>

      {/* Image Slider */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        marginTop: '10px' // Reduced top margin
      }}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            style={{
              width: '30%', // Adjust width as needed
              height: '100%',
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
            }}
            initial={{ x: '100%' }} // Start from right
            animate={{ x: '-100%' }} // Move to the left
            transition={{
              duration: 6, // Longer duration for slower movement
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Static Image with Text and Button */}
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
            y: [0, -10, 0], // Move up and down
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
  );
};

export default Farm;
