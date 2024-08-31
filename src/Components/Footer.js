import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-900 text-white pt-8">
      {/* Top Part: Email Subscription */}
      <div className="max-w-lg mx-auto text-center mb-8">
        <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-md w-64 text-black"
          />
          <button className="p-2 bg-blue-500 rounded-r-md">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>

      {/* Bottom Part: Links Section */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-lg mx-auto">
          {/* Information Section */}
          <div className="mb-4 px-4">
            <button
              className="w-full text-left font-semibold flex justify-between items-center py-2"
              onClick={() => toggleSection('information')}
            >
              Information
              <FontAwesomeIcon icon={faCaretRight} className={`transition-transform duration-300 ${openSection === 'information' ? 'rotate-90' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openSection === 'information' ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="pl-4">
                <p className="py-1">Returns and Refunds</p>
                <p className="py-1">About Elite</p>
              </div>
            </div>
          </div>

          {/* Delivery Section */}
          <div className="mb-4 px-4">
            <button
              className="w-full text-left font-semibold flex justify-between items-center py-2"
              onClick={() => toggleSection('delivery')}
            >
              Delivery
              <FontAwesomeIcon icon={faCaretRight} className={`transition-transform duration-300 ${openSection === 'delivery' ? 'rotate-90' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openSection === 'delivery' ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="pl-4">
                <p className="py-1">UK Standard</p>
                <p className="py-1">UK Express</p>
                <p className="py-1">Europe</p>
                <p className="py-1">International</p>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mb-4 px-4">
            <button
              className="w-full text-left font-semibold flex justify-between items-center py-2"
              onClick={() => toggleSection('contact')}
            >
              Contact Us
              <FontAwesomeIcon icon={faCaretRight} className={`transition-transform duration-300 ${openSection === 'contact' ? 'rotate-90' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openSection === 'contact' ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="pl-4">
                <p className="py-1">customerservice@eliteexclusive.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Notice */}
      <div className="bg-gray-900 py-4 text-center">
        <p className="text-sm">&copy; 2024 EliteExclusiveApparels. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
