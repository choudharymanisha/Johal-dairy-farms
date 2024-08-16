import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import farm10 from '../assets/farm10.png';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div>
          <h1 className="main-head">Welcome to</h1>
          <p className="johal-name">Johal's Dairy Farms</p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '0px',
          padding: '20px',
          overflow: 'hidden', // To ensure the image stays within the container during animation
        }}>
          <motion.img
            src={farm10}
            alt="Happy Cow"
            style={{ width: '500px', height: '200px' }}
            animate={{
              x: ['-100%', '100%'], // Move from left to right
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
        <Link to="/main">
          <button>Proceed to Buy Milk</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
