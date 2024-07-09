import React from 'react';
import { Link } from 'react-router-dom';
import img_1 from '../assets/cow 3.jpg';
import "./FirstPage.css";

const FirstPage = () => {
  return (
    <div className='nav-container'>
      <div className="nav-bar">
        <button>Contact us</button>
        <button>Menu</button>
        <button>Buy Now</button>
        <button>Our Milk</button>
      </div>
      <div className="image-container">
        <p className="image-text">Buy Delicious and pure <br/> Milk online</p>
        <img src={img_1} alt="A cow" />
        <Link to="/OrderNow">
          <button className='o-btn'>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default FirstPage;
