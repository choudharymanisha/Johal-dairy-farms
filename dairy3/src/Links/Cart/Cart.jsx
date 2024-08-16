// src/components/Cart.jsx
import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const quantities = useSelector(state => state.cart.quantities);
  const cart = useSelector(state => state.cart.items);
  const pricePerMl = 0.5;

  // Calculate the total pricer
  const calculateTotal = () => {
    return Object.keys(quantities).reduce((total, size) => {
      const quantity = quantities[size];
      return total + (size * quantity * pricePerMl);
    }, 0);
  };

  return (
    <div className="cart-container">
        <h1 className="c-head">Order Summary</h1>
      <div className="order-summary">
        <div className="order-content">
          <p>Value of Products: {cart.length}</p>
          {Object.keys(quantities).map((size) => (
            <p key={size}>Quantity of {size}ml: {quantities[size]}</p>
          ))}
          <p>Price per Mililitre: {pricePerMl}</p>
          <p>Subtotal:     {calculateTotal()}</p>
          <p>Delivery Charges:       0</p>
          <hr/>
          <p>Total: {calculateTotal()}</p>
        </div>
      </div>
      <div className="cart-buttons">
        <Link to  = "/Check">
        <button className="ct-btn">Checkout Button </button>
        </Link>
        <Link to = "/main">
        <button className="sh-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
