import React from 'react';
import { getImagePath } from "@/lib/utils";

const BiocharSection: React.FC = () => {
  return (
    <section className="bg-carbon w-full overflow-x-hidden">
      <div className="container-padding pt-8 md:pt-16 pb-4 md:pb-8">
        <div className="container mx-auto text-left w-full">
          <h2 className="font-montserrat font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[35px] leading-[100%] tracking-[0%] mb-2 
                         bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text inline-block">
            Biochar
          </h2>
          <p className="font-montserrat font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[0%] text-[#D9D9D9]">
            we bring life to soil
          </p>
        </div>
      </div>
      
      <div className="w-full container-padding">
        <img 
          src={getImagePath("/tree.png")} 
          alt="Tree" 
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default BiocharSection;
