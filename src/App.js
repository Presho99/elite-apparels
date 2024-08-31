import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewArrivals from './pages/NewArrivals';
import Basics from './pages/Basics';
import Women from './pages/Women';
import Men from './pages/Men';
import Sale from './pages/Sale';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </Router>
  );
}

export default App;
