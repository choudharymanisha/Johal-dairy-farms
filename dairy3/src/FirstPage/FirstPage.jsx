import React from 'react';
import { Link } from 'react-router-dom';
import img_1 from '../assets/cow 3.jpg';
import "./FirstPage.css";

const FirstPage = () => {
  return (
    <div className='nav-container'>
      <div className="nav-bar">
        <Link to = "/">
        <button>Contact us</button>
        </Link>
        <Link to = "/Farm">
        <button>Our Farm</button>
        </Link>
        <Link to = "/BuyNow">
        <button>Buy Now</button>
        </Link>
        <Link to = "/login">
        <button>Sign Up</button>
        </Link>
      </div>
      <div className="image-container">
        <p className="image-text">Buy Delicious and pure <br/> Milk online</p>
        <img src={img_1} alt="A cow" />
        <Link to="/Order">
          <button className='o-btn'>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default FirstPage;
