import React from 'react'
import "./SecondPage.css"
import img_2 from "../assets/happy kid.png";
const SecondPage = () =>{
    return(
        <>
        <div className="sec-container">
            <div className="img-container">
                <img src  = {img_2}/>
            </div>
            <div className="text-container">
                <h1 className='h-text'> 100%  Full pure </h1>
                <h1 className='h-text'> Cow Milk </h1>
                <p className='p-text'> "we aim to provide you the<br/> best  milk throughout <br/> the city</p>
            
            <div className="sec-buttons">
                <button> Our Milk </button>
                <button> Nutritious Value </button>
            </div>
</div>
        </div>
        
        
        </>
    )
}
export default SecondPage