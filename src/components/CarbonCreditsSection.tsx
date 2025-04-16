import { getImagePath } from "@/lib/utils";

const CarbonCreditsSection = () => {
  return (
    <section id="carbon" className="section-padding bg-carbon-dark w-full overflow-x-hidden">
      <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Content Side */}
          <div className="space-y-6 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 font-montserrat leading-[100%] tracking-[0%] capitalize">
              <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] bg-clip-text text-transparent">
                Our Projects Create Carbon
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] bg-clip-text text-transparent">
                Removal Credits
              </span>
            </h2>
            
            <div className="space-y-6 w-full">
              <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light font-montserrat leading-[100%] tracking-[0%]">
                We develop & operate decentralized carbon removal projects, focusing on hyperlocal sites with consistent biomass residue availability and carbon sequestration potential.
              </p>
              
              <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light font-montserrat leading-[100%] tracking-[0%]">
                Our projects generate verified carbon removal credits that help finance sustainable development and climate action.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden w-full">
            <img 
              src={getImagePath("/carbon-credits.png")}
              alt="Carbon Credits"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCreditsSection;
