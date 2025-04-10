
import React from 'react';

const ClosingSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-carbon-light px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Global soils are collapsing—<span className="text-gold">overworked, depleted, and contaminated</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8">
            Biochar is the most effective known solution to restore soil health and sequester carbon at scale
          </p>
          
          <div className="mt-12">
            <p className="text-2xl italic text-gold mb-4">
              "Nothing else comes close"
            </p>
            <p className="text-gray-400">
              — Adam Green, Co-Founder, lovable.dev
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
