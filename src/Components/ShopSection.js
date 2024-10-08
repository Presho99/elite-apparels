import React from 'react';
import { Link } from 'react-router-dom';
import loungewear from '../assets/one.jpg';
import sale from '../assets/two.jpg';
import basics from '../assets/one.jpg';
import tops from '../assets/two.jpg';
import dresses from '../assets/one.jpg';
// import under10 from '../assets/two.jpg'; // Uncomment if you decide to use this section

const ShopSection = () => {
  const sections = [
    { imgSrc: loungewear, caption: 'Shop new arrivals', link: '/new-arrivals' },
    { imgSrc: sale, caption: 'Shop basics', link: '/basics' },
    { imgSrc: basics, caption: 'Shop for women', link: '/women' },
    { imgSrc: tops, caption: 'Shop for men', link: '/men' },
    { imgSrc: dresses, caption: 'Shop sale', link: '/sale' },
    // { imgSrc: under10, caption: 'Under $10', link: '/under10' } // Uncomment if you decide to use this section
  ];

  return (
    <div className="mt-8 space-y-8 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
      {sections.map((section, index) => (
        <Link
          key={index}
          to={section.link}
          className="block relative cursor-pointer lg:rounded-lg lg:overflow-hidden lg:shadow-lg"
        >
          <img
            src={section.imgSrc}
            alt={section.caption}
            className="w-full h-80 object-cover rounded-lg lg:h-96 lg:w-full" // Increased height for small screens
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center">
            <p>{section.caption}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopSection;
