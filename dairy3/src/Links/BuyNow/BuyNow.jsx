import React, { useState } from "react";
import "./BuyNow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import bottle_img from "../../assets/Rectangle 69.png";

const BuyNow = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({ 500: 0, 1000: 0, 1500: 0 });

  const handleAddToCart = (size) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: prevQuantities[size] + 1,
    }));
    setCart((prevCart) => [...prevCart, { size, quantity: 1 }]);
  };

  const handleRemoveFromCart = (size) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: Math.max(prevQuantities[size] - 1, 0),
    }));
    setCart((prevCart) => {
      const index = prevCart.findIndex(item => item.size === size && item.quantity > 0);
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart[index].quantity -= 1;
        if (newCart[index].quantity === 0) {
          newCart.splice(index, 1);
        }
        return newCart;
      }
      return prevCart;
    });
  };

  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="buynow">
      <div className="buynow-container">
        <div className="options">
          <p>Order</p>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faCartShopping} className="fa-cart-shopping" />
            <span className="cart-count">{totalItemsInCart}</span>
          </div>
        </div>
        <div className="quantity">
          {Object.keys(quantities).map((size) => (
            <div className="quantity-image" key={size}>
              <img src={bottle_img} alt="Bottle" />
              <p className="bottle-text">Cow Milk {size}ml</p>
              <div className="bottle-add">
                <div className="bottle-add-box">
                  <button className="add" onClick={() => handleAddToCart(size)}>+</button>
                  Add to Cart
                  <button className="remove" onClick={() => handleRemoveFromCart(size)}>-</button>
                </div>
              </div>
              <p>Quantity: {quantities[size]}</p>
            </div>
          ))}
        </div>
        <div className="bottle-text bottle-text-info">
          <p>Need help?<br /> Get in touch with us at Johal's Dairy Milk or give us a call at 0889846836</p>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
