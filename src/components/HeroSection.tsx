import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils";

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
      <section className="relative h-[966px] -mt-20">
        <div className="absolute inset-0 w-full h-[966px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.72)] via-transparent to-[rgba(0,0,0,0.8)] z-10"
               style={{
                 background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 13.5%, rgba(0, 0, 0, 0.4) 47.18%, rgba(0, 0, 0, 0.8) 95.09%)'
               }}
          />
          <img 
            src={getImagePath("/Hero.png")}
            alt="Hero"
            className="w-full h-[966px] object-cover object-center"
          />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-center px-0 md:px-8 lg:px-16">
          <div className="mt-[200px] sm:mt-[250px] md:mt-[350px] lg:mt-[400px] pl-[30px]">
            <h1 className="font-montserrat text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[120%] md:leading-[100%] tracking-[0%] font-bold mb-4 md:mb-6 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col">
                <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text whitespace-nowrap">
                  Scalable Carbon Solutions
                </span>
                <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text mt-2 whitespace-nowrap">
                  For a Sustainable Future
                </span>
              </div>
            </h1>
            <div className="font-montserrat text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] leading-[120%] md:leading-[100%] tracking-[0%] font-medium flex flex-wrap items-center gap-x-2">
              <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">Clean</span>
              <span className="text-white">Planet.</span>
              <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">Clean</span>
              <span className="text-white">Soil.</span>
              <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">Clean</span>
              <span className="text-white">Food.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-carbon-dark w-full px-[200px] pt-[150px] pb-6 md:pb-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <p className="font-montserrat font-light text-[25px] leading-[100%] tracking-[0%] w-full reveal bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text" style={{ animationDelay: '0.2s' }}>
            We transform Biomass Waste streams that are presently being burnt, landfilled or underutilised to products imperative for life
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
