import { getImagePath } from "@/lib/utils";

const CarbonCreditsSection = () => {
  return (
    <section id="carbon" className="py-8 sm:py-12 md:py-[10px] bg-carbon-dark w-full overflow-x-hidden">
      <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-10 md:px-16 lg:px-24 xl:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Content Side */}
          <div className="space-y-6 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 font-montserrat leading-[100%] tracking-[0%] capitalize">
              <span style={{ background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Our Projects Create Carbon
              </span>
              <br />
              <span style={{ background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Removal Credits
              </span>
            </h2>
            
            <div className="space-y-6 w-full">
              <p className="text-base sm:text-lg md:text-xl font-light font-montserrat leading-[100%] tracking-[0%]" style={{ color: '#474747' }}>
                We develop & operate decentralized carbon removal projects, focusing on hyperlocal sites with consistent biomass residue availability and carbon sequestration potential.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl font-light font-montserrat leading-[100%] tracking-[0%]" style={{ color: '#474747' }}>
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
