
import React from 'react';

// Biochar benefits data
const biocharBenefits = [
  {
    id: 1,
    title: 'CO₂ removed',
    description: 'Carbon sequestered for 1000+ years',
    position: 'top-1/4 left-10'
  },
  {
    id: 2,
    title: 'Nitrogen leaching reduced',
    description: 'By up to 80%',
    position: 'top-1/3 right-10'
  },
  {
    id: 3,
    title: 'Water retention increased',
    description: 'Reduces irrigation needs by 50%',
    position: 'bottom-1/3 left-5'
  },
  {
    id: 4,
    title: 'Harvest increase',
    description: 'Yield improvements of 10-30%',
    position: 'bottom-1/4 right-10'
  },
  {
    id: 5,
    title: 'Microbial activity',
    description: 'Increases beneficial soil microbes',
    position: 'bottom-10 left-1/4'
  },
  {
    id: 6,
    title: 'Tree growth acceleration',
    description: 'Up to 41% faster growth rates',
    position: 'top-10 right-1/4'
  }
];

const BiocharSection: React.FC = () => {
  return (
    <section className="section-padding bg-carbon px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="section-title">
          Biochar <span className="gold-text">– We bring life to Soil</span>
        </h2>
        
        <div className="relative h-[600px] md:h-[800px] mt-16">
          {/* Center plant illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-80 h-80">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path 
                  fill="#D4AF37" 
                  d="M47.7,-61.1C59.9,-50.5,67.2,-33.7,70.7,-16.2C74.3,1.3,74.1,19.5,67.2,35.3C60.2,51.1,46.4,64.6,30.2,70.6C14,76.7,-4.7,75.3,-22.1,69.6C-39.5,63.9,-55.6,53.9,-66.4,38.4C-77.2,22.9,-82.6,1.9,-77.8,-15.9C-73,-33.8,-58,-48.6,-42.2,-57.8C-26.4,-67,-13.2,-70.7,2.3,-73.7C17.8,-76.7,35.6,-71.8,47.7,-61.1Z" 
                  transform="translate(100 100)" 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-1 bg-gold-dark rounded-full"></div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-24 w-24 bg-green-700 rounded-full flex items-center justify-center">
                  <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="h-8 w-8 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="h-24 w-24 bg-gold-dark rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Benefit callouts */}
          {biocharBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`absolute ${benefit.position} transform -translate-y-1/2 max-w-xs`}
            >
              <div className="bg-carbon-light border border-gold/50 p-4 rounded-lg shadow-md">
                <h3 className="text-gold font-bold text-lg">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
              <div className="w-8 h-px bg-gold/50 absolute top-1/2 left-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiocharSection;
