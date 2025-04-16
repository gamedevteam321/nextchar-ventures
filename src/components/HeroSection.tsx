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
      <section className="relative h-[800px] sm:h-[500px] md:h-[900px] lg:h-[1000px] -mt-20">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.72)] via-transparent to-[rgba(0,0,0,0.8)] z-10"
               style={{
                 background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 13.5%, rgba(0, 0, 0, 0.4) 47.18%, rgba(0, 0, 0, 0.8) 95.09%)'
               }}
          />
          <img 
            src={getImagePath("/Hero.png")}
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="mt-[100px] sm:mt-[150px] md:mt-[200px] lg:mt-[400px] pl-4 sm:pl-6 md:pl-8 lg:pl-[30px]">
            <h1 className="font-montserrat text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[120%] md:leading-[100%] tracking-[0%] font-bold mb-4 md:mb-6 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col">
                <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text whitespace-nowrap">
                  Scalable Carbon Solutions
                </span>
                <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text mt-2 whitespace-nowrap">
                  For a Sustainable Future
                </span>
              </div>
            </h1>
            <div className="font-montserrat text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[120%] md:leading-[100%] tracking-[0%] font-medium flex flex-wrap items-center gap-x-2">
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
      <section className="bg-carbon-dark w-full px-4 sm:px-6 md:px-8 lg:px-[200px] pt-[50px] sm:pt-[75px] md:pt-[100px] lg:pt-[150px] pb-6 md:pb-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <p className="font-montserrat font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] leading-[120%] md:leading-[100%] tracking-[0%] w-full reveal bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text" style={{ animationDelay: '0.2s' }}>
            We transform Biomass Waste streams that are presently being burnt, landfilled or underutilised to products imperative for life
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
