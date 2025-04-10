
import React from 'react';

const CarbonCreditsSection: React.FC = () => {
  return (
    <section id="carbon" className="section-padding bg-carbon px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Projects Create<br />
              <span className="text-gold">Carbon Removal Credits</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              We develop & operate decentralized carbon removal projects that transform waste biomass into biochar through pyrolysis, creating measurable, permanent carbon removal. Our projects generate verified carbon credits, providing a sustainable revenue stream while making a real climate impact.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span>Certified carbon removal credits</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span>Transparent monitoring and reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span>Permanent carbon sequestration</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span>Soil health co-benefits</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-full border-4 border-gold p-2 inline-block">
              <div className="rounded-full overflow-hidden h-72 w-72 relative">
                <img 
                  src="https://images.unsplash.com/photo-1607000975606-c792cd52ae73?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="Carbon Credits" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-carbon/40">
                  <div className="bg-gold/90 text-carbon-dark font-bold px-4 py-2 rounded-md text-center">
                    CARBON CREDIT
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carbon cycle icons around the image */}
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-carbon-light p-3 rounded-full border border-gold/20">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-carbon-light p-3 rounded-full border border-gold/20">
              <span className="text-2xl">🌿</span>
            </div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-carbon-light p-3 rounded-full border border-gold/20">
              <span className="text-2xl">🌎</span>
            </div>
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-carbon-light p-3 rounded-full border border-gold/20">
              <span className="text-2xl">♻️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCreditsSection;
