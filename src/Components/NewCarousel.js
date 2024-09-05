import React, { useState } from 'react';
import { products } from '../data/productsData'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const NewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use all the 10 images for the carousel
  const newArrivals = products.filter(product => product.category === 'new-arrivals').slice(0, 10);

  // Handlers for previous and next buttons
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newArrivals.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + getVisibleImages()) % newArrivals.length
    );
  };

  // Define the number of images to display per screen size
  const getVisibleImages = () => {
    if (window.innerWidth >= 1024) {
      return 5; // Large screens: 5 images at a time
    } else if (window.innerWidth >= 768) {
      return 3; // Medium screens: 3 images at a time
    } else {
      return 1; // Small screens: 1 image at a time
    }
  };

  const visibleImages = getVisibleImages();

  // Handle infinite looping by creating a dynamic slice of visible images
  const displayedImages = [
    ...newArrivals.slice(currentIndex, currentIndex + visibleImages),
    ...newArrivals.slice(0, (currentIndex + visibleImages) % newArrivals.length)
  ].slice(0, visibleImages);

  return (
    <div className="relative p-4 overflow-hidden">
         <h2 className="text-2xl font-bold text-center mb-6">New Arrivals</h2>
      {/* Left Chevron */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-gray-700 text-white rounded-full">
        <FontAwesomeIcon icon={faChevronLeft} size="2x" onClick={handlePrev} />
      </div>

      {/* Carousel container */}
      <div className="flex transition-transform duration-300 ease-in-out space-x-4">
        {displayedImages.map((product, index) => (
          <div
            key={product.id}
            className={`w-full ${window.innerWidth >= 1024 ? 'lg:w-1/5' : window.innerWidth >= 768 ? 'md:w-1/3' : 'sm:w-full'} h-[400px]`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right Chevron */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-gray-700 text-white rounded-full">
        <FontAwesomeIcon icon={faChevronRight} size="2x" onClick={handleNext} />
      </div>
    </div>
  );
};

export default NewCarousel;
