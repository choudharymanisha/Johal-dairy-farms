
import React from "react"
import  cow_img from "../../assets/Order.png";
import "./Order.css"
import { Link } from "react-router-dom";


const Order = () =>{
    return(
        <>
        <div className="order-container">
<div className="box-container">
    <div className="first-box">
        <div className="login-text">
            <p className="para-line">
                Ordering Fresh Farm Milk<br/>
                directly from the farm<br/>
                can make you happy<br/>
                For this Firstly you <br/>
                have to Sign in your account<br/>
            </p>
            <div className="cow-img">
                
                <img src = {cow_img}/>
            </div>
        </div>
       
    </div>
    <Link to = "/SignUp">
    <button className="cow-btn">Sign Up Now</button>
    </Link>
   </div>
   
    <div className="second-box">
        
    <div className="text-box">
        <h1 className="heading-second"> Sign in your Acccount</h1>
    </div>
    <div className="input-field">
        <p> Enter your Email</p>
        <input type  = "text"/>
        <p> Enter your Password</p>
        <input type  = "text"/>
       
    </div>
    <Link to = "/SignUp">

    <button className="cow-btn2">Sign Up Now</button>
    </Link>
    <div className="third-box">
        <p className="third-content">
            Don't have an Account?<br/>
            Sign  up to get the access<br/>
            and buy Milk<br/>
             </p>
             <Link to = "/SignUp">
             <button className="cow-btn">Sign Up Now</button>
             </Link>
    </div>
    <div className="third-text">
        <p className="third-p">
            Forget your password?
        </p>
        <p className="third-p2">
            Set it here
        </p>


    </div>
    </div>
    </div>
    
        </>
    )

}
export default Order