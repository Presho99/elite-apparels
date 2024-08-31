import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { faBars, faSearch, faHeart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faSearch} size="lg" className="text-white" />
          <FontAwesomeIcon icon={faHeart} size="lg" className="text-white" />
          <FontAwesomeIcon icon={faShoppingBasket} size="lg" className="text-white" />
        </div>
      </nav>
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
