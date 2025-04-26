import React from 'react';
import { getImagePath } from "@/lib/utils";

const BiocharSection: React.FC = () => {
  return (
    <section className="bg-white w-full overflow-x-hidden">
      <div className="container-padding pt-8 md:pt-8 pb-1 md:pb-0.5 ">
        <div className="container mx-auto text-left w-full pl-6 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-14">
          <h2 
            className="bg-[#3D4E3A] text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-4 md:mb-1 font-montserrat leading-[100%] tracking-[0%] capitalize text-transparent bg-clip-text">
            Biochar
          </h2>
        </div>
      </div>
      
      <div className="w-full container-padding flex justify-center mb-10">
        <img 
          src={getImagePath("/tree-light.png")} 
          alt="Tree" 
          className="w-full sm:w-[70%] h-auto object-contain"
        />
      </div>

      <div className="relative w-full h-52 overflow-hidden bg-[#F3F7F1] flex items-center">
        <div 
          className="whitespace-nowrap w-full text-center"
          style={{
            animation: 'scrollText 10s linear infinite',
            willChange: 'transform'
          }}
        >
          <span className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3D4E3A] font-montserrat">
            We bring life to soil • We bring life to soil • We bring life to soil • We bring life to soil
          </span>
        </div>
        <style jsx>{`
          @keyframes scrollText {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default BiocharSection;
