import React from 'react';
import { getImagePath } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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
                         bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text
                         drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                         text-left max-w-[1200px]"
            >
              Replacing Forest Fuel, Preventing Deforestation
            </h1>
          </div>
        </div>
      </section>

      {/* Quote Slider Section */}
      <section className="pt-4  px-4 sm:px-8 md:px-[150px]">
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

      <SectionDivider />

      {/* charcoal and fire wood Section */}
      <section className="py-8 px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text Content */}
          <div className="text-[#474747]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Charcoal & Fire Wood are destroying  Global Forests
            </h2>
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
              More than 2 million hectares of Forests that have matured over 100s of years are destroyed together with their Bio-Diverse Ecosystems every year, just to produce Charcoal, while there is Biomass Waste everywhere that can be converted to high quality sustainable charcoal using low skills, simple, practical & decentralised technologies.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
              There is Raw Material, there is Technology, there is a Market - All it needs is Human Will to prevent this Mass Deforestation & Irreversible destruction of Ecosystems.
              </p>

            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full md:h-[400px] rounded-lg overflow-hidden">
            <img
              src={getImagePath("/charcoal-firewood.png")}
              alt="charcoal-firewood"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Biocoal Section */}
      <section className="py-8 px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image Container */}
          <div className="relative w-full md:h-[400px] rounded-lg overflow-hidden">
            <img
              src={getImagePath("/our-biocoal.png")}
              alt="our-biocoal"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Content */}
          <div className="text-[#474747]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium 
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Our Biocoal
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-8
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              We Prevent Deforestation
            </h3>
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Produced exclusively from residual biomass streams through torrefaction in our proprietary reactors, Nexchar's Biocoal is a sustainable, zero-emission, and scalable alternative to traditional wood charcoal and forest fuels—the primary drivers of deforestation.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Available in various grades and forms, it delivers a truly viable and eco-friendly pathway to meet global forest fuel demand while preserving forests and reducing environmental impact.
              </p>

            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Biocoal Special Section */}
      <section className="">
        <div className="px-4 sm:px-8 md:px-[150px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-12 md:mb-12
                       bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
            Why is our Biocoal special?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "No Carbon Blackening",
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
                className="rounded-lg p-4 sm:p-6 sm:aspect-square"
                style={{
                  background: 'linear-gradient(99.49deg, #222D2B 0.47%, #44615B 98.81%)',
                  border: '1px solid #A4966E'
                }}
              >
                <div className="flex flex-col h-full">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
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
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg font-medium leading-tight mb-2
                                bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light leading-relaxed text-[#FFFFFF]">
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

      {/* Biocoal Types Section */}
      <section className="py-8 px-4 sm:px-8 md:px-[150px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 sm:mb-12
                     bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
          Our Biocoal types
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
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x600/333333/FFFFFF?text=' + product.title;
                  }}
                />
                
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Easy Replacement Section */}
      <section className="py-8 mb-12 px-4 sm:px-8 md:px-[150px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 sm:mb-12
                     bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
          Easy Replacement, Infinite value
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
              <h3 className="text-center text-lg font-medium text-[#886808]">
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