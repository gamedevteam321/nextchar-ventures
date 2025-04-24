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
                       text-white text-transparent bg-clip-text
                       drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                       text-left max-w-[1200px]"
            >
              Portable. Practical. Predictable
            </h1>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="process" className="py-8 sm:py-12 px-4 sm:px-8 md:px-16 lg:px-[150px] bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-left mb-4 text-heading text-transparent bg-clip-text leading-normal py-2">
          State-of-the-art complimenting technologies to address diverse requirements
          </h2>
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {/* Batch Reactor Card */}
            <div className="rounded-lg shadow-lg p-6 sm:p-8" style={{ background: 'linear-gradient(99.49deg, #F5F5F5 0.47%, #F5F5F5 98.81%)', border: '2px solid #3D4E3A' }}>
              <img 
                src={getImagePath("/tech/Batch-Reactor.svg")} 
                alt="Batch Reactor Icon" 
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-heading text-transparent bg-clip-text leading-normal">
                Batch Reactor
              </h3>
              <p className="text-para leading-relaxed">
                Engineered for unshredded, diverse biomass - slow, controlled batch production provides complete control on temperature and residence time for producing high quality Biochar
              </p>
            </div>

            {/* Continuous Reactor Card */}
            <div className="rounded-lg shadow-lg p-6 sm:p-8" style={{ background: 'linear-gradient(99.49deg, #F5F5F5 0.47%, #F5F5F5 98.81%)', border: '2px solid #3D4E3A' }}>
              <img 
                src={getImagePath("/tech/Continuous-Reactor.svg")} 
                alt="Continuous Reactor Icon" 
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-heading text-transparent bg-clip-text leading-normal">
                Continuous Reactor
              </h3>
              <p className="text-para leading-relaxed">
              Seamless, high-quality fast biochar production with continuous-feed efficiency. Modular, mobile, and built for precise process control
              </p>
            </div>

            {/* Mini Gasifier Card */}
            <div className="rounded-lg shadow-lg p-6 sm:p-8" style={{ background: 'linear-gradient(99.49deg, #F5F5F5 0.47%, #F5F5F5 98.81%)', border: '2px solid #3D4E3A' }}>
              <img 
                src={getImagePath("/tech/Mini-Gasifier.svg")} 
                alt="Mini Gasifier Icon" 
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-heading text-transparent bg-clip-text leading-normal">
                Mini Gasifier
              </h3>
              <p className="text-para leading-relaxed">
              Compact biomass gasification unit for cold start & external fuel replacement
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Batch Reactor Section */}
      <section className="py-8 px-4 sm:px-8 md:px-16 lg:px-[150px] bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-heading text-transparent bg-clip-text leading-normal py-2 px-4 sm:px-0">
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

      

      {/* Continuous Reactor Section */}
      <section className="py-8 px-4 sm:px-8 md:px-16 lg:px-[150px] bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-heading text-transparent bg-clip-text leading-normal py-2 px-4 sm:px-0">
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

      

      {/* Mini Gasifier Section */}
      <section className="py-8 px-4 sm:px-8 md:px-16 lg:px-[150px] bg-offwhite">
        <div className="max-w-7xl mx-auto ">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-heading text-transparent bg-clip-text leading-normal py-2 px-4 sm:px-0">
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

      

      <TechnologySection />

      

      {/* Scale Section */}
      <section className="w-full min-h-[70vh] relative py-8 md:py-16 flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Technology-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px] relative">
          <div className="bg-white/70 backdrop-blur-sm rounded-[20px] md:rounded-[32px] p-6 md:p-12">
            <h2 className="text-[#3D4E3A] text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 md:mb-16 font-montserrat">
              Because we can scale anywhere
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
                Our process is not limited by geographics or biomass quantity, or type, or electricity availability or emissions, or storage and transportation options.
              </p>
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
                Our solution is fully modular, independent and can be installed anywhere - Ready to commence waste valorization, carbon removal and Soil Remediation instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traceability Transparency Trust Section */}
      <section className="py-8 sm:py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="w-full order-1">
            <img
              src={getImagePath("/tracebility.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="text-white order-2">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         text-heading text-transparent bg-clip-text">
              Our technology enables Traceability, Transparency and Trust
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our technology captures and validates live data from across multiple points in the entire chain from Biomass receipt, to processing data captured through IOT devices and computer vision to the final application of output Biochar & Carbon Credit creation.
              </p>
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              From the field to the file, every step is traceable and verifiable. This makes our biochar carbon removal credits high value and easy to trade.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Technology; 