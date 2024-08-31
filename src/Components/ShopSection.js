import React from 'react';

import loungewear from '../assets/one.jpg';
import sale from '../assets/two.jpg';
import basics from '../assets/one.jpg';
import tops from '../assets/two.jpg';
import dresses from '../assets/one.jpg';
import under10 from '../assets/two.jpg';

const ShopSection = () => {
  const sections = [
    { imgSrc: loungewear, caption: 'Shop Loungewear' },
    { imgSrc: sale, caption: 'Shop Sale' },
    { imgSrc: basics, caption: 'Shop Basics' },
    { imgSrc: tops, caption: 'Shop Tops' },
    { imgSrc: dresses, caption: 'Shop Dresses' },
    { imgSrc: under10, caption: 'Under $10' }
  ];

  return (
    <div className="mt-8 space-y-8">
      {sections.map((section, index) => (
        <div key={index} className="relative">
          <img
            src={section.imgSrc}
            alt={section.caption}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center">
            <p>{section.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopSection;
