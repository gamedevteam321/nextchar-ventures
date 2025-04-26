import React, { useState } from 'react';
import { getImagePath } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { ChevronDown } from 'lucide-react';
import CarbonClock from '@/components/CarbonClock';

const CarbonCredits = () => {
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is Biochar Carbon Removal (BCR)?",
      answer: "Biochar Carbon Removal (BCR) is an innovative process that converts biomass into biochar through high-temperature pyrolysis. This technology permanently captures CO₂ from the atmosphere by transforming organic matter into a stable carbon form that can last for centuries in soil, effectively removing carbon from the natural carbon cycle."
    },
    {
      question: "How does solid Carbon Removal Lock and Store CO₂?",
      answer: "Through our pyrolysis process, carbon molecules from organic matter are transformed into a highly stable crystalline structure. This solid form of carbon is resistant to decomposition and can remain stable for hundreds to thousands of years when applied to soil, providing a permanent carbon storage solution while improving soil health."
    },
    {
      question: "How are Carbon Removal (CDR) removals independent from tree-planting schemes?",
      answer: "Unlike tree-planting schemes which take decades to sequester carbon and are vulnerable to forest fires or logging, our CDR technology provides immediate, permanent carbon removal. We convert existing biomass into stable biochar, creating an additional carbon sink that's independent of forest growth cycles and resistant to environmental risks."
    },
    {
      question: "How are Carbon Removal Certificates created and validated?",
      answer: "Our carbon removal certificates are created through rigorous monitoring and verification processes. Each tonne of CO₂ removed is independently verified by leading carbon standards organizations. We track the entire process from biomass sourcing to biochar production and application, ensuring transparent and credible carbon accounting."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="text-[#474747] font-montserrat bg-[#F0EDE4]">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[400px] sm:min-h-[600px] h-[80vh] sm:h-screen w-full overflow-hidden">
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
              <source src="/videos/Mountainsnew.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
        </div>

        <div className="relative z-20 h-full flex flex-col justify-end items-end text-right px-4 sm:px-16 pb-8 sm:pb-12">
          <h1 className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[120%] sm:leading-[110%] tracking-[0%] mb-4
                       text-white text-transparent bg-clip-text">
            We remove carbon from <br />the atmosphere
          </h1>
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] text-white mb-4">
            Right here. Right now.
          </h2>
          <p className="text-[20px] sm:text-[18px] text-white max-w-[600px]">
            We create sustainable products from this carbon
          </p>
        </div>
      </section>

      {/* Dropdowns Section */}
      <section className="py-8 bg-white">
        <div className="space-y-4 px-4 sm:px-8 md:px-[150px]">
          {/* First Dropdown */}
          <div className="bg-olive rounded-xl overflow-hidden">
            <button
              onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}
              className="w-full p-4 flex justify-between items-center"
            >
              <span className=" sm:text-lg font-semibold text-heading text-transparent bg-clip-text pr-4">What are carbon removals?</span>
              <ChevronDown className={`transform transition-transform ${isFirstDropdownOpen ? 'rotate-180' : ''} text-[#3D4E3A] flex-shrink-0`} />
            </button>
            {isFirstDropdownOpen && (
              <div className="p-4 text-heading border-t border-[#F0EDE4]/10">
                <p className="text-sm sm:text-base">Carbon removal projects are initiatives designed to capture and remove carbon dioxide (CO₂) from the atmosphere, helping to mitigate climate change by reducing the overall concentration of this greenhouse gas. Unlike emissions avoidance strategies, which aim to avoid the amount of CO₂ produced, carbon removal directly extracts carbon that is already in the atmosphere.</p>
                <p className="text-sm sm:text-base mt-4">These projects are essential to achieving "net-zero" emissions goals, as they address residual emissions that cannot be fully eliminated through avoidance alone</p>
              </div>
            )}
          </div>

          {/* Second Dropdown */}
          <div className="bg-olive rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsSecondDropdownOpen(!isSecondDropdownOpen)}
              className="w-full p-4 flex justify-between items-center"
            >
              <span className=" sm:text-lg font-semibold text-heading text-transparent bg-clip-text pr-4">Benefits to the planet</span>
              <ChevronDown className={`transform transition-transform ${isSecondDropdownOpen ? 'rotate-180' : ''} text-[#3D4E3A] flex-shrink-0`} />
            </button>
            {isSecondDropdownOpen && (
              <div className="p-4 text-heading border-t border-[#F0EDE4]/10">
                <p className="text-sm sm:text-base">Carbon removal projects can help to stabilise global temperatures by directly reducing atmospheric CO₂, a critical step in mitigating climate change and extreme weather events. These projects can also aim to enhance ecosystem health, support biodiversity, and improve soil and ocean quality, benefiting both wildlife and human communities.</p>
                <p className="mt-4 text-sm sm:text-base">Additionally, carbon removal drives innovation and creates economic opportunities through the development of new technologies and sustainable practices.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* removal credits Section */}
      <section className="py-8 sm:py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-olive">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="w-full order-1">
            <img
              src={getImagePath("/removal.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="text-white order-2">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         text-heading text-transparent bg-clip-text">
              Our projects create carbon removal Credits
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              We develop & operate decentralized carbon removal projects, focusing on hyperlocal sites with consistent biomass residue availability and carbon sequestration potential. 
              </p>
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our projects generate <b>verified carbon removal credits</b> that help finance sustainable development and climate action
              </p>
            </div>
          </div>

          
        </div>
      </section>

      

      {/* Technology Section */}
      {/* <section className="px-4 sm:px-8 md:px-[150px] py-12 sm:py-16">
        <h2 className="text-2xl sm:text-[32px] md:text-[40px] font-medium mb-4 sm:mb-6 pb-2 leading-normal bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
          The Technology
        </h2>
        <p className="text-base sm:text-lg mb-8 sm:mb-12 max-w-[1200px]">
          We use state-of-the-art modular high-temperature pyrolysis reactors to make biochar. In the process, the carbon contained in the biomass is captured and permanently stored in the Biochar. The technological solution is called Biochar carbon removal (BCR).
        </p>

        <div className="relative w-full">
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-6  overflow-x-auto pb-6 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-[150px] snap-x snap-mandatory sm:overflow-x-hidden">
            <div className="flex-shrink-0 w-[calc(50%-12px)] sm:w-auto snap-center">
              <div className="flex flex-col items-center text-center gap-4 w-full max-w-[280px] sm:max-w-[250px]">
                <img 
                  src={getImagePath("/credits-tech/Natural-Material.svg")} 
                  alt="Natural Material"
                  className="w-16 h-16 mb-3 sm:mb-4"
                />
                <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text sm:h-[52px] sm:leading-[26px] sm:line-clamp-2">
                  Natural Material containing Carbon from the atmosphere
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-[calc(50%-12px)] sm:w-auto snap-center">
              <div className="flex flex-col items-center text-center gap-4 w-full max-w-[280px] sm:max-w-[250px]">
                <img 
                  src={getImagePath("/credits-tech/First-usage.svg")} 
                  alt="First Usage"
                  className="w-16 h-16 mb-3 sm:mb-4"
                />
                <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text sm:h-[52px] sm:leading-[26px] sm:line-clamp-2">
                  First usage by the industry
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-[calc(50%-12px)] sm:w-auto snap-center">
              <div className="flex flex-col items-center text-center gap-4 w-full max-w-[280px] sm:max-w-[250px]">
                <img 
                  src={getImagePath("/credits-tech/organic-residue.svg")} 
                  alt="Organic Residue"
                  className="w-16 h-16 mb-3 sm:mb-4"
                />
                <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text sm:h-[52px] sm:leading-[26px] sm:line-clamp-2">
                  we convert organic residue
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-[calc(50%-12px)] sm:w-auto snap-center">
              <div className="flex flex-col items-center text-center gap-4 w-full max-w-[280px] sm:max-w-[250px]">
                <img 
                  src={getImagePath("/credits-tech/Carbon-removal.svg")} 
                  alt="Carbon Removal"
                  className="w-16 h-16 mb-3 sm:mb-4"
                />
                <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text sm:h-[52px] sm:leading-[26px] sm:line-clamp-2">
                  Carbon removal
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-[calc(50%-12px)] sm:w-auto snap-center">
              <div className="flex flex-col items-center text-center gap-4 w-full max-w-[280px] sm:max-w-[250px]">
                <img 
                  src={getImagePath("/credits-tech/Biochar-Material.svg")} 
                  alt="Biochar Material"
                  className="w-16 h-16 mb-3 sm:mb-4"
                />
                <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text sm:h-[52px] sm:leading-[26px] sm:line-clamp-2">
                  Biochar - Material for the agriculture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      

      {/* Scale Section */}
      <section className="py-8 sm:py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         text-heading text-transparent bg-clip-text">
              Because we can scale anywhere
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our technology is modular and decentralised—built for rural and climate-vulnerable areas, not limited by geography, or biomass type and volume. 
              </p>
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              We are completely Off Grid , with no reliance on any any external Electricity, creating exceptional energy autonomy and ability to operate in the remotest locations.
              </p>
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              By working close to the biomass source, we reduce process carbon losses, lower costs, & create local jobs white sequestering carbon. 
              </p>
            </div>
          </div>
          <div className="w-full order-1 md:order-2">
            <img
              src={getImagePath("/scale-anywhere.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* climate change Section */}
      <section className="py-8 sm:py-12 md:py-[50px] bg-olive">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 ">
          <div className="text-white px-4 sm:px-8 md:px-[150px]">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         text-heading text-transparent bg-clip-text">
              Because the climate can't wait
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Without permanent carbon removal, global efforts to mitigate climate change are in vain. But most carbon removal solutions today are impractical ( either too large, or too expensive, or needing high skills, or too far from the source ) 
              </p>
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our Solutions are Simple, Practical , Portable, Predictable and Scalable today ! 
              </p>
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              We produce High Quality Biochar , and there is soil everywhere that needs remediation.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Carbon Clock and Growth Section */}
      <section className="relative ">
        <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30 z-10" />
          <img
            src={getImagePath("/bar-graph-bg.png")}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-8 md:px-[150px] py-12">
          {/* Carbon Clock */}
          <div className="mb-20">
            <CarbonClock />
          </div>

          {/* Graph Content */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-[32px] md:text-[40px] font-medium mb-4 leading-normal text-white">
            Our Projected Annual CO2 Removal 
            </h2>
            
            <div className="mt-8 space-y-4">
              {/* 2025 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="w-16 text-white font-medium">2025</span>
                  <div className="flex-1">
                    <div className="h-4 bg-olive rounded-r-lg" style={{ width: '4%' }}></div>
                  </div>
                  <span className="w-32 text-white font-medium">10,000 tn</span>
                </div>
              </div>

              {/* 2027 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="w-16 text-white font-medium">2027</span>
                  <div className="flex-1">
                    <div className="h-4 bg-olive rounded-r-lg" style={{ width: '8%' }}></div>
                  </div>
                  <span className="w-32 text-white font-medium">200,000 tn</span>
                </div>
              </div>

              {/* 2029 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="w-16 text-white font-medium">2029</span>
                  <div className="flex-1">
                    <div className="h-4 bg-olive rounded-r-lg" style={{ width: '26%' }}></div>
                  </div>
                  <span className="w-32 text-white font-medium">650,000 tn</span>
                </div>
              </div>

              {/* 2031 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="w-16 text-white font-medium">2031</span>
                  <div className="flex-1">
                    <div className="h-4 bg-olive rounded-r-lg" style={{ width: '50%' }}></div>
                  </div>
                  <span className="w-32 text-white font-medium">1,250,000 tn</span>
                </div>
              </div>

              {/* 2033 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="w-16 text-white font-medium">2033</span>
                  <div className="flex-1">
                    <div className="h-4 bg-olive rounded-r-lg" style={{ width: '80%' }}></div>
                  </div>
                  <span className="w-32 text-white font-medium">2,000,000 tn</span>
                </div>
              </div>

              {/* 2035 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="w-16 text-white font-medium">2035</span>
                  <div className="flex-1">
                    <div className="h-4 bg-olive rounded-r-lg" style={{ width: '100%' }}></div>
                  </div>
                  <span className="w-32 text-white font-medium">2,500,000 tn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="grid grid-cols-1 gap-4 sm:gap-8 md:gap-12 max-w-[1200px]">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 sm:p-8">
              <p className="text-white  sm:text-lg">
                We are collaborating with leading carbon standards and policy makers to ensure our projects create the highest quality carbon removal credits, meeting the highest industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* credits Section */}
      <section className="py-8 sm:py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         text-heading text-transparent bg-clip-text">
              Our Carbon Credits
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              We are in the process of getting our first credits verified and issued . Commissioning multiple decentralized projects simultaneously gives us a unique ability to work with, and provide credits confirming with various standards & registries.
              </p>
            </div>
          </div>
          <div className="w-full order-1 md:order-2">
            <img
              src={getImagePath("/crediits.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      

      

      {/* FAQ Section */}
      <section className="py-4 sm:py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-white">
        <h2 className="text-[32px] sm:text-[40px] font-medium mb-8 text-heading">
          FAQ
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-olive rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 sm:p-5 flex justify-between items-center text-left"
              >
                <span className=" sm:text-lg text-heading font-semibold">{item.question}</span>
                <ChevronDown 
                  className={`transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''} text-heading`}
                />
              </button>
              {openFaqIndex === index && (
                <div className="p-4 sm:p-5 border-t border-[#F0EDE4]/10">
                  <p className="text-sm sm:text-para  font-regular">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quote Slider Section */}
      <section className=" bg-slider">
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
                text: "We are working with leading companies globally to take action and  drive their net-zero action through our decentralized, carbon-smart waste-to-value solutions.",
              },
              
            ].map((quote) => (
              <SwiperSlide key={quote.id}>
                <div className="flex flex-col items-center justify-center min-h-[150px] sm:min-h-[250px] px-4 sm:px-8 md:px-20 py-6 sm:py-10 ">
                  <div className="text-center max-w-5xl">
                    {quote.text.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 sm:mb-6 font-montserrat text-lg sm:text-xl md:text-2xl leading-relaxed font-medium
                                 text-white"
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