import React, { useEffect, useState } from 'react';
import { getImagePath } from "@/lib/utils";
import Footer from '@/components/Footer';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Generate array of image paths
    const imagePaths = Array.from({ length: 20 }, (_, i) => `/Gallery/${i + 1}.jpeg`);
    setImages(imagePaths);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="py-20"
        style={{ 
          background: 'linear-gradient(99.49deg, #222D2B 0.47%, #44615B 98.81%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Gallery
          </h1>
          <p className="text-xl text-white">Explore our collection of images</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: '#F0EDE4' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((src, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={getImagePath(src)}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 