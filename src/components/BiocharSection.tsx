import React from 'react';
import { getImagePath } from "@/lib/utils";

const BiocharSection: React.FC = () => {
  return (
    <section className="bg-carbon">
      <div className="px-6 md:px-12 pb-8">
        <div className="container mx-auto">
          <h2 className="section-title">
            Biochar <span className="gold-text">– We bring life to Soil</span>
          </h2>
        </div>
      </div>
      
      <div className="w-full">
        <img 
          src={getImagePath("/tree.png")} 
          alt="Tree" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default BiocharSection;
