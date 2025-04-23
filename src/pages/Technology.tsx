import React from 'react';
import { getImagePath } from "@/lib/utils";
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import TechnologySection from '@/components/TechnologySection';
import HeroSlideshow from '@/components/HeroSlideshow';

const Technology = () => {
  return (
    <div className="text-[#474747] font-montserrat bg-[#F0EDE4]">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[400px] sm:min-h-[600px] h-[80vh] sm:h-screen w-full">
        <HeroSlideshow />
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

      {/* Technology Section */}
      <section id="process" className="pt-8 sm:pt-12 px-4 sm:px-8 md:px-16 lg:px-[150px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-left mb-4 bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text leading-normal py-2">
          State-of-the-art complimenting technologies to address diverse requirements
          </h2>
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {/* Batch Reactor Card */}
            <div className="rounded-lg shadow-lg p-6 sm:p-8" style={{ background: 'linear-gradient(99.49deg, #222D2B 0.47%, #44615B 98.81%)' }}>
              <img 
                src={getImagePath("/tech/Batch-Reactor.svg")} 
                alt="Batch Reactor Icon" 
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text leading-normal">
                Batch Reactor
              </h3>
              <p className="text-[#E5DCC3] text-sm sm:text-base leading-relaxed">
                Engineered for unshredded, diverse biomass - slow, controlled batch production provides complete control on temperature and residence time for producing high quality Biochar
              </p>
            </div>

            {/* Continuous Reactor Card */}
            <div className="rounded-lg shadow-lg p-6 sm:p-8" style={{ background: 'linear-gradient(99.49deg, #222D2B 0.47%, #44615B 98.81%)' }}>
              <img 
                src={getImagePath("/tech/Continuous-Reactor.svg")} 
                alt="Continuous Reactor Icon" 
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text leading-normal">
                Continuous Reactor
              </h3>
              <p className="text-[#E5DCC3] text-sm sm:text-base leading-relaxed">
              Seamless, high-quality fast biochar production with continuous-feed efficiency. Modular, mobile, and built for precise process control
              </p>
            </div>

            {/* Mini Gasifier Card */}
            <div className="rounded-lg shadow-lg p-6 sm:p-8" style={{ background: 'linear-gradient(99.49deg, #222D2B 0.47%, #44615B 98.81%)' }}>
              <img 
                src={getImagePath("/tech/Mini-Gasifier.svg")} 
                alt="Mini Gasifier Icon" 
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text leading-normal">
                Mini Gasifier
              </h3>
              <p className="text-[#E5DCC3] text-sm sm:text-base leading-relaxed">
              Compact biomass gasification unit for cold start & external fuel replacement
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Batch Reactor Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-[150px]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text leading-normal py-2 px-4 sm:px-0">
            Batch Reactor
          </h3>
          <p className="text-left text-base sm:text-lg mb-4 px-4 sm:px-0">
            Engineered for unshredded, diverse biomass - slow, controlled batch production provides complete control on temperature and residence time for producing high quality Biochar
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 sm:px-0">
            <div className="relative aspect-[4/3] w-full rounded-lg">
              <img
                src={getImagePath("/batch-reactor.png")}
                alt="Batch Reactor Diagram"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="relative aspect-[4/3] w-full rounded-lg">
              <img
                src={getImagePath("/continuous-reactor.png")}
                alt="Batch Reactor Implementation"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Continuous Reactor Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-[150px]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text leading-normal py-2 px-4 sm:px-0">
            Continuous Reactor
          </h3>
          <p className="text-left text-base sm:text-lg mb-8 px-4 sm:px-0">
          Seamless, high-quality biochar production with continuous-feed efficiency — modular, mobile, and built for precise process control
          </p>
          <div className="max-w-[800px] mx-auto px-4 sm:px-0">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={getImagePath("/continuous-reactor1.png")}
                alt="Continuous Reactor Diagram"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Mini Gasifier Section */}
      <section className=" px-4 sm:px-8 md:px-16 lg:px-[150px]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text leading-normal py-2 px-4 sm:px-0">
            Mini Gasifier
          </h3>
          <p className="text-left text-base sm:text-lg mb-8 px-4 sm:px-0">
          Compact gasification unit for gas fuel replacement
          </p>
          <div className="max-w-[800px] mx-auto px-4 sm:px-0">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={getImagePath("/mini-gasifier.png")}
                alt="Mini Gasifier Diagram"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <TechnologySection />

      <SectionDivider />

      {/* Scale Section */}
      <section className="py-12 sm:py-8 md:py-12 px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6 py-2
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Because we can scale anywhere
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our process is not limited by geographics or biomass quantity , or type , or electricity availability or emissions, or storage and transportation options.
              </p>
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our solution is fully modular, independent and can be installed anywhere - Ready to commence waste valorization, carbon removal and Soil Remediation instantly.
              </p>
            </div>
          </div>
          <div className="w-full order-1 md:order-2 relative rounded-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-lg"
            >
              <source src="/videos/Technology-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Technology; 