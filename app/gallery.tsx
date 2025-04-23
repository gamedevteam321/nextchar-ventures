'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
      <section id="hero" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600">Explore our collection of images</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((src, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={500}
                    height={750}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 