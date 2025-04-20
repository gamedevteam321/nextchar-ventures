import React, { useState } from 'react';
import { getImagePath } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { ChevronDown } from 'lucide-react';
import { Hexagon } from 'lucide-react';

const CarbonCredits = () => {
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is carbon removal?",
      answer: "Carbon removal is the process of capturing CO2 from the atmosphere and storing it permanently. Our approach uses biochar technology to achieve this while creating sustainable products."
    },
    {
      question: "How does your carbon removal process work?",
      answer: "We use state-of-the-art modular high-temperature pyrolysis reactors to convert biomass into biochar, effectively capturing and storing carbon while producing valuable materials for agriculture and industry."
    },
    {
      question: "What makes your solution different?",
      answer: "Our solution works immediately, not years in the future. We combine carbon removal with practical applications, creating sustainable products that benefit both the environment and various industries."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="text-[#474747] font-montserrat bg-[#F0EDE4]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[600px] h-[80vh] sm:h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={getImagePath("/carbon-credits-hero.png")}
            >
              <source src="/videos/Mountains.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
        </div>

        <div className="relative z-20 h-full flex flex-col justify-end items-end text-right px-4 sm:px-16 pb-8 sm:pb-12">
          <h1 className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[120%] sm:leading-[110%] tracking-[0%] mb-4
                       bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">
            We remove carbon<br />from the atmosphere.
          </h1>
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] text-[#F0EDE4] mb-4">
            Right here. Right now.
          </h2>
          <p className="text-[20px] sm:text-[18px] text-[#F0EDE4] max-w-[600px]">
            We create sustainable products from this carbon
          </p>
        </div>
      </section>

      {/* Dropdowns Section */}
      <section className="py-8">
        <div className="space-y-4 px-4 sm:px-8 md:px-[150px]">
          {/* First Dropdown */}
          <div className="bg-gradient-to-r from-[#222D2B] to-[#44615B] rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}
              className="w-full p-4 flex justify-between items-center"
            >
              <span className="text-base sm:text-lg bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text pr-4">What are carbon removals?</span>
              <ChevronDown className={`transform transition-transform ${isFirstDropdownOpen ? 'rotate-180' : ''} text-[#A4966E] flex-shrink-0`} />
            </button>
            {isFirstDropdownOpen && (
              <div className="p-4 text-[#F0EDE4] border-t border-[#F0EDE4]/10">
                <p className="text-sm sm:text-base">Carbon removal projects help to stabilize global temperatures by directly reducing atmospheric CO₂, a critical step in mitigating climate change and extreme weather events.</p>
              </div>
            )}
          </div>

          {/* Second Dropdown */}
          <div className="bg-gradient-to-r from-[#222D2B] to-[#44615B] rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsSecondDropdownOpen(!isSecondDropdownOpen)}
              className="w-full p-4 flex justify-between items-center"
            >
              <span className="text-base sm:text-lg bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text pr-4">Benefits to the planet</span>
              <ChevronDown className={`transform transition-transform ${isSecondDropdownOpen ? 'rotate-180' : ''} text-[#A4966E] flex-shrink-0`} />
            </button>
            {isSecondDropdownOpen && (
              <div className="p-4 text-[#F0EDE4] border-t border-[#F0EDE4]/10">
                <p className="text-sm sm:text-base">Carbon removal projects can help to stabilise global temperatures by directly reducing atmospheric CO₂, a critical step in mitigating climate change and extreme weather events. These projects can also aim to enhance ecosystem health, support biodiversity, and improve soil and ocean quality, benefiting both wildlife and human communities.</p>
                <p className="mt-4 text-sm sm:text-base">Additionally, carbon removal drives innovation and creates economic opportunities through the development of new technologies and sustainable practices.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Technology Section */}
      <section className="px-4 sm:px-8 md:px-[150px] py-8 sm:py-12">
        <h2 className="text-2xl sm:text-[32px] md:text-[40px] font-medium mb-4 sm:mb-6 bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
          The Technology
        </h2>
        <p className="text-base sm:text-lg mb-8 sm:mb-12 max-w-[900px]">
          We use state-of-the-art modular high-temperature pyrolysis reactors to make biochar. In the process, the carbon contained in the biomass is captured and permanently stored in the Biochar. The technological solution is called Biochar carbon removal (BCR).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* First Row */}
          <div className="flex flex-col items-center text-center">
            <Hexagon className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-[#886808]" style={{ color: 'url(#hexagonGradient)' }} />
            <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">Natural Material containing<br />Carbon from the atmosphere</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Hexagon className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-[#886808]" style={{ color: 'url(#hexagonGradient)' }} />
            <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">First usage by the industry</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Hexagon className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-[#886808]" style={{ color: 'url(#hexagonGradient)' }} />
            <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">we convert organic residue</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {/* Second Row */}
          <div className="flex flex-col items-center text-center">
            <Hexagon className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-[#886808]" style={{ color: 'url(#hexagonGradient)' }} />
            <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">Carbon removal</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Hexagon className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-[#886808]" style={{ color: 'url(#hexagonGradient)' }} />
            <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">Industrial process energy or<br />heating networks</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Hexagon className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-[#886808]" style={{ color: 'url(#hexagonGradient)' }} />
            <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">Biochar - Material for the<br />agriculture</p>
          </div>
        </div>

        {/* SVG Gradient Definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="32.21%" stopColor="#886808" />
              <stop offset="76.44%" stopColor="#C5A133" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      <SectionDivider />

      {/* Scale Section */}
      <section className="py-8 sm:py-12 md:py-[25px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Because we can scale anywhere
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our process is not limited by geographics or scarce storage and transportation options for CO2.
              </p>
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our solution works at any location. We don't dispose CO2, we put the carbon to use. We turn it into solid, easy handable products.
              </p>
            </div>
          </div>
          <div className="w-full order-1 md:order-2">
            <img
              src={getImagePath("/carbon-credits.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* climate change Section */}
      <section className="py-8 sm:py-12 md:py-[25px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="w-full order-1">
            <img
              src={getImagePath("/carbon-credits.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="text-white order-2">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Because the climate can't wait
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Without permanent carbon removal, global efforts to mitigate climate change are in vain. But most carbon removal solutions just don't work quick enough.
              </p>
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our technical CDR solutions are taking effect today. Not some time in the distant future.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Structure Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="w-full">
          <img
            src={getImagePath("/key-structure-bg.png")}
            alt="Structure Background"
            className="w-full h-auto min-h-[300px] sm:min-h-auto object-cover sm:object-contain"
          />
        </div>

        {/* Content */}
        <div className="py-12 absolute inset-0 flex flex-col justify-center bg-black/40 sm:bg-transparent">
          <div className="relative z-10 px-6 sm:px-8 md:px-[150px] py-12 sm:py-0">
            <div className="grid grid-cols-1 gap-4 sm:gap-8 md:gap-12 max-w-[800px]">
              <div className="text-[#F0EDE4] space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                We collaborate with leading carbon standards and policy makers to ensure our projects create the highest quality carbon removal credits, meeting the highest industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* credits Section */}
      <section className="py-8 sm:py-12 md:py-[25px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Our Carbon Credits
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Nexchar was one of the pioneers authorized to trade CO2 Removal Credits through Carbon Future in early 2019 and trade CORCs on the Puro.earth trading platform. Since then, the company has become an integral part of the carbon removal market, which is also why we were part of the Verified Carbon Standard (VCS) committee that was put together to establish the first ever Verra biochar methodology in 2022.
              </p>
            </div>
          </div>
          <div className="w-full order-1 md:order-2">
            <img
              src={getImagePath("/carbon-credits.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* removal credits Section */}
      <section className="py-8 sm:py-12 md:py-[25px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="w-full order-1">
            <img
              src={getImagePath("/carbon-credits.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="text-white order-2">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Our projects create carbon removal Credits
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              We develop & operate decentralized carbon removal projects, focusing on hyperlocal sites with consistent biomass residue availability and carbon sequestration potential. 
              </p>
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our projects generate verified carbon removal credits that help finance sustainable development and climate action
              </p>
            </div>
          </div>

          
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-8 md:px-[150px]">
        <h2 className="text-[32px] sm:text-[40px] font-medium mb-8 bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
          FAQ
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-[#2C3B38] rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 sm:p-5 flex justify-between items-center text-left"
              >
                <span className="text-base sm:text-lg text-[#F0EDE4]">{item.question}</span>
                <ChevronDown 
                  className={`transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''} text-[#F0EDE4]`}
                />
              </button>
              {openFaqIndex === index && (
                <div className="p-4 sm:p-5 border-t border-[#F0EDE4]/10">
                  <p className="text-sm sm:text-base text-[#F0EDE4]/90">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quote Slider Section */}
      <section className="pt-4 mb-16 px-4 sm:px-8 md:px-[150px]">
        <div className="w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
          >
            {[
              {
                id: 1,
                text: "60 Million Mt - Annual global forest-based charcoal consumption.",
              },
              {
                id: 2,
                text: "2 Millions hectors of deforestation every year for Charcoal Production.",
              },
              {
                id: 3,
                text: "2.4 billion people rely on wood fuel.",
              }
            ].map((quote) => (
              <SwiperSlide key={quote.id}>
                <div className="flex flex-col items-center justify-center min-h-[150px] sm:min-h-[250px] px-4 sm:px-8 md:px-20 py-6 sm:py-10 bg-gradient-to-r from-[#222D2B] to-[#44615B] rounded-2xl">
                  <div className="text-center max-w-4xl">
                    {quote.text.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 sm:mb-6 font-montserrat text-lg sm:text-xl md:text-2xl leading-relaxed font-medium
                                 bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Add Footer */}
      <Footer />
    </div>
  );
};

export default CarbonCredits; 