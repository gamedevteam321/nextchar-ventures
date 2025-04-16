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
  { text: "Decreases emissions (N2O and CH4)" },
  { text: "Minimize ammonia losses (NH3)" },
  { text: "Serve as a bulking agent for compost" },
  { text: "Diminish odor" },
  { text: "Load biochar with nutrients" }
];

const Biochar = () => {
  return (
    <div className="text-white font-montserrat bg-carbon">
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
            <p className="font-light text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] max-w-3xl mt-2 leading-[150%] sm:leading-[140%]">
              Biochar is a charcoal-like material made from organic residues
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-8 sm:py-12 md:py-24">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <p className="font-montserrat font-light text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] mb-6 sm:mb-8 md:mb-[100px] 
                      bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text text-left">
            While biochar has diverse applications, our focus is on it's most urgent & impactful use for soil remediation and livestock health, while ensuring carbon sequestration for a Climate Relevant Time scale.
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
      <section className="py-8 sm:py-12 md:py-24">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text Content */}
            <div className="text-white order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 md:mb-8 
                           bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text 
                           inline-block">
                Production Process
              </h2>
              <p className="mb-4 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Biochar is a charcoal-like material made from sustainably produced biomass from agricultural and forestry residues (e.g. corn stalks, hulls, wood chips, manure, etc.).
              </p>
              <p className="mb-4 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                It is produced at high temperatures, ranging from 350°C to 800°C with little to no oxygen. This process is called pyrolysis or carbonization.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                When biomass undergoes pyrolysis, the carbon is rearranged in a stable form with unique properties and applications, and soil enhancement being one of them.
              </p>
            </div>
            {/* Image Container */}
            <div className="w-full order-1 md:order-2">
              <img
                src={getImagePath("/production-process.png")}
                alt="Production Process Diagram"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Source Section - Medium/Light weight */}
      <section className="py-8 sm:py-12 md:py-[150px] px-4 sm:px-8 md:px-[200px]">
        <h2 className="font-montserrat font-medium text-xl sm:text-2xl md:text-[30px] leading-tight sm:leading-[100%] tracking-[0%] capitalize 
                     mb-6 sm:mb-[50px] text-left inline-block 
                     bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
          Where Does Our Biochar Come From?
        </h2>
        <div className="text-left text-white font-montserrat font-light text-sm sm:text-base md:text-[20px] leading-relaxed sm:leading-[100%] tracking-[0%]">
          <p className="mb-4 sm:mb-6 font-light">
            At Nexchar, we harness the potential of agricultural and forest residue aka Biomass that would otherwise go unused or be left to decompose. Through advance ed thermochemical process, we convert this waste into biochar, a valuable resource that enhances soil health and supports sustainable agriculture.
          </p>
          <p className="font-light">
            We started with agro and forest residue processing in India. With plans to expand to several other feedstock. By transforming agricultural byproducts into biochar, We contribute to a circular economy that utilises every part of the agricultural process.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Special Features Section */}
      <section className="py-8 sm:py-12 md:py-[150px] bg-carbon-light px-4 sm:px-8 md:px-[200px]">
        <div className="px-0 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 sm:mb-[80px] text-left inline-block 
                       bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
            Why Is Our Biochar Special?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-8 gap-y-8 sm:gap-y-[50px]">
            {[
              { title: "It's net-negative", description: "For every 1 tonne of biochar produced, we remove ≈ 2.5 tonnes of CO2 from the atmosphere." },
              { title: "It's Durable", description: "Biochar when applied to soils removes carbon from the atmosphere permanently (1000+ years)." },
              { title: "It's Certified", description: "Certified by 3rd party science based standards, puro.earth & Carbon Standards International." },
              { title: "It's Equitable", description: "We are putting carbon finacne directly into regions worst affected by climate change." },
              { title: "It's scalable", description: "Our tech can reach millions of landowners in the Tropics to reach gigatonne scale of carbon removal." },
              { title: "It's additional", description: "The income from carbon credits finances biochar production and carbon removal that would otherwise not have taken place." }
            ].map((feature, index) => (
              <div key={index} className="text-left p-4 sm:p-6 rounded-lg bg-carbon/50">
                <img
                  src={getImagePath("/special-feature-icon.svg")}
                  alt="Feature Icon"
                  className="mb-4 sm:mb-[20px]"
                  style={{ width: '50px', height: '43px' }}
                />
                <h3 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-[20px] 
                             bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text inline-block">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Agriculture Benefits Section */}
      <section className="py-8 sm:py-12 md:py-[150px] px-4 sm:px-8 md:px-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 items-start mb-8 sm:mb-[50px]">
          <div className="relative w-full md:col-span-2 order-1 md:order-1">
            <img
              src={getImagePath("/agri-benefits.png")}
              alt="Biochar in agriculture"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          <div className="text-white md:col-span-3 order-2 md:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-[50px] inline-block
                         bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
              Agriculture
            </h2>
            <div className="space-y-4 sm:space-y-6">
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
        </div>

        {/* Compost Producer Subsection */}
        <div className="mt-8 sm:mt-[50px] pt-8 sm:pt-[50px]">
          <h3 className="font-montserrat font-semibold text-lg sm:text-xl md:text-[25px] leading-tight sm:leading-[100%] tracking-[0%] text-center mb-6 sm:mb-[50px]
                       bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
            If You're A Compost Producer, Adding Biochar To Your Compost Pile Can:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-x-8 gap-y-4 sm:gap-y-[30px] px-2 sm:px-[30px]">
            {compostBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 sm:gap-[32px] p-4 sm:p-6 rounded-lg bg-carbon/50">
                <img
                  src={getImagePath("/agri-icon.svg")}
                  alt="Checkmark Icon"
                  style={{ width: '32px', height: '28px' }}
                />
                <span className="font-montserrat font-medium text-base sm:text-lg md:text-[20px] leading-tight sm:leading-[100%] tracking-[0%]
                               bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Crop Yields Section */}
      <section className="py-8 sm:py-12 md:py-24">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 sm:mb-12 md:mb-16
                       bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
            Higher Crop Yields With Better Quality
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Increase Water Retention",
                description: "Enhance soil structure for better water holding capacity"
              },
              {
                title: "Increased Fertiliser Efficiency",
                description: "Slow release & improved nutrients & minerals uptake"
              },
              {
                title: "Houses Good Microbes",
                description: "Create optimal environment for beneficial soil microorganisms"
              },
              {
                title: "Improves Soil Structure",
                description: "Enhance soil composition for better crop yields"
              },
              {
                title: "Protects against heavy metals & toxins in soil",
                description: "Supports healthy plant development and growth"
              },
              {
                title: "Increased cation-exchange capacity",
                description: "Active carbon sequestration for environmental benefit"
              },
              {
                title: "Liming Effect",
                description: "abcd"
              },
              {
                title: "Improved yields from first Application",
                description: "abcd"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg p-4 sm:p-6"
                style={{
                  border: '1px solid #A4966E',
                  background: '#1E1E1E'
                }}
              >
                <div className="flex flex-col gap-4">
                  <div className="relative w-12 h-12">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 2L44.7846 13V35L24 46L3.21539 35V13L24 2Z" stroke="url(#paint0_linear)" strokeWidth="1"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="3.21539" y1="24" x2="44.7846" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#A4966E"/>
                          <stop offset="1" stopColor="#F0EDE4"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-medium leading-tight
                                bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                      {benefit.title}
                    </h3>
                    <p className="text-[#919191] text-sm sm:text-base font-light leading-relaxed">
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
      <section className="py-8 sm:py-12 md:py-[150px] px-4 sm:px-8 md:px-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-[50px] items-start">
          <div className="order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl md:text-[35px] font-semibold leading-tight sm:leading-[100%] tracking-[0%] font-montserrat
                         bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text mb-4 sm:mb-[20px]">
              Livestock Health
            </h2>
            <p className="text-[#919191] text-base sm:text-lg md:text-[20px] leading-relaxed sm:leading-[100%] tracking-[0%] font-normal font-montserrat mb-6 sm:mb-[30px]">
              Biochar isn't just for soil – it's a game-changer in animal care too. When added to animal feed or used in bedding, biochar improves digestion, reduces odors, and supports overall livestock well-being.
            </p>
            <div className="mt-6 sm:mt-[20px]">
              <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold leading-tight sm:leading-[100%] tracking-[0%] font-montserrat mb-4 sm:mb-[20px]
                           bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">
                Key Benefits
              </h3>
              <ul className="space-y-4 sm:space-y-[15px]">
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
                  <li key={index} className="flex items-start gap-3 sm:gap-[15px] p-4 sm:p-6 rounded-lg bg-carbon/50">
                    <span className="text-[#A4966E] text-xl sm:text-[25px] leading-5 sm:leading-[20px]">•</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-base sm:text-lg md:text-[20px] leading-tight sm:leading-[100%] tracking-[0%] font-montserrat
                                     bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">
                        {benefit.title}
                      </span>
                      <span className="text-[#919191] text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[28px] tracking-[0%] font-light font-montserrat mt-2 sm:mt-[10px]">
                        {benefit.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={getImagePath("/livestock-health.png")}
              alt="Biochar in Livestock Health"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Quote Slider Section */}
      <section className="py-8 sm:py-12 md:py-[150px] px-4 sm:px-8 md:px-[200px]">
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
                text: "Biochar is one of the most promising tools we have to combat climate change while improving soil health.",
                author: "Dr. Johannes Lehmann, Cornell University"
              },
              {
                id: 2,
                text: "The potential of biochar to sequester carbon while improving agricultural productivity is truly remarkable.",
                author: "Dr. David Laird, Iowa State University"
              },
              {
                id: 3,
                text: "Biochar represents a win-win solution for both climate change mitigation and sustainable agriculture.",
                author: "Dr. Stephen Joseph, University of New South Wales"
              }
            ].map((quote) => (
              <SwiperSlide key={quote.id}>
                <div className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] px-4 sm:px-8 md:px-20 py-8 sm:py-16 bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] rounded-2xl">
                  <div className="text-center max-w-4xl">
                    {quote.text.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 sm:mb-8 text-[#111111] font-montserrat text-lg sm:text-xl md:text-2xl leading-relaxed font-medium"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <p className="text-base sm:text-lg md:text-xl text-[#111111]/80 font-medium">
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
      <section className="py-8 sm:py-12 md:py-[150px] px-4 sm:px-8 md:px-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-tight sm:leading-[100%] tracking-[0%] mb-4 sm:mb-6
                         bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
              Carbon Sequestration
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#919191] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
                Humans have observed the benefits of biochar for tens-of thousands of years, from the pre-Columbian (450 BC) farmers in South America who produced 'terra preta', transforming marginal soils to what was one of the most productive food systems in human history.
              </p>
              <p className="text-[#919191] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
                When a ton of biochar is produced and used in a soils application, it permanently sequesters 3 tons of CO2
              </p>
              <p className="text-[#919191] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
                There is a rapid acceleration of renewable energy sources that will ultimately slow the build-up of CO2 in the atmosphere, but not in-time to repair the damage that has already been done
              </p>
              <p className="text-[#919191] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
                Most climate scientists believe new strategies for sequestering carbon must be developed to avoid catastrophic consequences from climate change
              </p>
              <p className="text-[#919191] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
                Biochar is broadly viewed by climate scientists as one of the few viable approaches to carbon sequestration, having the benefit if no downstream impacts, and large scale deployment will be driven by the marketplace.
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