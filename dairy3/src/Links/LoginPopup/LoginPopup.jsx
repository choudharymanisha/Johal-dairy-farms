import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginPopup.css";
import cross_icon from "../../assets/cross_icon.png";

function LoginPopup({ setShowLogin }) {
    const [currState, setCurrState] = useState("Sign Up");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Here, you can add any validation or API call for login/signup
        // After successful login/signup, navigate to the main layout
        navigate("/main"); // Replace "/main" with the actual route to your main layout
    };

    return (
        <div className="login-popup">
            <form className="login-popup-container" onSubmit={handleFormSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={cross_icon} alt="Close" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? null : <input type="text" placeholder="Your name" required />}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit">
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use and privacy policy</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    );
}

export default LoginPopup;
