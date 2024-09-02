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
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        {/* Logo and Hamburger */}
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-white mr-4">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <Link to="/" className="text-white text-xl font-bold">
            Logo
          </Link>
        </div>

        {/* Icons (Search, Heart, Basket) */}
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
