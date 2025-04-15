import React from 'react';
import { getImagePath } from "@/lib/utils";

const BiocharSection: React.FC = () => {
  return (
    <section className="bg-carbon">
      <div className="px-[200px] pt-16 pb-8">
        <div className="container mx-auto text-left">
          <h2 className="font-montserrat font-normal text-[35px] leading-[100%] tracking-[0%] mb-2 
                         bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text inline-block">
            Biochar
          </h2>
          <p className="font-montserrat font-light text-[20px] leading-[100%] tracking-[0%] text-[#D9D9D9]">
            we bring life to soil
          </p>
        </div>
      </div>
      
      <div className="w-full px-[200px]">
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
