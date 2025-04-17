import React from 'react';

const technologies = [
  {
    id: 1,
    title: "Modular & Scalable",
    description: "Easily scale up or down based on biomass availability and project requirements."
  },
  {
    id: 2,
    title: "Biomass Agnostic",
    description: "Process various types of organic material for maximum versatility."
  },
  {
    id: 3,
    title: "High Temperature with Precision Control",
    description: "Achieve optimal pyrolysis conditions for different feedstocks."
  },
  {
    id: 4,
    title: "Hyperlocal Implementation",
    description: "Deploy units directly where biomass is available to minimize transportation."
  },
  {
    id: 5,
    title: "Low Skill Requirement",
    description: "Designed for ease of operation in various global contexts."
  },
  {
    id: 6,
    title: "Low Energy Consumption",
    description: "Energy-efficient design that minimizes operational costs."
  },
  {
    id: 7,
    title: "Emissions Control",
    description: "Advanced systems to ensure clean operation with minimal environmental impact."
  },
  {
    id: 8,
    title: "Transparent Monitoring",
    description: "Real-time data collection for process optimization and verification."
  },
  {
    id: 9,
    title: "Trusted Verification Process",
    description: "Rigorous standards ensuring accountability and quality assurance."
  }
];

export default function TechnologySection() {
  return (
    <section id="technology" className="pt-8 sm:pt-12 md:pt-[80px]  bg-carbon w-full overflow-x-hidden">
      <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-10 md:px-16 lg:px-24 xl:px-28">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 md:mb-1 font-montserrat leading-[100%] tracking-[0%] capitalize">
          <span style={{ background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Our Technology
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10" style={{ color: '#474747' }}>
          Our Processing technology is scalable, efficient & robust
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="rounded-[12px] p-3 sm:p-4"
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
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex justify-center">
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 2L44.7846 13V35L24 46L3.21539 35V13L24 2Z" stroke="url(#paint0_linear)" strokeWidth="2"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="3.21539" y1="24" x2="44.7846" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A4966E"/>
                        <stop offset="1" stopColor="#F0EDE4"/>
                      </linearGradient>
                    </defs>
                  </svg>
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
    </section>
  );
}
