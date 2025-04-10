import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Image Section */}
      <section className="relative overflow-hidden mt-20">
        <div 
          className="mx-2 relative"
        >
          <img 
            src="/Hero.png"
            alt="Hero"
            className="w-full h-full object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
          />
          <div className="absolute bottom-24 md:bottom-32 lg:bottom-40 left-4 md:left-12 lg:left-20 z-10 p-4 md:p-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              <span className="block">Scalable Carbon Solutions</span>
              <span className="block">For a Sustainable Future</span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl space-y-1 md:space-y-0">
              <span className="text-[#D4AF37]">Clean</span>
              <span className="text-white"> Planet. </span>
              <span className="text-[#D4AF37]">Clean</span>
              <span className="text-white"> Soil. </span>
              <span className="text-[#D4AF37]">Clean</span>
              <span className="text-white"> Food.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-carbon-dark px-4 md:px-6 py-6 md:py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <p className="text-base sm:text-lg md:text-xl text-white/80 reveal max-w-[800px]" style={{ animationDelay: '0.2s' }}>
              We transform Biomass Waste streams that are presently being burnt, landfilled or underutilised to products imperative for life
            </p>
            
            <div className="reveal shrink-0" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-[#D4AF37] hover:bg-gold-light text-black px-6 py-2 rounded-sm text-sm whitespace-nowrap">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
