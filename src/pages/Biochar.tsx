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
  { text: "Load biochar with nutrients" }
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
              <span className="text-[#BCBCBC]">{'>'}{'>'}</span>
              <span className="text-[#BCBCBC]">Carbon</span>
              <span className="text-[#BCBCBC]">{'>'}{'>'}</span>
              <span className="text-[#A4966E]">Soil</span>
              <span className="text-[#A4966E]">{'>'}{'>'}</span>
              <span className="text-[#00A92D]">Life</span>
            </div>
            <p className="font-light text-[#FFFFFF] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] max-w-3xl mt-2 leading-[150%] sm:leading-[140%]">
              Biochar is a charcoal-like material made from organic residues
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="pt-8 sm:pt-12 md:pt-16">
        <div className="px-4 sm:px-8 md:px-[150px]">
          <p className="font-montserrat font-light text-[#474747] text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] mb-6 sm:mb-8 md:mb-[50px] 
                      bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text text-left">
            While biochar has diverse applications, our focus is on it's most urgent & impactful use for soil revitalization and livestock health, while ensuring carbon sequestration for a Climate Relevant Time Scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.1 md:gap-0.01">
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
        <div className="px-4 sm:px-8 md:px-[150px]">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-40 items-center">
            {/* Image Container */}
            <div className="w-full order-1 h-full">
              <img
                src={getImagePath("/production-process.png")}
                alt="Production Process Diagram"
                className="w-auto h-full object-cover max-h-[600px] max-w-[300px]"
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </div>

            {/* Text Content */}
            <div className="order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 
                           bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
                Production Process
              </h2>
              <div className="space-y-6">
                <p className="text-[#474747] text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Biochar is a charcoal-like material made from sustainably produced biomass (agri residues, forest residues, wood chips, manure, etc.)
                </p>
                <p className="text-[#474747] text-sm sm:text-base md:text-lg font-light leading-relaxed">
                It is produced at high temperature, ranging from 350°C to 800°C with little to no oxygen. This stabilizes the carbon content of the biomass.
                </p>
                <p className="text-[#474747] text-sm sm:text-base md:text-lg font-light leading-relaxed">
                When biomass undergoes pyrolysis, the carbon is reenergized into a stable form with unique benefits and applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Source Section - Medium/Light weight */}
      <section className="py-4 sm:py-4 md:py-4 px-4 sm:px-8 md:px-[150px]">
        <h2 className="font-montserrat font-medium text-xl sm:text-2xl md:text-[30px] leading-tight sm:leading-[100%] tracking-[0%] capitalize 
                     mb-6 sm:mb-[50px] text-left inline-block 
                     bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
          Where Does Our Biochar Come From?
        </h2>
        <div className="text-left  font-montserrat font-light text-sm sm:text-base md:text-[20px] leading-relaxed sm:leading-[100%] tracking-[0%]">
          <p className="mb-4 sm:mb-6 font-light">
          At Nexchar, we harness the potential of Biomass Residues that would otherwise go unused or left to decompose. Through advanced thermochemical process, we convert this waste into biochar, a valuable resource that enhances soil health and supports sustainable agriculture.
          </p>
          <p className="font-light">
          We started with agro and forest residue processing in India. With plans to expand to several other feedstocks, By transforming agricultural byproducts into biochar, We contribute to a circular economy that utilises every part of the agricultural process.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Special Features Section */}
      <section className="py-8 sm:py-12 md:py-[20px] bg-carbon-light px-4 sm:px-8 md:px-[150px]">
        <div className="px-0 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-[40px] text-left inline-block 
                       bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
            Why Is Our Biochar Special?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-2 gap-y-2 sm:gap-y-[10px]">
            {[
              { title: "It's net-negative", description: "For every 1 tonne of biochar produced, we remove ≈ 2.5 tonnes of CO2 from the atmosphere.", icon: "net-negative.svg" },
              { title: "It's Durable", description: "Biochar when applied to soils removes carbon from the atmosphere permanently (1000+ years).", icon: "Durable.svg" },
              { title: "It's Certified", description: "Certified by 3rd party science based standards, puro.earth & Carbon Standards International.", icon: "Certified.svg" },
              { title: "It's Equitable", description: "We are putting carbon finacne directly into regions worst affected by climate change.", icon: "Equitable.svg" },
              { title: "It's scalable", description: "Our tech can is modular and easy to scale, providing an opportunity for large scale Soil Remediation and Carbon Sequestration.", icon: "scalable.svg" },
              { title: "It's additional", description: "The income from carbon credits finances biochar production and carbon removal that would otherwise not have taken place.", icon: "additional.svg" }
            ].map((feature, index) => (
              <div key={index} className="text-left rounded-lg bg-carbon/50">
                <div className="mb-4 sm:mb-[10px] ">
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
                <h3 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-[20px] px-4
                             bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text inline-block">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base font-light leading-relaxed px-4 text-[#474747]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Structure Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="w-full">
          <img
            src={getImagePath("/key-structure-bg.png")}
            alt="Structure Background"
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="relative z-10 px-4 sm:px-8 md:px-[150px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8
                       bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
              The key is in its structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12">
              <div className="text-[#F0EDE4] space-y-6">
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Nexchar Biochar is a very stable form of carbon with a highly porous structure.Its internal surface is over 100 square meters per gram of biochar.This internal area enhances the nutrient holding-capacity by as much as 20 times that healthy soil and doubles water-retention as it absorbs moisture and releases it back into the soil when water availability is depressed.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Nexchar honeycomb structure provides the perfect housing for beneficial microbes which defends roots and fights off pests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Agriculture Benefits Section */}
      <section className="py-24  px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text Content */}
          <div className="text-[#474747]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Agriculture
            </h2>
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Biochar reduces plant mortality by improving moisture dynamics, creating a buffering effect that protects fragile root structures in drought conditions.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                When combined with organic matter and mineralization, biochar improves plant-microbe synergy and restores depleted soils.
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
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
            <img
              src={getImagePath("/agri-benefits.png")}
              alt="Biochar in agriculture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>


      {/* Compost Producer Subsection */}
      <div className="mt-8 sm:mt-[50px]">
        <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]" 
             >
          <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-1 sm:py-[50px]">
            <h3 className="font-montserrat font-semibold text-lg sm:text-xl md:text-[25px] leading-tight sm:leading-[100%] tracking-[0%] text-center mb-6 sm:mb-[50px]
                       bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              If You're A Compost Producer, Adding Biochar To Your Compost Pile Can:
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

      <SectionDivider />

      {/* Crop Yields Section */}
      <section className="">
        <div className="px-4 sm:px-8 md:px-[150px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-12 md:mb-12
                       bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
            Higher Crop Yields With Better Quality
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                className="rounded-lg p-4 sm:p-6"
                style={{
                  background: 'linear-gradient(99.49deg, #222D2B 0.47%, #44615B 98.81%)',
                  border: '1px solid #A4966E'
                }}
              >
                <div className="flex flex-col gap-2">
                  <div
                    className="w-16 h-16"
                    style={{
                      maskImage: `url(${getImagePath(`/crops/${benefit.icon}`)})`,
                      WebkitMaskImage: `url(${getImagePath(`/crops/${benefit.icon}`)})`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                      background: 'linear-gradient(90deg, #F0EDE4 0%, #A4966E 100%)'
                    }}
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-medium leading-tight
                                bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                      {benefit.title}
                    </h3>
                    <p className="text-[#FFFFFF] text-sm sm:text-base font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Livestock Health Section */}
      <section className=" px-4 sm:px-8 md:px-[200px]">
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
            <h2 className="text-xl sm:text-2xl md:text-[35px] font-semibold leading-tight sm:leading-[100%] tracking-[0%] font-montserrat
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text mb-4 sm:mb-[20px]">
              Livestock Health
            </h2>
            <p className="text-[#474747] text-base sm:text-lg md:text-[20px] leading-relaxed sm:leading-[100%] tracking-[0%] font-normal font-montserrat mb-6 sm:mb-[30px]">
            Biochar is also a great component in animal feed & bedding. Added to feed, it supports digestion, reduces toxins and enteric methane emissions. , and supports overall livestock well being.
            </p>
            <div className="mt-6 sm:mt-[20px]">
              <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold leading-tight sm:leading-[100%] tracking-[0%] font-montserrat mb-4 sm:mb-[20px]
                           bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
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
                      <span className="font-bold text-base sm:text-lg md:text-[20px] leading-tight sm:leading-[100%] tracking-[0%] font-montserrat
                                     bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
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
      <section className="pt-20  px-4 sm:px-8 md:px-[150px]">
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
                text: '"To mitigate agriculture impact on climate change, is to future proof farmers’ ability to feed 8 billion people"',
                author: ""
              },
              {
                id: 3,
                text: '"One gram of biochar can have a larger surface area than a basketball court, making it an exceptional storage solution for water and nutrients.and an ideal host for beneficial fungi, bacteria, and microbes."',
                author: ""
              },
              {
                id: 4,
                text: '"Building Soil. Sinking Carbon. Improving Lives. Nexchar’s Biochar help farmers increase long term profitability, regenerate degraded soils and improve yields becoming more resilient to climate change."',
                author: ""
              },
              
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

      <SectionDivider />

      {/* Carbon Sequestration Section */}
      <section className="py-8 sm:py-12 md:py-[25px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
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