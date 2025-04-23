import React, { useState, useEffect } from 'react';
import { getImagePath } from "@/lib/utils";

const images = [
  "/tech-slide/1 (1).png",
  "/tech-slide/1 (2).png",
  "/tech-slide/1 (3).png",
  "/tech-slide/1 (4).png",
  "/tech-slide/1 (5).png",
];

const HeroSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)] z-10" />
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default HeroSlideshow; 