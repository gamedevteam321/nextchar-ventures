import React from 'react';
import { getImagePath } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '@/components/Footer';

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
    <div className="text-white font-montserrat">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-screen w-full">
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
        <div className="relative z-20 h-full px-[50px]"> 
          <div className="max-w-[1200px] w-full pt-[94px] mx-auto">
            {/* Main Heading - Medium weight */}
            <h1 
              className="font-montserrat text-[28px] sm:text-[40px] md:text-[50px] font-medium leading-[100%] sm:leading-[100%] tracking-[0%]
                         bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text
                         drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                         mb-[35vh] sm:mb-[60vh] text-center"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Best Organic Soil Amendment
            </h1>
            <div className="pl-[40px]">
              <div className="font-montserrat text-[24px] sm:text-[32px] md:text-[50px] font-medium leading-[130%] sm:leading-[120%] md:leading-[100%] tracking-[0%] 
                            flex flex-wrap items-center mb-3 gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1">
                <span className="text-[#D87344]">Waste</span>
                <span className="text-[#BCBCBC]">{'>'}{'>'}</span>
                <span className="text-[#BCBCBC]">Carbon</span>
                <span className="text-[#BCBCBC]">{'>'}{'>'}</span>
                <span className="text-[#BCBCBC]">Soil</span>
                <span className="text-[#BCBCBC]">{'>'}{'>'}</span>
                <span className="text-[#00A92D]">Life</span>
              </div>
              <p className="font-light text-white text-[14px] sm:text-base md:text-lg max-w-2xl mt-2 leading-[150%] sm:leading-[140%]">
                Biochar is a charcoal-like material made from organic residues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section - Light weight */}
      <section className="py-[60px] md:py-[150px] px-[200px]">
        <p className="font-montserrat font-light text-[30px] leading-[100%] tracking-[0%] mb-[100px] 
                    bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text text-left">
          While biochar has diverse applications, our focus is on it's most urgent & impactful use for soil remediation and livestock health, while ensuring carbon sequestration for a Climate Relevant Time scale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-0.1">
          {/* Card 1: Soil Treatment - Medium weight */}
          <div className="relative bg-carbon-light overflow-hidden">
            <img 
              src={getImagePath("/Soil-Treatment.png")} 
              alt="Soil Treatment" 
              className="w-full h-auto object-contain" 
            />
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 
                          bg-gradient-to-t from-black/70 via-black/50 to-transparent">
              <h3 className="text-lg md:text-xl font-medium text-white">Soil Treatment</h3>
            </div>
          </div>
          {/* Card 2: Livestock Health - Medium weight */}
          <div className="relative bg-carbon-light overflow-hidden">
            <img 
              src={getImagePath("/Live-Stock-Health.png")} 
              alt="Livestock Health" 
              className="w-full h-auto object-contain" 
            />
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 
                          bg-gradient-to-t from-black/70 via-black/50 to-transparent">
              <h3 className="text-lg md:text-xl font-medium text-white">Livestock Health</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section Line Divider */}
      <div className="py-[150px] px-0"> {/* 150px padding above and below */}
        <img 
          src={getImagePath("/Section-line.png")} /* Replace with your actual line image path */
          alt="Section Divider" 
          className="w-full h-auto" 
        />
      </div>

      {/* Production Process Section - Medium/Light weight */}
      <section className="py-[60px] md:py-[150px] px-[200px]">
        <div className="px-4"> {/* Removed container mx-auto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text Content */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8 
                           bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text 
                           inline-block">
                Production Process
              </h2>
              <p className="mb-4 text-base md:text-lg font-light">
                Biochar is a charcoal-like material made from sustainably produced biomass from agricultural and forestry residues (e.g. corn stalks, hulls, wood chips, manure, etc.).
              </p>
              <p className="mb-4 text-base md:text-lg font-light">
                It is produced at high temperatures, ranging from 350°C to 800°C with little to no oxygen. This process is called pyrolysis or carbonization.
              </p>
              <p className="text-base md:text-lg font-light">
                When biomass undergoes pyrolysis, the carbon is rearranged in a stable form with unique properties and applications, and soil enhancement being one of them.
              </p>
            </div>
            {/* Image Container with More Padding */}
            <div className="px-16 "> {/* Increase padding significantly */}
              <img 
                src={getImagePath("/production-process.png")} 
                alt="Production Process Diagram" 
                className="w-full h-auto object-contain rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Line Divider */}
      <div className="py-[150px] px-0"> {/* 150px padding above and below */}
        <img 
          src={getImagePath("/Section-line.png")} /* Replace with your actual line image path */
          alt="Section Divider" 
          className="w-full h-auto" 
        />
      </div>

      {/* Source Section - Medium/Light weight */}
      <section className="py-[60px] md:py-[150px] px-[200px]">
        <h2 className="font-montserrat font-medium text-[30px] leading-[100%] tracking-[0%] capitalize 
                     mb-[50px] text-left inline-block 
                     bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
          Where Does Our Biochar Come From?
        </h2>
        <div className="text-left text-white font-montserrat font-light text-[20px] leading-[100%] tracking-[0%]">
          <p className="mb-6 font-light">
            At Nexchar, we harness the potential of agricultural and forest residue aka Biomass that would otherwise go unused or be left to decompose. Through advance ed thermochemical process, we convert this waste into biochar, a valuable resource that enhances soil health and supports sustainable agriculture.
          </p>
          <p className="font-light">
            We started with agro and forest residue processing in India. With plans to expand to several other feedstock. By transforming agricultural byproducts into biochar, We contribute to a circular economy that utilises every part of the agricultural process.
          </p>
        </div>
      </section>

      {/* Section Line Divider */}
      <div className="py-[150px] px-0"> {/* 150px padding above and below */}
        <img 
          src={getImagePath("/Section-line.png")} /* Replace with your actual line image path */
          alt="Section Divider" 
          className="w-full h-auto" 
        />
      </div>

      {/* Special Features Section - Medium/Light weight */}
      <section className="py-[60px] md:py-[150px] bg-carbon-light px-[200px]">
        <div className="px-4">
          <h2 className="text-2xl md:text-3xl font-medium mb-[80px] text-left inline-block 
                       bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
            Why Is Our Biochar Special?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[50px]">
            {[ /* Updated Content */
              { title: "It's net-negative", description: "For every 1 tonne of biochar produced, we remove ≈ 2.5 tonnes of CO2 from the atmosphere." },
              { title: "It's Durable", description: "Biochar when applied to soils removes carbon from the atmosphere permanently (1000+ years)." },
              { title: "It's Certified", description: "Certified by 3rd party science based standards, puro.earth & Carbon Standards International." },
              { title: "It's Equitable", description: "We are putting carbon finacne directly into regions worst affected by climate change." },
              { title: "It's scalable", description: "Our tech can reach millions of landowners in the Tropics to reach gigatonne scale of carbon removal." },
              { title: "It's additional", description: "The income from carbon credits finances biochar production and carbon removal that would otherwise not have taken place." }
            ].map((feature, index) => (
              <div key={index} className="text-left">
                <img 
                  src={getImagePath("/special-feature-icon.svg")} 
                  alt="Feature Icon" 
                  className="mb-[20px]" 
                  style={{ width: '71px', height: '61px' }} 
                />
                <h3 className="text-lg md:text-xl font-medium mb-[20px] 
                             bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text inline-block">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-white font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Line Divider */}
      <div className="py-[150px] px-0"> {/* 150px padding above and below */}
        <img 
          src={getImagePath("/Section-line.png")} /* Replace with your actual line image path */
          alt="Section Divider" 
          className="w-full h-auto" 
        />
      </div>

      {/* Agriculture Benefits Section - Updated */}
      <section className="py-[60px] md:py-[150px] px-[200px]">
        {/* Top Grid: Image (2/5 width) + Main Text (3/5 width) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start mb-[50px]"> {/* Use items-start, 5 cols */}
          {/* Image Side - Col Span 2 */} 
          <div className="relative w-full md:col-span-2">
            <img 
              src={getImagePath("/agri-benefits.png")} 
              alt="Biochar in agriculture" 
              className="w-full h-auto object-contain rounded-lg" /* Reverted to object-contain */
            />
          </div>

          {/* Text Content Side - Col Span 3 */} 
          <div className="text-white md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-medium mb-[50px] inline-block
                         bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
              Agriculture
            </h2>
            {/* Updated Paragraphs */}
            <p className="mb-4 text-base md:text-lg font-light">
              Biochar reduces plant mortality by improving moisture dynamics, creating a buffering effect that protects fragile root structures in drought conditions.
            </p>
            <p className="mb-4 text-base md:text-lg font-light">
              When combined with organic matter and mineralization, biochar improves plant-microbe synergy and restores depleted soils.
            </p>
            <p className="mb-4 text-base md:text-lg font-light">
              Biochar improves nutrient retention by capturing and storing organic matter and other plant nutrients, releasing them slowly, while binding metals, in-organic contaminants, and toxins.
            </p>
            <p className="mb-4 text-base md:text-lg font-light">
              Biochar reduces compaction and remains in the soil for generations, providing a long-term solution to underperforming soils.
            </p>
            <p className="text-base md:text-lg font-light">
              Benefit your crops and the planet with biochar, a soil amendment that turns agricultural waste into a powerful tool.
            </p>
          </div>
        </div>

        

        {/* Compost Producer Subsection */}        
        <div className="mt-[50px] pt-[50px]">
          <h3 className="font-montserrat font-semibold text-[25px] leading-[100%] tracking-[0%] capitalize text-center mb-[50px]
                       bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
            If You're A Compost Producer, Adding Biochar To Your Compost Pile Can:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[30px] px-[30px]">
            {compostBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-[32px]">
                <img 
                  src={getImagePath("/agri-icon.svg")} 
                  alt="Checkmark Icon" 
                  style={{ width: '43px', height: '37px' }}
                />
                <span className="font-montserrat font-medium text-[20px] leading-[100%] tracking-[0%]
                               bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Line Divider */}
      <div className="py-[150px] px-0"> {/* 150px padding above and below */}
        <img 
          src={getImagePath("/Section-line.png")} /* Replace with your actual line image path */
          alt="Section Divider" 
          className="w-full h-auto" 
        />
      </div>

      {/* Crop Yields Section - Medium weight */}
      <section className="py-[60px] md:py-[150px] px-[200px]">
        <h2 className="text-2xl md:text-3xl font-medium mb-[50px] inline-block
                     bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
          Higher Crop Yields With Better Quality
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {[ 
            { title: "Increase Water Retention", description: "Enhance soil structure for better water holding capacity" },
            { title: "Increase Nutrient Absorption", description: "Improved nutrient uptake and availability for plants." },
            { title: "Houses Good Microbes", description: "Create optimal environment for beneficial soil microorganisms" },
            { title: "Increase Soil Fertility", description: "Enhance soil composition for better crop yields." },
            { title: "Protects against heavy metals & toxins in soil", description: "Supports healthy plant development and growth" },
            { title: "Increased cation-exchange capacity", description: "Active carbon sequestration for environmental benefit." }
          ].map((benefit, index) => (
            <div 
              key={index} 
              className="rounded-[15px] relative"
              style={{
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(#1E1E1E, #1E1E1E), linear-gradient(90deg, #A4966E 0%, #F0EDE4 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box'
              }}
            >
              <div className="p-[15px_20px] w-full flex flex-col gap-[15px]">
                <img 
                  src={getImagePath("/agri-icon.svg")} 
                  alt="Feature Icon" 
                  style={{ width: '71px', height: '61px' }}
                />
                <div className="flex flex-col gap-[15px] flex-1">
                  <h3 className="text-[18px] font-medium leading-[100%] tracking-[0%] font-montserrat
                               bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text w-full">
                    {benefit.title}
                  </h3>
                  <p className="text-white font-light text-[15px] leading-[100%] tracking-[0%] font-montserrat w-full">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Line Divider */}
      <div className="py-[150px] px-0"> {/* 150px padding above and below */}
        <img 
          src={getImagePath("/Section-line.png")} /* Replace with your actual line image path */
          alt="Section Divider" 
          className="w-full h-auto" 
        />
      </div>

      {/* Livestock Health Section - Medium/Light weight */}
      <section className="py-[60px] md:py-[150px] px-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] items-start">
          {/* Text Content - Removed fixed width */}
          <div> 
            <h2 className="text-[35px] font-semibold leading-[100%] tracking-[0%] font-montserrat
                         bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text mb-[20px]">
              Livestock Health
            </h2>
            <p className="text-[#919191] text-[20px] leading-[100%] tracking-[0%] font-normal font-montserrat mb-[30px]">
              Biochar isn't just for soil – it's a game-changer in animal care too. When added to animal feed or used in bedding, biochar improves digestion, reduces odors, and supports overall livestock well-being.
            </p>
            <div className="mt-[20px]">
              <h3 className="text-[20px] font-semibold leading-[100%] tracking-[0%] font-montserrat mb-[20px]
                           bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">
                Key Benefits
              </h3>
              <ul className="space-y-[15px]">
                <li className="flex items-start gap-[15px]">
                  <span className="text-[#A4966E] text-[25px] leading-[20px]">•</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[20px] leading-[100%] tracking-[0%] font-montserrat
                                   bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">Better Gut Health:</span>
                    <span className="text-[#919191] text-[18px] leading-[28px] tracking-[0%] font-light font-montserrat mt-[10px]">Acts as a natural detoxifier in animal feed, reducing toxins and improving digestion.</span>
                  </div>
                </li>
                <li className="flex items-start gap-[15px]">
                  <span className="text-[#A4966E] text-[25px] leading-[20px]">•</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[20px] leading-[100%] tracking-[0%] font-montserrat
                                   bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">Odor Control:</span>
                    <span className="text-[#919191] text-[18px] leading-[28px] tracking-[0%] font-light font-montserrat mt-[10px]">Minimizes ammonia and unpleasant smells in stables and sheds.</span>
                  </div>
                </li>
                <li className="flex items-start gap-[15px]">
                  <span className="text-[#A4966E] text-[25px] leading-[20px]">•</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[20px] leading-[100%] tracking-[0%] font-montserrat
                                   bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">Cleaner Bedding:</span>
                    <span className="text-[#919191] text-[18px] leading-[28px] tracking-[0%] font-light font-montserrat mt-[10px]">Absorbs moisture and pathogens, keeping animals dry and healthy.</span>
                  </div>
                </li>
                <li className="flex items-start gap-[15px]">
                  <span className="text-[#A4966E] text-[25px] leading-[20px]">•</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[20px] leading-[100%] tracking-[0%] font-montserrat
                                   bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">Eco-Friendly Farming:</span>
                    <span className="text-[#919191] text-[18px] leading-[28px] tracking-[0%] font-light font-montserrat mt-[10px]">Enhances manure quality, making it more effective as a fertilizer.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Side - Removed fixed width */}
          <div> 
            <img 
              src={getImagePath("/livestock-health.png")} 
              alt="Biochar in Livestock Health" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Quote Slider Section */}
      <section className="py-[60px] md:py-[150px] px-[200px]">
        <div className="max-w-[90rem] mx-auto">
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
                text: "Fundamentally Committed to Regeneration\n\nAs the soil goes, we go. As the soil heals, we heal.",
                author: "— Nexchar"
              },
              {
                id: 2,
                text: "To mitigate agriculture impact on climate change, is to future proof farmers' ability to feed 8 billion people",
                author: ""
              },
              {
                id: 3,
                text: "See why biochar is big bonus for soil...\n\nOne gram of biochar can have a larger surface area than a basketball court, making it an exceptional storage solution for water and nutrients. Additionally, biochar is an ideal host for beneficial fungi, bacteria, and microbes.",
                author: ""
              },
              {
                id: 4,
                text: "Building Soil. Sinking Carbon. Improving Lives\n\nNexchar's Biochar help farmers increase long term profitability, regenerate degraded soils and improve yields becoming more resilient to climate change",
                author: ""
              }
            ].map((quote) => (
              <SwiperSlide key={quote.id}>
                <div className="flex flex-col items-center justify-center h-[400px] px-4 md:px-20 py-16 bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] rounded-2xl mx-4 md:mx-16 lg:mx-24">
                  <div className="text-center max-w-4xl overflow-y-auto">
                    {quote.text.split('\n\n').map((paragraph, index) => (
                      <p 
                        key={index} 
                        className={`mb-8 text-[#111111] font-montserrat text-2xl leading-relaxed font-medium`}
                      >
                        {paragraph}
                      </p>
                    ))}
                    <p className="text-lg md:text-xl text-[#111111]/80 font-medium">
                      {quote.author}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Section Line Divider */}
      <div className="py-[150px] px-0"> {/* 150px padding above and below */}
        <img 
          src={getImagePath("/Section-line.png")} /* Replace with your actual line image path */
          alt="Section Divider" 
          className="w-full h-auto" 
        />
      </div>

      {/* Carbon Sequestration Section - Medium/Light weight */}
      <section className="py-[60px] md:py-[150px] px-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text Content */}
          <div className="text-white">
            <h2 className="font-montserrat font-semibold text-[35px] leading-[100%] tracking-[0%] mb-6
                         bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
              Carbon Sequestration
            </h2>
            <p className="text-[#919191] font-light text-[18px] leading-[150%] tracking-[0%] mb-4">
              Humans have observed the benefits of biochar for tens-of thousands of years, from the pre-Columbian (450 BC) farmers in South America who produced 'terra preta', transforming marginal soils to what was one of the most productive food systems in human history.
            </p>
            <p className="text-[#919191] font-light text-[18px] leading-[150%] tracking-[0%] mb-4">
              When a ton of biochar is produced and used in a soils application, it permanently sequesters 3 tons of CO2
            </p>
            <p className="text-[#919191] font-light text-[18px] leading-[150%] tracking-[0%] mb-4">
              There is a rapid acceleration of renewable energy sources that will ultimately slow the build-up of CO2 in the atmosphere, but not in-time to repair the damage that has already been done
            </p>
            <p className="text-[#919191] font-light text-[18px] leading-[150%] tracking-[0%] mb-4">
              Most climate scientists believe new strategies for sequestering carbon must be developed to avoid catastrophic consequences from climate change
            </p>
            <p className="text-[#919191] font-light text-[18px] leading-[150%] tracking-[0%]">
              Biochar is broadly viewed by climate scientists as one of the few viable approaches to carbon sequestration, having the benefit if no downstream impacts, and large scale deployment will be driven by the marketplace.
            </p>
          </div>
          {/* Image Side */}
          <div className="w-full">
            <img 
              src={getImagePath("/Carbon-Sequestration.png")} 
              alt="The Biochar Cycle" 
              className="w-full h-auto object-contain"
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