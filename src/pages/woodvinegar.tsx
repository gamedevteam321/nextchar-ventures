import React from 'react';
import { getImagePath } from "@/lib/utils";
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

const WoodVinegar = () => {
  return (
    <div className="text-[#474747] font-montserrat bg-[#F0EDE4]">
      {/* Hero Section */}
      <section id="overview" className="relative min-h-[600px] sm:min-h-[600px] h-[100vh] sm:h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {/* Mobile Hero Image */}
          <img
            src={getImagePath("/wood-vinegar-potrait.png")}
            alt="Wood Vinegar Hero"
            className="w-full h-full object-cover object-right sm:hidden"
          />
          
          {/* Desktop Hero Image */}
          <img
            src={getImagePath("/wood-vinegar-howtouse.png")}
            alt="Wood Vinegar Hero"
            className="hidden sm:block w-full h-full object-cover object-center"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
        </div>

        <div className="relative z-20 h-full flex flex-col justify-end items-start text-left px-4 sm:px-16 pb-8 sm:pb-12">
          <h1 className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[120%] sm:leading-[110%] tracking-[0%] mb-4
                       text-white text-transparent bg-clip-text">
                        The ideal organic fertilizer & bio stimulant
          </h1>
          <p className="text-white text-xl sm:text-xl">
          Wood Vinegar is a natural byproduct of charcoal production through pyrolysis. It's rich in organic compounds and works as a powerful bio-stimulant and organic fertilizer
          </p>

        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-4 sm:py-12 md:py-[50px] bg-white">
        <div className="px-4 sm:px-8 md:px-[150px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-12 md:mb-12
                        text-heading text-transparent bg-clip-text">
            Key Benefits
          </h2>

          <div className="relative w-full">
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-2 gap-4 overflow-x-auto pb-6 sm:pb-0 sm:overflow-x-visible -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
              {[
                {
                  title: "Boosts Plant Growth",
                  description: "Enhances root development and nutrient absorption.",
                  icon: "Boosts-Plant-Growth.svg"
                },
                {
                  title: "Natural Pest Repellent",
                  description: "Repels harmful insects and fungi without chemicals.",
                  icon: "Natural-Pest-Repellent.svg"
                },
                {
                  title: "Improves Soil Health",
                  description: "Promotes beneficial microbes and balances pH.",
                  icon: "Improves-Soil-Health.svg"
                },
                {
                  title: "Eco-Friendly",
                  description: "100% natural and biodegradable – safe for soil, water, and crops.",
                  icon: "Eco-Friendly.svg"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] sm:w-auto snap-center rounded-lg p-4 sm:p-6"
                  style={{
                    background: 'linear-gradient(99.49deg, #F5F5F5 0.47%, #F5F5F5 98.81%)',
                    border: '2px solid #3D4E3A'
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <div
                      className="w-20 h-20"
                      style={{
                        maskImage: `url(${getImagePath(`/woodvinegar/${benefit.icon}`)})`,
                        WebkitMaskImage: `url(${getImagePath(`/woodvinegar/${benefit.icon}`)})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                        background: 'linear-gradient(90deg, #3D4E3A 0%, #3D4E3A 100%)'
                      }}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className=" sm:text-lg md:text-xl font-medium leading-tight
                                  text-heading text-transparent bg-clip-text">
                        {benefit.title}
                      </h3>
                      <p className="text-para text-sm sm:text-base font-regular leading-relaxed">
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

      

      {/* Additional Agronomic Effects Section */}
      <section className="pt-12 pb-16 bg-white">
        <div className="px-4 sm:px-8 md:px-[150px]">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-8 sm:mb-12
                      text-heading text-transparent bg-clip-text">
            Additional Agronomic Effects
          </h2>

          <div className="flex flex-col gap-5">
            <img 
              src={getImagePath("/woodvinegar/reduction-fertilizers.png")} 
              alt="Reduction of fertilizers and pesticides"
              className="w-full rounded-lg"
            />
            <img 
              src={getImagePath("/woodvinegar/enhance-roots.png")} 
              alt="Enhances roots"
              className="w-full rounded-lg"
            />
            <img 
              src={getImagePath("/woodvinegar/genrmination.png")} 
              alt="Improves germination"
              className="w-full rounded-lg"
            />
            <img 
              src={getImagePath("/woodvinegar/photosynthesis.png")} 
              alt="Increase photosynthesis"
              className="w-full rounded-lg"
            />
            <img 
              src={getImagePath("/woodvinegar/regulates-nutrients.png")} 
              alt="Regulates nutrients"
              className="w-full rounded-lg"
            />
            <img 
              src={getImagePath("/woodvinegar/taste-of-fruits.png")} 
              alt="Enhances taste of fruits"
              className="w-full rounded-lg"
            />
            <img 
              src={getImagePath("/woodvinegar/increase-resistance.png")} 
              alt="Increases resistance to disease"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      

      {/* How To Use Section */}
      <section className=" py-4 sm:py-12 md:py-[50px] bg-olive">
        <div className="px-4 sm:px-8 md:px-[150px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div>
              <img 
                src={getImagePath("/wood-vinegar-hero.png")}
                alt="Wood Vinegar Usage"
                className="w-full rounded-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-center h-full gap-4 sm:gap-4 md:gap-16 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left
                          text-heading text-transparent bg-clip-text">
                How To Use
              </h2>

              <div className="flex flex-col gap-4 sm:gap-4 md:gap-12 text-center sm:text-left">
                {/* Dilution */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-2">
                    Dilution
                  </h3>
                  <p className="text-[#000000] text-sm sm:text-base">
                    Mix 1:500 to 1:1000 with water for foliar spray or soil drench.
                  </p>
                </div>

                {/* Application */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-2">
                    Application
                  </h3>
                  <p className="text-[#000000] text-sm sm:text-base">
                    Use during early morning or late evening for best results.
                  </p>
                </div>

                {/* Frequency */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-2">
                    Frequency
                  </h3>
                  <p className="text-[#000000] text-sm sm:text-base">
                    1-2 times a week for continuous plant health improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WoodVinegar; 