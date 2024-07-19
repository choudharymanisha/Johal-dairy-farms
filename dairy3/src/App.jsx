import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
import Footer from './Footer/Footer';
import Order from './Links/Order/Order';
import SignUp from './Links/SignUp/SignUp';
import OurMilk from './Links/OurMilk/OurMilk';
import Farm from './Links/Farm/Farm';
import BuyNow from './Links/BuyNow/BuyNow';
import LandingPage from './LandingPage/LandingPage';

// Layout component to include common components
const MainLayout = ({ children }) => {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainLayout />}></Route>
        <Route path="/Order" element={<Order />} />
        <Route path="/" element={<MainLayout />} />
        <Route path  = "/SignUp" element = {<SignUp/>}/>
        <Route path  = "/ourMilk" element = {<OurMilk/>}/>
        <Route path = "/farm" element = {<Farm/>}/>
        <Route path = "/buynow"  element = {<BuyNow/>}/>
      </Routes>
    </Router>
  );
}

export default App;
