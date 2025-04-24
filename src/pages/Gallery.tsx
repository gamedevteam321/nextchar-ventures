import React, { useEffect, useState } from 'react';
import { getImagePath } from "@/lib/utils";
import Footer from '@/components/Footer';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Define all image files in the correct order
    const imageFiles = [
      // V11 Medium image first
      '/Gallery/v11 Medium.jpeg',
      
      // Rest of V series Medium images
      ...Array.from({ length: 10 }, (_, i) => `/Gallery/v${i + 1} Medium.jpeg`),
      '/Gallery/v12 Medium.jpeg',
      '/Gallery/v13 Medium.jpeg',
      '/Gallery/v14.jpeg',
      
      // Original numbered JPEG files
      ...Array.from({ length: 20 }, (_, i) => `/Gallery/${i + 1}.jpeg`),
      
      // N series Medium images
      ...Array.from({ length: 3 }, (_, i) => `/Gallery/n${i + 1} Medium.jpeg`),
      
      // C series Medium images
      ...Array.from({ length: 18 }, (_, i) => `/Gallery/c${i + 1} Medium.jpeg`),
      
      // PNG files
      '/Gallery/container 1.png',
      '/Gallery/Containe 2.png',
      '/Gallery/Container 3.png',
      '/Gallery/container4.png',
      '/Gallery/container5.png',
      '/Gallery/Container6.png',
      '/Gallery/container7.png',
      '/Gallery/container8.png',
      '/Gallery/drawing.png',
      '/Gallery/nightview-container.png',
      '/Gallery/warehouse.png'
    ];
    setImages(imageFiles);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="py-20 bg-slider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl font-bold mb-4 text-white">
            Our Gallery
          </h1>
          <p className="text-xl text-white">Small steps towards a sustainable future</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: '#FFFFFF' }}
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