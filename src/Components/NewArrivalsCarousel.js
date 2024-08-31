import React, { useState, useEffect } from 'react';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NewArrivalsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: one, name: 'Outfit One', price: '$50' },
    { src: two, name: 'Outfit Two', price: '$60' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">New Arrivals</h2>
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            className="bg-white bg-opacity-50 p-2 rounded-full"
            onClick={goToPrevious}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            className="bg-white bg-opacity-50 p-2 rounded-full"
            onClick={goToNext}
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
          </button>
        </div>
        <div className="relative overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center">
                <p>{image.name}</p>
                <p>{image.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4">
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

export default NewArrivalsCarousel;
