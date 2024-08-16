import React from 'react';
import "./SecondPage.css";
import img_2 from "../assets/happy.png";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SecondPage = () => {
    return (
        <>
            <div className="sec-container">
                <div className="img-container">
                    {/* Apply motion to the image */}
                    <motion.img 
                        src={img_2} 
                        alt="Happy Cow"
                        animate={{ x: [-20, 20, -20] }} // Horizontal left-to-right motion
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ maxWidth: '100%', borderRadius: '10px', marginTop: '10px' }} // Ensure existing styles are maintained
                    />
                </div>
                <div className="text-container">
                    <h1 className='h-text'>100% Full Pure</h1>
                    <h1 className='h-text'>Cow Milk</h1>
                    <p className='p-text'>
                        "We aim to provide you the<br/> best milk throughout<br/> the city."
                    </p>
                
                    <div className="sec-buttons">
                        <Link to="/OurMilk">
                            <button>Our Milk</button>
                        </Link>
                        <Link to="/OurMilk">
                            <button>Nutritious Value</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SecondPage;
