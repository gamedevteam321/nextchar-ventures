import React from 'react';
import Image from 'next/image';

const technologies = [
  {
    id: 1,
    title: "Modular & Scalable",
    description: "Can be placed anywhere, and scaled to Biomass availability by adding modular units as required",
    icon: "/technology/Modular-Scalable.svg"
  },
  {
    id: 2,
    title: "Offgrid with Zero External Electricity",
    description: "Each reactor is connected to its dedicated syngas powered electricity generation system, achieving exceptional energy autonomy & operational efficiency",
    icon: "/technology/Low-Energy-Consumption.svg"
  },
  {
    id: 3,
    title: "Biomass Agnostic",
    description: "Process various types of organic material for maximum versatility",
    icon: "/technology/Biomass-Agnostic.svg"
  },
  {
    id: 4,
    title: "Hyperlocal Implementation",
    description: "Units operate within a small radius for both Biomass sourcing as well as final product utilization, for highest efficiency and least carbon leakage",
    icon: "/technology/Hyperlocal-Implementation.svg"
  },
  {
    id: 5,
    title: "Low Skill Requirement",
    description: "Designed for ease of operation in rural and semi rural areas , we create employment opportunities",
    icon: "/technology/Low-Skill-Requirement.svg"
  },
  {
    id: 6,
    title: "High Temperature with Precision Control",
    description: "Achieve optimal pyrolysis conditions for different feedstocks",
    icon: "/technology/High-Temperature.svg"
  },
  {
    id: 7,
    title: "Emissions Control",
    description: "Advanced systems to ensure clean operation with minimal environmental impact",
    icon: "/technology/Emissions-Control.svg"
  },
  {
    id: 8,
    title: "Transparent Monitoring",
    description: "Real-time live data collection from multiple points  for process optimization and verification.",
    icon: "/technology/Transparent-Monitoring.svg"
  },
  {
    id: 9,
    title: "Trusted Verification Process",
    description: "Rigorous standards ensuring accountability and quality assurance.",
    icon: "/technology/Trusted-Verification-Process.svg"
  }
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-4 bg-carbon w-full overflow-x-hidden ">
      <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-10 md:px-16 lg:px-24 xl:px-28">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-1 font-montserrat leading-[100%] tracking-[0%] capitalize">
          <span style={{ background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Our Proprietary Technology drives Innovation 
          </span>
        </h2>
        
        
        <div className="relative w-full pt-10 ">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto pb-6 sm:pb-0 sm:overflow-x-visible -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
            {technologies.map((tech) => (
              <div
                key={tech.id}
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
                        maskImage: `url(${tech.icon})`,
                        WebkitMaskImage: `url(${tech.icon})`,
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
                      {tech.title}
                    </h3>
                    <p className="text-[#EDFDF6] text-base sm:text-xs font-light leading-snug">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
