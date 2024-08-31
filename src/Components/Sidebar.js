import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleMenu }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Close Button */}
      <button
        onClick={toggleMenu}
        className="text-white absolute top-4 right-4"
      >
        Close
      </button>

      {/* Currency Selector */}
      <div className="p-4 border-b border-gray-700">
        <label htmlFor="currency" className="block text-sm font-medium">
          Select Currency
        </label>
        <select
          id="currency"
          className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>GBP</option>
          <option>EUR</option>
          <option>USD</option>
          <option>CAD</option>
          <option>AUD</option>
        </select>
      </div>

      {/* Nav Links */}
      <ul className="p-4">
        <li className="py-2 border-b border-gray-700">
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="py-2 border-b border-gray-700">
          <Link to="/new-arrivals" onClick={toggleMenu}>New Arrivals</Link>
        </li>
        <li className="py-2 border-b border-gray-700">
          <Link to="/basics" onClick={toggleMenu}>Basics</Link>
        </li>
        <li className="py-2 border-b border-gray-700">
          <Link to="/women" onClick={toggleMenu}>Women</Link>
        </li>
        <li className="py-2 border-b border-gray-700">
          <Link to="/men" onClick={toggleMenu}>Men</Link>
        </li>
        <li className="py-2 border-b border-gray-700">
          <Link to="/sale" onClick={toggleMenu}>Sale</Link>
        </li>
      </ul>
    </div>
  );
}
