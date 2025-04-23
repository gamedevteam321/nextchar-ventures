import React from 'react';
import { getImagePath } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

// Define the compost benefits data
const compostBenefits = [
  { text: "Reduce composting time" },
  { text: "Sequester emissions (CO₂ and CH₄)" },
  { text: "Minimize ammonia losses (NH3)" },
  { text: "Serve as a bulking agent for compost" },
  { text: "Diminish odor" },
  { text: "Load the biochar with nutrients and beneficial microbes" }
];

const Biochar = () => {
  return (
    <div className="text-[#474747] font-montserrat bg-[#F0EDE4]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[600px] h-[80vh] sm:h-screen w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)] z-10" />
          <img
            src={getImagePath("/Biochar-Hero.png")}
            alt="Biochar Hero"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load hero image`);
              e.currentTarget.src = 'https://placehold.co/1920x1080/333333/FFFFFF?text=Biochar';
            }}
          />
        </div>
        <div className="relative z-20 h-full flex flex-col">
          <div className="pt-[100px] sm:pt-[120px] md:pt-[150px] px-4 sm:px-8">
            <h1
              className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[120%] sm:leading-[110%] tracking-[0%]
                         bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text
                         drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                         text-center"
            >
              Best Organic Soil Amendment
            </h1>
          </div>
          <div className="mt-auto px-4 sm:px-8 md:px-[65px] pb-8 sm:pb-12 md:pb-16">
            <div className="font-montserrat text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[50px] font-medium leading-[130%] sm:leading-[120%] md:leading-[100%] tracking-[0%] 
                          flex flex-wrap items-center mb-2 sm:mb-3 gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 gap-y-1">
              <span className="text-[#D87344]">Waste</span>
              <span className="text-[#D87344]">{'»'}</span>
              <span className="text-[#BCBCBC]">Carbon</span>
              <span className="text-[#BCBCBC]">{'»'}</span>
              <span className="text-[#A4966E]">Soil</span>
              <span className="text-[#A4966E]">{'»'}</span>
              <span className="text-[#00A92D]">Life</span>
            </div>
            <p className="font-light text-[#FFFFFF] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] max-w-3xl mt-2 leading-[150%] sm:leading-[140%]">
              Biochar is a charcoal-like material made through high temperature pyrolysis of organic residues
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="pt-8 sm:pt-12 md:pt-16">
        <div className="mb-8 px-4 sm:px-8 md:px-[150px]">
          <p className="font-montserrat font-medium text-[#474747] text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] mb-6 sm:mb-8 md:mb-[50px] 
                      bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text text-left">
            While biochar has diverse applications, our focus is on it's most urgent & impactful use for soil revitalization and livestock health, while ensuring carbon sequestration for a Climate Relevant Time Scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
            {/* Card 1: Soil Treatment */}
            <div className="relative bg-carbon-light overflow-hidden w-full aspect-[16/9]">
              <img
                src={getImagePath("/Soil-Treatment.png")}
                alt="Soil Treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 w-full p-4 md:p-6">
                <h3 className="font-montserrat font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] text-white">Soil Treatment</h3>
              </div>
            </div>
            {/* Card 2: Livestock Health */}
            <div className="relative bg-carbon-light overflow-hidden w-full aspect-[16/9]">
              <img
                src={getImagePath("/Live-Stock-Health.png")}
                alt="Livestock Health"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 w-full p-4 md:p-6">
                <h3 className="font-montserrat font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] text-white">Livestock Health</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Production Process Section */}
      <section className="">
        <div className="pt-8 px-4 sm:px-8 md:px-[150px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8 md:gap-20 items-center">
            {/* Text Content */}
            <div className="order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                }}>
                Production Process
              </h2>
              <div className="space-y-6">
                <p className="text-[#474747] text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  Biochar is a charcoal-like material made from sustainably produced biomass from agricultural and forestry residues (e.g. corn stalks, hulls, wood chips, manure, etc.).
                </p>
                <p className="text-[#474747] text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  It is produced at high temperatures, ranging from 350°C to 800°C with little to no oxygen. This process is called pyrolysis or carbonization.
                </p>
                <p className="text-[#474747] text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  When biomass undergoes pyrolysis, the carbon is rearranged in a stable form with unique properties and applications, and soil enhancement being one of them.
                </p>
              </div>
            </div>

            {/* Image Container */}
            <div className="w-full order-2">
              <img
                src={getImagePath("/production-process.png")}
                alt="Production Process Diagram"
                className="w-full h-auto object-contain max-h-[550px]"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* where does it come from Section */}
      <section className="relative py-12">
        {/* Background Image */}
        <div className="w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10" />
          <img
            src={getImagePath("/biomass.jpeg")}
            alt="Structure Background"
            className="w-full h-[500px] sm:h-[600px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center z-20">
          <div className="relative px-4 sm:px-8 md:px-[150px] py-8 sm:py-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                }}>
              Where Does Our Biochar Come From?
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:gap-8 md:gap-12 max-w-auto mx-auto sm:ml-auto">
              <div className="text-[#F0EDE4] space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base md:text-lg font-regular leading-relaxed text-center sm:text-left">
                We harness the potential of Biomass Residues that would otherwise go unused or left to decompose. Through an advanced thermochemical process, we convert this waste into biochar, a valuable resource that enhances soil health and supports sustainable agriculture.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-regular leading-relaxed text-center sm:text-left">
                While currently we have a focused portfolio of agri and forest residues, we plan to expand our scope to include a wider range of feed stocks. This will be supported by our robust residue supply chain and adaptable inhouse technology enabling us address distinct challenges presented by each biomass type and its unique supply logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Special Features Section */}
      <section className="pt-12 mb-20 bg-carbon-light px-4 sm:px-8 md:px-[150px]">
        <div className="px-0 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                }}>
            Why Is Our Biochar Special?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-x-2 gap-y-6 sm:gap-y-[20px]">
            {[
              { title: "It's net-negative", description: "For every 1 tonne of biochar produced, we permanently remove ≈ 2.5 tonnes of CO2 from the atmosphere.", icon: "net-negative.svg" },
              { title: "It's Durable", description: "Biochar when applied to soils removes carbon from the atmosphere permanently for 100+ years, and we are striving to improve this to 1000+ Years .", icon: "Durable.svg" },
              { title: "It's Certified", description: "Certified by 3rd party science based standards, puro.earth & Carbon Standards International.", icon: "Certified.svg" },
              { title: "It's Equitable", description: "We are putting carbon finance directly into regions worst affected by climate change.", icon: "Equitable.svg" },
              { title: "It's scalable", description: "Our tech is modular, offgrid and easy to scale, providing an opportunity for large scale Soil Remediation and Carbon Sequestration.", icon: "scalable.svg" },
              { title: "It's additional", description: "The income from carbon credits finances biochar production and carbon removal that would otherwise not have taken place.", icon: "additional.svg" }
            ].map((feature, index) => (
              <div key={index} className="text-center sm:text-left rounded-lg bg-carbon/50">
                <div className="mb-4 sm:mb-[10px] flex justify-center sm:justify-start">
                  <div
                    className="w-[70px] h-[70px]"
                    style={{
                      maskImage: `url(${getImagePath(`/special/${feature.icon}`)})`,
                      WebkitMaskImage: `url(${getImagePath(`/special/${feature.icon}`)})`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                      background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)'
                    }}
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2 sm:mb-[10px] px-4
                             bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text inline-block">
                  {feature.title}
                </h3>
                <p className="text-[13px] sm:text-base font-light leading-relaxed px-2 sm:px-4 text-[#474747]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Structure Section */}
      <section className="relative py-12 sm:py-24">
        {/* Background Image */}
        <div className="w-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10" />
          <img
            src={getImagePath("/honeycomb.jpeg")}
            alt="Structure Background"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="relative z-20 px-4 sm:px-8 md:px-[150px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-8 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                }}>
              The key is in its structure
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:gap-8 max-w-[1300px]">
              <div className="text-[#F0EDE4] space-y-4">
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-light leading-relaxed">
                  Our premium Biochar has a highly porous honeycomb structure with an internal surface area of over 100 square meters per gram of biochar. This internal area enhances its nutrient holding-capacity by as much as 20 times that of healthy soil, doubles water-retention capacity and provides the perfect housing for beneficial microbes which defends roots and fights off pests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Agriculture Benefits Section */}
      <section className="py-16  px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text Content */}
          <div className="text-[#474747]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                }}>
              Agriculture
            </h2>
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Biochar reduces plant mortality by improving moisture dynamics, creating a buffering effect that protects fragile root structures. It absorbs moisture and releases it back into the soil when water availability is depressed.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                When combined with organic matter and minerals, biochar improves plant-microbe synergy and restores depleted soils.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Biochar improves nutrient retention by capturing and storing organic matter and other plant nutrients, releasing them slowly, while binding metals, in-organic contaminants, and toxins.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Biochar reduces compaction and remains in the soil for generations, providing a long-term solution to underperforming soils.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Benefit your crops and the planet with biochar, a soil amendment that turns agricultural waste into a powerful tool.
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={getImagePath("/agri-benefits.png")}
              alt="Biochar in agriculture"
              className="w-full h-full object-contain max-w-[90%] md:max-w-[70%]"
            />
          </div>
        </div>
      </section>


      {/* Compost Producer Subsection */}
      <div className="py-8 mt-8 bg-white">
        <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]" 
             >
          <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-1 sm:py-[50px]">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                }}>
              As a Compost Producer, Adding Biochar To Your Compost Pile Can:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-x-8 gap-y-4 sm:gap-y-[30px]">
              {compostBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 sm:gap-[32px] p-4 sm:p-6 rounded-lg bg-carbon/50">
                  <img
                    src={getImagePath("/agri-icon.svg")}
                    alt="Checkmark Icon"
                    style={{ width: '32px', height: '28px' }}
                  />
                  <span className="font-montserrat font-medium text-base sm:text-lg md:text-[20px] leading-tight sm:leading-[100%] tracking-[0%]
                               bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      

      {/* Crop Yields Section */}
      <section className="">
        <div className="py-16 px-4 sm:px-8 md:px-[150px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                }}>
            Higher Crop Yields With Better Quality
          </h2>
          <div className="relative w-full">
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto pb-6 sm:pb-0 sm:overflow-x-visible -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
              {[
                {
                  title: "Increase Water Retention",
                  description: "Enhance soil structure for better water holding capacity",
                  icon: "Increase-Water-Retention.svg"
                },
                {
                  title: "Increase Nutrient Absorption",
                  description: "Improved nutrient uptake and availability for plants.",
                  icon: "Increased-Fertiliser-Efficiency.svg"
                },
                {
                  title: "Induce Good Microbes",
                  description: "Create optimal environment for beneficial soil microorganisms",
                  icon: "Houses-Good-Microbes.svg"
                },
                {
                  title: "Increase Soil Fertility",
                  description: "Enhance soil composition for better crop yields",
                  icon: "Improves-Soil-Structure.svg"
                },
                {
                  title: "Regenerate degraded soils",
                  description: "Supports healthy plant development and growth",
                  icon: "metal-toxins.svg"
                },
                {
                  title: "Increase storage capacity",
                  description: "Active carbon sequestration for environmental benefit",
                  icon: "Increased-cation-exchange-capacity.svg"
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] sm:w-auto snap-center rounded-[12px] p-5 sm:p-4"
                  style={{
                    background: 'linear-gradient(99.49deg, #222D2B 0.47%, #44615B 98.81%)',
                    position: 'relative',
                    isolation: 'isolate',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[12px]"
                    style={{
                      content: '""',
                      background: 'linear-gradient(90deg, #A4966E 0%, #F0EDE4 100%)',
                      padding: '1px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      pointerEvents: 'none'
                    }}
                  />
                  <div className="flex flex-col items-start sm:items-center gap-4 sm:gap-2 text-left sm:text-center relative z-10">
                    <div className="relative w-16 h-16 sm:w-12 sm:h-12">
                      <div 
                        className="w-full h-full"
                        style={{
                          maskImage: `url(${getImagePath(`/crops/${benefit.icon}`)})`,
                          WebkitMaskImage: `url(${getImagePath(`/crops/${benefit.icon}`)})`,
                          maskSize: 'contain',
                          WebkitMaskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          WebkitMaskRepeat: 'no-repeat',
                          maskPosition: 'left',
                          WebkitMaskPosition: 'left',
                          background: 'linear-gradient(90deg, #A4966E 0%, #F0EDE4 100%)'
                        }}
                      />
                    </div>
                    <div className="flex flex-col items-start sm:items-center gap-1.5 sm:gap-1">
                      <h3 className="text-lg sm:text-sm md:text-base font-medium leading-tight
                                  bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                        {benefit.title}
                      </h3>
                      <p className="text-[#EDFDF6] text-base sm:text-xs font-light leading-snug">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Livestock Health Section */}
      <section className=" py-16 px-4 sm:px-8 md:px-[200px] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-[50px] items-start">
          <div className="order-2 md:order-1 h-full">
            <img
              src={getImagePath("/livestock-health.png")}
              alt="Biochar in Livestock Health"
              className="w-full h-full object-cover rounded-lg"
              style={{ minHeight: '100%' }}
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                }}>
              Livestock Health
            </h2>
            <p className="text-[#474747] text-base sm:text-lg md:text-[20px] leading-relaxed sm:leading-[100%] tracking-[0%] font-normal font-montserrat mb-6 sm:mb-[30px]">
            Biochar is also a great component in animal feed & bedding. Added to feed, it supports digestion, reduces toxins and enteric methane emissions. , and supports overall livestock well being.
            </p>
            <div className="mt-6 sm:mt-[20px]">
              <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold leading-tight sm:leading-[100%] tracking-[0%] font-montserrat mb-4 sm:mb-[20px] text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
              }}>
                Key Benefits
              </h3>
              <ul className="space-y-1 sm:space-y-[1px]">
                {[
                  {
                    title: "Better Gut Health",
                    description: "Acts as a natural detoxifier in animal feed, reducing toxins and improving digestion."
                  },
                  {
                    title: "Odor Control",
                    description: "Minimizes ammonia and unpleasant smells in stables and sheds."
                  },
                  {
                    title: "Cleaner Bedding",
                    description: "Absorbs moisture and pathogens, keeping animals dry and healthy."
                  },
                  {
                    title: "Eco-Friendly Farming",
                    description: "Enhances manure quality, making it more effective as a fertilizer."
                  }
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-1 sm:gap-[5px] rounded-lg bg-carbon/50">
                    <span className="text-[#A4966E] text-xl sm:text-[25px] leading-5 sm:leading-[20px]">•</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-base sm:text-lg md:text-[20px] leading-tight sm:leading-[100%] tracking-[0%] font-montserrat text-transparent bg-clip-text"
                      style={{
                        backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                      }}>
                        {benefit.title}
                      </span>
                      <span className="text-[#474747] text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[28px] tracking-[0%] font-light font-montserrat ">
                        {benefit.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Quote Slider Section */}
      <section className=" py-12 bg-gradient-to-r from-[#222D2B] to-[#44615B]">
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
                text: '"As the soil goes, we go. As the soil heals, we heal."',
                author: "-Nexchar"
              },
              {
                id: 2,
                text: "To mitigate agriculture impact on climate change, is to future proof farmers' ability to feed 8 billion people",
                author: ""
              },
              {
                id: 3,
                text: "One gram of biochar can have a larger surface area than a basketball court, making it an exceptional storage solution for water and nutrients.and an ideal host for beneficial fungi, bacteria, and microbes.",
                author: ""
              },
              {
                id: 4,
                text: "Building Soil. Sinking Carbon. Improving Lives. Nexchar's Biochar help farmers increase long term profitability, regenerate degraded soils and improve yields becoming more resilient to climate change.",
                author: ""
              },
              
            ].map((quote) => (
              <SwiperSlide key={quote.id}>
                <div className="flex flex-col items-center justify-center h-[250px] sm:h-[300px] px-4 sm:px-8 md:px-20 py-6 sm:py-10 ">
                  <div className="text-center max-w-5xl">
                    {quote.text.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 sm:mb-6 font-montserrat text-lg sm:text-xl md:text-2xl leading-relaxed font-medium
                                 bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <p className="text-base sm:text-lg md:text-xl font-medium
                              bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">
                      {quote.author}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      

      {/* Carbon Sequestration Section */}
      <section className="py-8 sm:py-12 md:py-[80px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(180deg, #886808 22.21%, #C5A133 86.44%)"
                }}>
              Carbon Sequestration
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Humans have observed the benefits of biochar for tens-of thousands of years, from the pre-Columbian (450 BC) farmers in South America who produced 'terra preta', transforming marginal soils to what was one of the most productive food systems in human history.
              </p>
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              When a ton of biochar is produced and used in a soil application, it permanently sequesters Approx 2.5 tons of CO2. Biochar is viewed by climate scientists as one of the few viable scalable approaches that sequesters carbon while simultaneously  providing the most significant downstream impact of Soil remediation, essential for human existence.
              </p>
            </div>
          </div>
          <div className="w-full order-1 md:order-2">
            <img
              src={getImagePath("/Carbon-Sequestration.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Add Footer */}
      <Footer />
    </div>
  );
};

export default Biochar; 