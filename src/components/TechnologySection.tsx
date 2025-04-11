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
    <section id="technology" className="section-padding bg-carbon-dark px-6 md:px-12">
      <div className="max-w-[90rem] mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Technology</h2>
        <p className="text-xl md:text-2xl text-white/80 mb-16">Our Processing technology is scalable, efficient & robust</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div 
              key={tech.id}
              className="relative rounded-lg overflow-hidden group"
              style={{
                backgroundImage: `url(${getImagePath('/technology-placeholder.png')})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#111111',
                backgroundPosition: 'center'
              }}
            >
              <div className="aspect-[4/3] p-10 flex flex-col justify-center bg-gradient-to-b from-black/20 to-black/60 hover:from-black/40 hover:to-black/80 transition-all duration-300">
                <div className="text-center mt-16">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] bg-clip-text text-transparent">{tech.title}</h3>
                  <p className="text-white/90 text-sm">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
