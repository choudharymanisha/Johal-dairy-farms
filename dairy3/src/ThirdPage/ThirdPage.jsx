import React from "react";
import "./ThirdPage.css";
import img1 from "../assets/Rectangle 36.png";
import img2 from "../assets/Rectangle 37.png";
import img3 from "../assets/Rectangle 38.png";
import img4 from "../assets/Rectangle 41.png";
import img5 from "../assets/Rectangle 42.png";
import img6 from "../assets/Rectangle 43.png";
import img7 from "../assets/Rectangle 44.png";
import img8 from "../assets/visit2.webp";



const ThirdPage = () => {
  return (
    <div className="third-container">
      <div className="heading">
        <h1>Purety is our surety</h1>
      </div>
      <div className="image3-container">
        <div className="img_1">
          <img src={img1} alt="Milk" />
          <div className="h3-text">
            <h3>Providing you the<br/> best Milk</h3>
          </div>
          <div className="p3-text">
            <p>
              We are providing you the<br />
              milk at a very reasonable price<br />
              you can buy milk directly from our website
            </p>
          </div>
        </div>
        <div className="img_2">
          <img src={img2} alt="Order milk" />
          <div className="h3-text">
            <h3>Order milk directly <br/>from the farm</h3>
          </div>
          <div className="p3-text">
            <p>
              you can place the order directly<br />
              by clicking at login and<br />
              placed your order from the website
            </p>
          </div>
        </div>
        <div className="img_3">
          <img src={img3} alt="Buy cows" />
          <div className="h3-text">
            <h3>You can now buy cows <br/>online at our website</h3>
          </div>
          <div className="p3-text">
            <p>
              you can now buy cows from<br />
              our website<br />
              by checking prices and request a visit
            </p>
          </div>
        </div>
        
      </div>
      <div className="heading-2">
            <h1> How it Works?</h1>
            <p className="p2-text"> Buying our milk is not simple as grabbing a bottle<br/> firstly you have to create a account<br/>and then placed the order according to the availability</p>
            <div className="image3-container">
                <div className="img_4">
                <img src = {img4}/>
<div className="h3-text">
   <h3> Create your account</h3>
</div>
<div className="p3-text">
    <p>Firstly you have to<br/>create an account and<br/> than you can proceed futher</p>
</div>
</div>
<div className="img_5">
                <img src = {img5}/>
<div className="h3-text">
   <h3>Place your order </h3>
</div>
<div className="p3-text">
    <p>After creating account<br/>you can check the availability<br/>and place the order</p>
</div>
</div>
<div className="img_6">
                <img src = {img6}/>
<div className="h3-text">
   <h3>Pickup your order </h3>
</div>
<div className="p3-text">
    <p>Add to cart the <br/>quantity you want <br/>and pickup the order from farm directly</p>
</div>
</div>

</div>

    <div className="heading-3">
        <h1> For Buying Cows</h1>
        <p className="p2-text">
            For buying cows firstly you have to<br/>create a account and than proceed futher.........
        </p>
    </div>
    <div className="image3-container">
        <div className="img_7">
            <img src = {img7}/>
            <div className="p3-text">
                For buying cows create <br/>your account and than check the <br/>cows availabilty and price

            </div>
            </div>
            <div className="img_8">
                <img src = {img8}/>
                <div className="p3-text">
                    After checking the price and avilability <br/> you can place a visit <br/>at our farm
                </div>
            </div>

        </div>
</div>

            </div>
        
    
  );
};

export default ThirdPage;
