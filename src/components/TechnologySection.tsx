import React from 'react';
import Image from 'next/image';

const technologies = [
  {
    id: 1,
    title: "Modular & Scalable",
    description: "Easily scale up or down based on biomass availability and project requirements.",
    icon: "/technology/Modular-Scalable.svg"
  },
  {
    id: 2,
    title: "Biomass Agnostic",
    description: "Process various types of organic material for maximum versatility.",
    icon: "/technology/Biomass-Agnostic.svg"
  },
  {
    id: 3,
    title: "High Temperature with Precision Control",
    description: "Achieve optimal pyrolysis conditions for different feedstocks.",
    icon: "/technology/High-Temperature.svg"
  },
  {
    id: 4,
    title: "Hyperlocal Implementation",
    description: "Units operate within a small radius for both Biomass sourcing as well as final product utilization, for highest efficiency and least carbon leakage.",
    icon: "/technology/Hyperlocal-Implementation.svg"
  },
  {
    id: 5,
    title: "Low Skill Requirement",
    description: "Designed for ease of operation in rural and semi rural areas , we create employment opportunities.",
    icon: "/technology/Low-Skill-Requirement.svg"
  },
  {
    id: 6,
    title: "Low Energy Consumption",
    description: "Energy-efficient design that minimizes process carbon leakages.",
    icon: "/technology/Low-Energy-Consumption.svg"
  },
  {
    id: 7,
    title: "Emissions Control",
    description: "Advanced systems to ensure clean operation with minimal environmental impact.",
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
    <section id="technology" className="pt-4 bg-carbon w-full overflow-x-hidden">
      <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-10 md:px-16 lg:px-24 xl:px-28">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 md:mb-1 font-montserrat leading-[100%] tracking-[0%] capitalize">
          <span style={{ background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Our Technology
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10" style={{ color: '#474747' }}>
          Our Processing technology is modular, scalable, and efficient
        </p>
        
        <div className="relative w-full">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto pb-6 sm:pb-0 sm:overflow-x-visible -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex-shrink-0 w-[280px] sm:w-auto snap-center rounded-[12px] p-3 sm:p-4"
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
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center relative z-10">
                  <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex justify-center">
                    <div 
                      className="w-full h-full"
                      style={{
                        maskImage: `url(${tech.icon})`,
                        WebkitMaskImage: `url(${tech.icon})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                        background: 'linear-gradient(90deg, #A4966E 0%, #F0EDE4 100%)'
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                    <h3 className="text-xs sm:text-sm md:text-base font-medium leading-tight
                                bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                      {tech.title}
                    </h3>
                    <p className="text-[#EDFDF6] text-[10px] sm:text-xs font-light leading-relaxed">
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
