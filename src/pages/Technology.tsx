import React from 'react';
import { getImagePath } from "@/lib/utils";
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

const Technology = () => {
  return (
    <div className="text-[#474747] font-montserrat bg-[#F0EDE4]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[600px] h-[80vh] sm:h-screen w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)] z-10" />
          <img
            src={getImagePath("/Technology-Hero.png")}
            alt="Technology Hero"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load hero image`);
              e.currentTarget.src = 'https://placehold.co/1920x1080/333333/FFFFFF?text=Technology';
            }}
          />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="px-4 sm:px-16 pb-8 sm:pb-12">
            <h1
              className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[120%] sm:leading-[110%] tracking-[0%]
                       bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text
                       drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                       text-left max-w-[1200px]"
            >
              Portable. Practical. Predictable
            </h1>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology; 