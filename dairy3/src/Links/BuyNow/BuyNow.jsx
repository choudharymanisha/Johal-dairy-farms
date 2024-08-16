import React from "react";
import "./BuyNow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import bottle_img from "../../assets/Rectangle 69.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../cartSlice";

const BuyNow = () => {
  const dispatch = useDispatch();
  const quantities = useSelector(state => state.cart.quantities);
  const totalItemsInCart = Object.values(quantities).reduce((acc, qty) => acc + qty, 0);

  return (
    <div className="buynow">
      <div className="buynow-container">
        <div className="options">
          <p>Order</p>
          <div className="cart-icon">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} className="fa-cart-shopping" />
            </Link>
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
                  <button className="add" onClick={() => dispatch(addToCart(size))}>+</button>
                  Add to Cart
                  <button className="remove" onClick={() => dispatch(removeFromCart(size))}>-</button>
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
