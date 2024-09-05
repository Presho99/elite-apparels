import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-900 text-white pt-8 mt-4">
      {/* Top Part: Email Subscription */}
      <div className="max-w-lg lg:max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-xl lg:text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 lg:p-4 rounded-l-md w-64 lg:w-96 text-black"
          />
          <button className="p-2 lg:p-4 bg-blue-500 rounded-r-md">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>

      {/* Bottom Part: Links Section */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-lg lg:max-w-4xl mx-auto lg:flex lg:justify-between lg:items-start">
          
          {/* Information Section */}
          <div className="mb-4 px-4 lg:mb-0 lg:w-1/3">
            {/* Title visible only on large screens */}
            <h3 className="hidden lg:block font-semibold mb-2 lg:mb-4">Information</h3>
            <button
              className="w-full text-left font-semibold flex justify-between items-center py-2 lg:hidden"
              onClick={() => toggleSection('information')}
            >
              Information
              <FontAwesomeIcon icon={faCaretRight} className={`transition-transform duration-300 ${openSection === 'information' ? 'rotate-90' : ''}`} />
            </button>
            <div
              className={`overflow-hidden lg:overflow-visible lg:block transition-max-height duration-500 ease-in-out ${
                openSection === 'information' || window.innerWidth >= 1024 ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="pl-4 lg:pl-0">
              <p className="py-1">Delivery</p>

                <p className="py-1">Returns and Refunds</p>
                <p className="py-1">About Elite</p>
              </div>
            </div>
          </div>
          {/* Account  */}

          <div className="mb-4 px-4 lg:mb-0 lg:w-1/3">
            {/* Title visible only on large screens */}
            <h3 className="hidden lg:block font-semibold mb-2 lg:mb-4">Account</h3>
            <button
              className="w-full text-left font-semibold flex justify-between items-center py-2 lg:hidden"
              onClick={() => toggleSection('information')}
            >
              Account
              <FontAwesomeIcon icon={faCaretRight} className={`transition-transform duration-300 ${openSection === 'information' ? 'rotate-90' : ''}`} />
            </button>
            <div
              className={`overflow-hidden lg:overflow-visible lg:block transition-max-height duration-500 ease-in-out ${
                openSection === 'information' || window.innerWidth >= 1024 ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="pl-4 lg:pl-0">
                <p className="py-1">Terms and Conditions</p>
                <p className="py-1">Privacy Policy</p>
              </div>
            </div>
          </div>


          {/* Delivery Section */}
          <div className="mb-4 px-4 lg:mb-0 lg:w-1/3">
            {/* Title visible only on large screens */}
            <h3 className="hidden lg:block font-semibold mb-2 lg:mb-4">Delivery</h3>
            <button
              className="w-full text-left font-semibold flex justify-between items-center py-2 lg:hidden"
              onClick={() => toggleSection('delivery')}
            >
              Delivery
              <FontAwesomeIcon icon={faCaretRight} className={`transition-transform duration-300 ${openSection === 'delivery' ? 'rotate-90' : ''}`} />
            </button>
            <div
              className={`overflow-hidden lg:overflow-visible lg:block transition-max-height duration-500 ease-in-out ${
                openSection === 'delivery' || window.innerWidth >= 1024 ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="pl-4 lg:pl-0">
                <p className="py-1">UK Standard</p>
                <p className="py-1">UK Express</p>
                <p className="py-1">Europe</p>
                <p className="py-1">International</p>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mb-4 px-4 lg:mb-0 lg:w-1/3">
            {/* Title visible only on large screens */}
            <h3 className="hidden lg:block font-semibold mb-2 lg:mb-4">Contact Us</h3>
            <button
              className="w-full text-left font-semibold flex justify-between items-center py-2 lg:hidden"
              onClick={() => toggleSection('contact')}
            >
              Contact Us
              <FontAwesomeIcon icon={faCaretRight} className={`transition-transform duration-300 ${openSection === 'contact' ? 'rotate-90' : ''}`} />
            </button>
            <div
              className={`overflow-hidden lg:overflow-visible lg:block transition-max-height duration-500 ease-in-out ${
                openSection === 'contact' || window.innerWidth >= 1024 ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="pl-4 lg:pl-0">
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
