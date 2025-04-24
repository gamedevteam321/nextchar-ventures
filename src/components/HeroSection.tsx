import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFading, setIsFading] = useState(false);

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

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Start the dissolve effect slightly before the video ends
      const fadeOutTime = video.duration - 2.5; // Start dissolve 2.5 seconds before end
      
      const handleTimeUpdate = () => {
        if (video.currentTime >= fadeOutTime && !isFading) {
          setIsFading(true);
          video.classList.add('fade-out');
        }
      };

      const handleEnded = () => {
        video.currentTime = 0;
        video.classList.remove('fade-out');
        video.classList.add('fade-in');
        video.play();
        setTimeout(() => {
          video.classList.remove('fade-in');
          setIsFading(false);
        }, 2500);
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [isFading]);

  return (
    <div className="flex flex-col">
      {/* Hero Video Section */}
      <section className="relative h-[800px] sm:h-[500px] md:h-[900px] lg:h-[820px] -mt-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6, 6, 6, 0.72)] via-transparent to-[rgba(0, 0, 0, 0.8)] z-10"
               style={{
                 background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 13.5%, rgba(0, 0, 0, 0.4) 47.18%, rgba(0, 0, 0, 0.8) 95.09%)'
               }}
          />
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center transition-all duration-2500"
            style={{
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              willChange: 'transform, opacity, filter'
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/videos/Hero-section-home-poster.jpg"
          >
            <source src="/videos/Hero-section-home.mp4" type="video/mp4" />
            <source src="/videos/Hero-section-home.webm" type="video/webm" />
          </video>
        </div>
        <div className="relative z-20 h-full flex flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 pl-4 sm:pl-6 md:pl-8 lg:pl-[30px]">
            <h1 className="font-montserrat text-[20px] xs:text-[24px] sm:text-[28px] md:text-[40px] lg:text-[60px] leading-[120%] md:leading-[100%] tracking-[0%] font-bold mb-4 md:mb-6">
              <div className="flex flex-col">
                <span className="whitespace-nowrap text-[#F5F5F5] ">
                  Scalable Carbon Solutions
                </span>
                <span className="whitespace-nowrap text-[#F5F5F5] ">
                  For a Sustainable Future
                </span>
              </div>
            </h1>
            <div className="font-montserrat text-[16px] sm:text-[18px] md:text-[24px] lg:text-[32px] leading-[120%] md:leading-[100%] tracking-[0%] font-medium flex flex-wrap items-center gap-x-2">
              <span className="whitespace-nowrap text-[#7CB342] ">Clean</span>
              <span className="text-[#F5F5F5]">Soil.</span>
              <span className="whitespace-nowrap text-[#7CB342] ">Clean</span>
              <span className="text-[#F5F5F5]">Food.</span>
              <span className="whitespace-nowrap text-[#7CB342] ">Clean</span>
              <span className="text-[#F5F5F5]">Planet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#FFFFFF] w-full px-4 sm:px-6 md:px-8 lg:px-[150px] py-[60px] sm:py-[25px] md:py-[40px] lg:py-[75px] ">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <p className="font-montserrat font-regular text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] leading-[120%] md:leading-[100%] tracking-[0%] w-full reveal text-[#474747]" style={{ animationDelay: '0.2s' }}>
          We transform Biomass Waste streams that are presently being burnt, landfilled or underutilised into premium Carbon Negative products
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
