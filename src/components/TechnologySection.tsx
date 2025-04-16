import React from 'react';
import { getImagePath } from "@/lib/utils";

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
    <section id="technology" className="section-padding bg-carbon w-full overflow-x-hidden">
      <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-8 font-montserrat leading-[100%] tracking-[0%] capitalize">
          <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] bg-clip-text text-transparent">
            Our Technology
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 md:mb-16">Our Processing technology is scalable, efficient & robust</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {technologies.map((tech) => (
            <div 
              key={tech.id}
              className="relative rounded-lg overflow-hidden group w-full"
              style={{
                backgroundImage: `url(${getImagePath('/technology-placeholder.png')})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              {/* Gradient Overlay - Adjust these values:
                 from-black/80 - Starting opacity (0-100)
                 via-black/50 - Middle opacity (0-100)
                 to-transparent - End opacity (always transparent) */}
              <div className="absolute inset-0" />
              
              {/* Content Container - Adjust these values:
                 p-4 - Padding around content (p-1 to p-12)
                 space-y-1 - Vertical gap between elements (space-y-1 to space-y-12) */}
              <div className="aspect-[4/3] p-4 md:p-7 flex flex-col justify-end w-full">
                <div className="text-center space-y-1 md:space-y-2 w-full mb-10 md:mb-5">
                  <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] bg-clip-text text-transparent">{tech.title}</h3>
                  <p className="text-white/90 text-sm md:text-base">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
