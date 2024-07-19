import React from "react";
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className="sign-container">
            <div className="h-text">
                <h1>Sign Up</h1>
            </div>
            <div className="in-text">
                <p>Your Name</p>
                <input type="text" />
                <p>Email</p>
                <input type="text" />
                <p>Address</p>
                <input type="text" />
                <p>Set Password</p>
                <input type="text" />
                <p>Confirm Password</p>
                <input type="text" />
                
            </div>
            <buttton className="next">Next</buttton>
        </div>
    );
}

export default SignUp;
