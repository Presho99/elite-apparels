import React, { useState, useEffect } from 'react';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import largeOne from '../assets/sale.jpg'; // Add your large screen images
import largeTwo from '../assets/sales.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const images = isLargeScreen ? [largeOne, largeTwo] : [one, two];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-64 lg:w-full lg:h-[75vh] max-w-screen-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-64 lg:h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4 lg:mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 focus:outline-none ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
