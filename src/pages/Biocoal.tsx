import React from 'react';
import { getImagePath } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

const biocoalFeatures = [
  {
    id: 1,
    title: "Low Carbon Natural",
    description: "Eco-friendly and helps reduce carbon footprint"
  },
  {
    id: 2,
    title: "Physical & Chemical",
    description: "Improved content and properties"
  },
  {
    id: 3,
    title: "Multiple Applications",
    description: "Versatile usage across industries"
  },
  {
    id: 4,
    title: "Intelligent Burn",
    description: "Smart optimal burning process"
  },
  {
    id: 5,
    title: "High Heat",
    description: "Superior heating performance"
  },
  {
    id: 6,
    title: "Zero Ash",
    description: "Clean burning with minimal residue"
  },
  {
    id: 7,
    title: "Smokeless",
    description: "Clean and environmentally friendly burning"
  },
  {
    id: 8,
    title: "Quick Ignition",
    description: "Fast and efficient lighting"
  }
];

const biocoalTypes = [
  {
    id: 1,
    title: "Round Briquettes",
    image: "/placeholder-round.jpg"
  },
  {
    id: 2,
    title: "Pillow Briquettes",
    image: "/placeholder-pillow.jpg"
  },
  {
    id: 3,
    title: "Pellets",
    image: "/placeholder-pellets.jpg"
  }
];

const applications = [
  {
    id: 1,
    title: "Clean Home Cook stoves",
    image: "/placeholder-cook.jpg"
  },
  {
    id: 2,
    title: "Outdoor Grilling",
    image: "/placeholder-grill.jpg"
  },
  {
    id: 3,
    title: "Street food vendors",
    image: "/placeholder-street.jpg"
  },
  {
    id: 4,
    title: "Restaurants (Traditional)",
    image: "/placeholder-restaurant.jpg"
  },
  {
    id: 5,
    title: "Brick kilns",
    image: "/placeholder-kiln.jpg"
  },
  {
    id: 6,
    title: "Small Industries",
    image: "/placeholder-industry.jpg"
  }
];

const Biocoal = () => {
  return (
    <div className="text-[#474747] font-montserrat bg-[#F0EDE4]">
      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[600px] h-[80vh] sm:h-screen w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)] z-10" />
          <img
            src={getImagePath("/Biocoal-Hero.png")}
            alt="Biochar Hero"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load hero image`);
              e.currentTarget.src = 'https://placehold.co/1920x1080/333333/FFFFFF?text=Biochar';
            }}
          />
        </div>
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="px-4 sm:px-16 pb-8 sm:pb-12">
            <h1
              className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[120%] sm:leading-[110%] tracking-[0%]
                         bg-white text-transparent bg-clip-text
                         drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                         text-left max-w-[1200px]"
            >
              Replacing Forest Fuel, Preventing Deforestation
            </h1>
          </div>
        </div>
      </section>

      {/* Quote Slider Section */}
      <section className="">
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
                text: "2 Millions hectares of deforestation occurs every year just to produce Charcoal.",
              },
              {
                id: 3,
                text: "2.4 billion people rely on wood fuel and need to be transitioned.",
              }
            ].map((quote) => (
              <SwiperSlide key={quote.id}>
                <div className="flex flex-col items-center justify-center min-h-[150px] sm:min-h-[250px] px-4 sm:px-8 md:px-20 py-6 sm:py-10 bg-slider">
                  <div className="text-center max-w-4xl">
                    {quote.text.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 sm:mb-6 font-montserrat text-lg sm:text-xl md:text-2xl leading-relaxed font-medium
                                 bg-white text-transparent bg-clip-text"
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

      

      {/* charcoal and fire wood Section */}
      <section className="py-16 px-4 sm:px-8 md:px-[150px] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-[#474747] ">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8
                         text-heading text-transparent bg-clip-text">
              Charcoal production is  destroying Global Forests
            </h2>
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg font-regular leading-relaxed text-para">
              More than 2 million hectares of Forests that have matured over 100s of years are destroyed together with their Bio-Diverse Ecosystems every year, just to produce Charcoal, while there is Biomass Waste everywhere that can be converted to high quality sustainable charcoal using low skills, simple, practical & decentralised technologies.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-regular leading-relaxed text-para">
              There is Raw Material, there is Technology, there is a Market - All it needs is Human Will to prevent this Mass Deforestation & Irreversible destruction of Ecosystems.
              </p>

            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full md:h-[500px] rounded-lg overflow-hidden">
            <img
              src={getImagePath("/charcoal-firewood.png")}
              alt="charcoal-firewood"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Biocoal Section */}
      <section className="py-8  px-4 sm:px-8 md:px-[150px] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-[#474747] order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium 
                         text-heading text-transparent bg-clip-text mb-4">
              We prevent Deforestation
            </h2>
            
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg font-regular leading-relaxed text-para">
              Produced exclusively from residual biomass streams through torrefaction in our proprietary reactors, Nexchar's Biocoal is a sustainable, zero-emission, and scalable alternative to traditional wood charcoal and forest fuels—the primary drivers of deforestation.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-regular leading-relaxed text-para">
              Available in various grades and forms, it delivers a truly viable and eco-friendly pathway to meet global forest fuel demand while preserving forests and reducing environmental impact.
              </p>

            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full md:h-[500px] rounded-lg overflow-hidden order-2 md:order-1">
            <img
              src={getImagePath("/our-biocoal.png")}
              alt="our-biocoal"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      

      {/* Biocoal Special Section */}
      <section className="py-12 bg-olive">
        <div className="px-4 sm:px-8 md:px-[150px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-12 md:mb-12
                       text-heading text-transparent bg-clip-text">
            Why is our Biocoal special?
          </h2>
          <div className="relative w-full">
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-6 sm:pb-0 sm:overflow-x-visible -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
              {[
                {
                  title: "Its Carbon Neutral",
                  description: "Only from agricultural and forest waste we produce Biocoal which is a clean substitute to traditional wood fuel/charcoal",
                  icon: "Increase-Water-Retention.svg"
                },
                {
                  title: "Natural & Chemical Free",
                  description: "Improved nutrient uptake and availability for plants.",
                  icon: "Increased-Fertiliser-Efficiency.svg"
                },
                {
                  title: "Versatile Applications",
                  description: "Improved nutrient uptake and availability for plants.",
                  icon: "Houses-Good-Microbes.svg"
                },
                {
                  title: "Prolonged Burn Time",
                  description: "Create optimal environment for beneficial soil microorganisms",
                  icon: "Improves-Soil-Structure.svg"
                },
                {
                  title: "High Heat",
                  description: "Enhance soil structure for better water holding capacity",
                  icon: "metal-toxins.svg"
                },
                {
                  title: "Low Ash",
                  description: "Improved nutrient uptake and availability for plants.",
                  icon: "Increased-cation-exchange-capacity.svg"
                },
                {
                  title: "Smokeless",
                  description: "Improved nutrient uptake and availability for plants.",
                  icon: "Liming-Effect.svg"
                },
                {
                  title: "Quick Ignition",
                  description: "Create optimal environment for beneficial soil microorganisms",
                  icon: "Improved-yields-from-first-Application.svg"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] sm:w-auto snap-center rounded-[12px] p-5 sm:p-4"
                  style={{
                    background: 'linear-gradient(99.49deg,rgb(255, 255, 255) 0.47%,rgb(255, 255, 255) 98.81%)',
                    position: 'relative',
                    isolation: 'isolate',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[12px]"
                    style={{
                      content: '""',
                      background: 'linear-gradient(90deg, #3D4E3A 0%, #3D4E3A 100%)',
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      pointerEvents: 'none'
                    }}
                  />
                  <div className="flex flex-col items-center gap-4 sm:gap-2 text-center relative z-10">
                    <div className="relative w-16 h-16 ">
                      <div 
                        className="w-full h-full"
                        style={{
                          maskImage: `url(${getImagePath(`/crops/${benefit.icon}`)})`,
                          WebkitMaskImage: `url(${getImagePath(`/crops/${benefit.icon}`)})`,
                          maskSize: 'contain',
                          WebkitMaskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          WebkitMaskRepeat: 'no-repeat',
                          maskPosition: 'center',
                          WebkitMaskPosition: 'center',
                          background: 'linear-gradient(90deg, #3D4E3A 0%, #3D4E3A 100%)'
                        }}
                      />
                    </div>
                    <div className="flex flex-col items-center gap-1.5 sm:gap-1">
                      <h3 className="text-lg sm:text-sm md:text-base font-semibold leading-tight
                                  text-heading">
                        {benefit.title}
                      </h3>
                      {/* <p className="text-[#EDFDF6] text-base sm:text-xs font-light leading-snug">
                        {benefit.description}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Biocoal Types Section */}
      <section className="py-16 px-4 sm:px-8 md:px-[150px] bg-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 sm:mb-12
                     text-heading text-transparent bg-clip-text">
          Our Biocoals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Round Briquettes",
              image: "/Round-Briquettes.png"
            },
            {
              title: "Pillow Briquettes",
              image: "/Pillow-Briquettes.png"
            },
            {
              title: "Pellets",
              image: "/Pellets.png"
            }
          ].map((product, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <div className="aspect-[4/3] w-full relative">
                <img
                  src={getImagePath(product.image)}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x600/333333/FFFFFF?text=' + product.title;
                  }}
                />
                
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Easy Replacement Section */}
      <section className="py-16 px-4 sm:px-8 md:px-[150px] bg-olive">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 sm:mb-12
                     text-heading text-transparent bg-clip-text">
          Easy Replacement, Infinite value
        </h2>
        
        {/* Mobile Swiper */}
        <div className="block sm:hidden relative pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
          >
            {[
              {
                title: "Clean home Cook stoves",
                image: "/replacement/clean-home.png"
              },
              {
                title: "Outdoor Grilling",
                image: "/replacement/outdoor-grilling.png"
              },
              {
                title: "Street food vendors",
                image: "/replacement/street-food.png"
              },
              {
                title: "Restaurants - (Tandoor)",
                image: "/replacement/tandoor.png"
              },
              {
                title: "Brick kilns",
                image: "/replacement/brick.png"
              },
              {
                title: "Small Industries",
                image: "/replacement/small-industries.png"
              }
            ].map((application, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-3">
                    <img
                      src={getImagePath(application.image)}
                      alt={application.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/800x800/333333/FFFFFF?text=' + application.title;
                      }}
                    />
                  </div>
                  <h3 className="text-center text-lg font-medium text-heading">
                    {application.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination absolute bottom-0 left-0 right-0 flex justify-center gap-2 [&>.swiper-pagination-bullet]:w-2 [&>.swiper-pagination-bullet]:h-2 [&>.swiper-pagination-bullet]:bg-[#886808]/30 [&>.swiper-pagination-bullet-active]:bg-[#886808]"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Clean home Cook stoves",
              image: "/replacement/clean-home.png"
            },
            {
              title: "Outdoor Grilling",
              image: "/replacement/outdoor-grilling.png"
            },
            {
              title: "Street food vendors",
              image: "/replacement/street-food.png"
            },
            {
              title: "Restaurants - (Tandoor)",
              image: "/replacement/tandoor.png"
            },
            {
              title: "Brick kilns",
              image: "/replacement/brick.png"
            },
            {
              title: "Small Industries",
              image: "/replacement/small-industries.png"
            }
          ].map((application, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-3">
                <img
                  src={getImagePath(application.image)}
                  alt={application.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x800/333333/FFFFFF?text=' + application.title;
                  }}
                />
              </div>
              <h3 className="text-center text-xl font-medium text-heading">
                {application.title}
              </h3>
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Biocoal;