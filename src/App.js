// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewArrivals from './pages/NewArrivals';
import Basics from './pages/Basics';
import Women from './pages/Women';
import Men from './pages/Men';
import Sale from './pages/Sale';
import ProductDetail from './Components/ProductDetail';
import Navbar from './Components/Navbar';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <div className='font-inter'>
    <CurrencyProvider>
    <Router>
<Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    </CurrencyProvider>
    </div>
  );
}

export default App;
