import React from 'react';

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
          src="/tree.png" 
          alt="Tree Illustration" 
          className="w-full h-auto object-contain max-h-[600px] md:max-h-[800px]"
        />
      </div>
    </section>
  );
};

export default BiocharSection;
