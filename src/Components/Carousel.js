import React, { useState, useEffect } from 'react';
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
one,
two
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

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden ">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className="w-full h-64 object-cover transition duration-500 ease-in-out" 
        />
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

export default Carousel;
