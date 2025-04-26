import { getImagePath } from "@/lib/utils";

const CarbonCreditsSection = () => {
  return (
    <section id="carbon" className="py-6 sm:py-8 md:py-12 bg-olive w-full overflow-x-hidden">
      <div className="mx-auto w-full px-4 sm:px-6  lg:pr-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center w-full">
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden w-full">
            <img 
              src={getImagePath("/carbon-credits-1.png")}
              alt="Carbon Credits"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-4 md:space-y-6 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8 font-montserrat leading-[100%] tracking-[0%] capitalize bg-[#3D4E3A] text-transparent bg-clip-text">
              <span >
                Our Projects Create Carbon <br /> Removal Credits
              </span>
              
            </h2>
            
            <div className="space-y-4 md:space-y-6 w-full">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-regular font-montserrat leading-[120%] md:leading-[100%] tracking-[0%]" style={{ color: '#474747' }}>
                We develop & operate decentralized carbon removal projects, focusing on hyperlocal sites with consistent biomass residue availability and carbon sequestration potential.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-regular font-montserrat leading-[120%] md:leading-[100%] tracking-[0%]" style={{ color: '#474747' }}>
                Our projects generate verified carbon removal credits that help finance sustainable development and climate action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCreditsSection;
