import React from "react";
import "./OurMilk.css";

const OurMilk = () => {
    return (
        <>
            <div className="whole-container">
                <div className="milk-container">
                    <h2 className="milk-heading">
                        Our Milk
                    </h2>
                    <p className="milk-para">
                        "Stay healthy by including Milk<br/>
                        in your everyday life"
                    </p>
                </div>
                <div className="content-container">
                    <div className="milk-para2">
                        <p className="milk-para1">
                            We are bringing you the best Milk<br/>
                            directly from our farms......<br/>
                            Our Milk contains the highest nutritious value<br/>
                            that is not available in the Milk that you <br/>
                            brought from the market.........<br/>
                        </p>
                        <p className="milk-para2">
                            Here in the right side you can <br/>
                            easily see the nutrients value <br/>
                            that you are getting from our Milk....... <br/>
                        </p>
                    </div>
                    <div className="nutri-info">
                        <div className="nutri-heading">
                            <h1>Nutritional Information</h1>
                        </div>
                        <div className="nutri-p">
                            <p>Average Quantity per 100ml</p>
                            <hr/>
                            <p>Energy: 100cal</p>
                            <hr/>
                            <p>Carbohydrates: 200cal</p>
                            <hr/>
                            <p>Protein: 100 kcal</p>
                            <hr/>
                            <p>Ingredients: Pure fresh cow Milk</p>
                            <p>Contains: Fresh Milk</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurMilk;
