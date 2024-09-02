import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { faBars, faSearch, faHeart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';
import SearchModal from './SearchModal'; // Import the SearchModal component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal open/close
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredProducts);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (id) => {
    setSearchQuery('');
    setSuggestions([]);
    setIsModalOpen(false); // Close modal after selecting a suggestion
    navigate(`/product/${id}`);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Small Screens: Hamburger Menu */}
        <div className="lg:hidden flex w-full justify-between items-center">
          <button onClick={toggleMenu} className="text-white">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <Link to="/" className="text-white text-xl font-bold">
            Logo
          </Link>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="text-white cursor-pointer"
              onClick={() => setIsModalOpen(true)} // Open modal on click
            />
            <FontAwesomeIcon icon={faHeart} size="lg" className="text-white" />
            <FontAwesomeIcon icon={faShoppingBasket} size="lg" className="text-white" />
          </div>
        </div>

        {/* Large Screens: Navbar */}
        <div className="hidden lg:flex w-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow flex justify-center space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/new-arrivals" className="text-white">New Arrivals</Link>
            <Link to="/basics" className="text-white">Basics</Link>
            <Link to="/women" className="text-white">Women</Link>
            <Link to="/men" className="text-white">Men</Link>
            <Link to="/sale" className="text-white">Sale</Link>
          </div>

          {/* Icons and Currency Converter */}
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="text-white cursor-pointer"
              onClick={() => setIsModalOpen(true)} // Open modal on click
            />
            <select
              id="currency"
              className="bg-gray-800 border border-gray-700 text-white py-2 px-3 rounded-md shadow-sm focus:outline-none"
            >
              <option>GBP</option>
              <option>EUR</option>
              <option>USD</option>
              <option>CAD</option>
              <option>AUD</option>
            </select>
            <FontAwesomeIcon icon={faHeart} size="lg" className="text-white" />
            <FontAwesomeIcon icon={faShoppingBasket} size="lg" className="text-white" />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Search Modal */}
      <SearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} // Pass setter directly
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
        handleSearchChange={handleSearchChange} // Pass the correct search change handler
      />
    </>
  );
};

export default Navbar;
