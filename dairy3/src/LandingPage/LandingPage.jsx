import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import landing_img from '../assets/cow landing.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-image">
        <img src={landing_img} alt="Landing" />
      </div>
      <div className="landing-content">
        <div>
          <h1 className='main-head'>Welcome to</h1>
          <p className="johal-name"> Johal's Dairy Farms</p>
        </div>
        <Link to="/">
          <button>Proceed to Buy Milk</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
