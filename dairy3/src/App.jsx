import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
import Footer from './Footer/Footer';

import OrderNow from './SecondPage/Pages/OrderNow/OrderNow';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/OrderNow" element={<OrderNow />} />
      </Routes>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <Footer />
    </Router>
  );
}

export default App;
