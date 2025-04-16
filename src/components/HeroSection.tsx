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
      <section className="relative h-[800px] sm:h-[500px] md:h-[900px] lg:h-[800px] -mt-20">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6, 6, 6, 0.72)] via-transparent to-[rgba(0, 0, 0, 0.8)] z-10"
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
        <div className="relative z-20 h-full flex flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 pl-4 sm:pl-6 md:pl-8 lg:pl-[30px]">
            <h1 className="font-montserrat text-[20px] xs:text-[24px] sm:text-[28px] md:text-[40px] lg:text-[60px] leading-[120%] md:leading-[100%] tracking-[0%] font-bold mb-4 md:mb-6">
              <div className="flex flex-col">
                <span 
                  style={{
                    background: 'linear-gradient(90deg, #F0EDE4 0%, #A4966E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  className="whitespace-nowrap"
                >
                  Scalable Carbon Solutions
                </span>
                <span 
                  style={{
                    background: 'linear-gradient(90deg, #F0EDE4 0%, #A4966E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  className="whitespace-nowrap mt-2"
                >
                  For a Sustainable Future
                </span>
              </div>
            </h1>
            <div className="font-montserrat text-[16px] sm:text-[18px] md:text-[24px] lg:text-[32px] leading-[120%] md:leading-[100%] tracking-[0%] font-medium flex flex-wrap items-center gap-x-2">
              <span style={{
                background: 'linear-gradient(90deg, #A4966E 0%, #F0EDE4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Clean</span>
              <span className="text-beige">Planet.</span>
              <span style={{
                background: 'linear-gradient(90deg, #A4966E 0%, #F0EDE4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Clean</span>
              <span className="text-beige">Soil.</span>
              <span style={{
                background: 'linear-gradient(90deg, #A4966E 0%, #F0EDE4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Clean</span>
              <span className="text-beige">Food.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-beige w-full px-4 sm:px-6 md:px-8 lg:px-[200px] pt-[60px] sm:pt-[25px] md:pt-[40px] lg:pt-[75px] pb-6 md:pb-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <p className="font-montserrat font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] leading-[120%] md:leading-[100%] tracking-[0%] w-full reveal text-green-dark" style={{ animationDelay: '0.2s' }}>
            We transform Biomass Waste streams that are presently being burnt, landfilled or underutilised to products imperative for life
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
