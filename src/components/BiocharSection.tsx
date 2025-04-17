import React from 'react';
import { getImagePath } from "@/lib/utils";

const BiocharSection: React.FC = () => {
  return (
    <section className="bg-beige w-full overflow-x-hidden">
      <div className="container-padding pt-8 md:pt-8 pb-1 md:pb-0.5 ">
        <div className="container mx-auto text-left w-full pl-6 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-14">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-1 font-montserrat leading-[100%] tracking-[0%] capitalize"
            style={{
              background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Biochar
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-dark/80 mb-2 md:mb-4">
            We bring life to soil
          </p>
        </div>
      </div>
      
      <div className="w-full container-padding flex justify-center pb-50 md:pb-20 lg:pb-20 xl:pb-20">
        <img 
          src={getImagePath("/tree-light.png")} 
          alt="Tree" 
          className="w-full sm:w-[45%] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default BiocharSection;
