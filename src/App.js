import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app"> 
        <Header />
        <Routes>
          <Route path="/checkout" element={<><h1>I am the checkout</h1></>} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Home */}
      </div>
    </Router>
  );
}

export default App;
