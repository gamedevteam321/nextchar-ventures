
import React from 'react';

const technologies = [
  {
    id: 1,
    title: 'Modular & Scalable',
    description: 'Adaptable systems for any operation size'
  },
  {
    id: 2,
    title: 'Biomass Agnostic',
    description: 'Works with virtually any organic feedstock'
  },
  {
    id: 3,
    title: 'High Temperature Pyrolysis',
    description: 'Clean production with precise control'
  },
  {
    id: 4,
    title: 'Hyperlocal Implementation',
    description: 'Bringing solutions directly to communities'
  },
  {
    id: 5,
    title: 'Low Skill Requirement',
    description: 'User-friendly technology for all skill levels'
  },
  {
    id: 6,
    title: 'Low Energy Consumption',
    description: 'Efficient operations with minimal resources'
  },
  {
    id: 7,
    title: 'Emissions Control',
    description: 'Clean processes that maintain air quality'
  },
  {
    id: 8,
    title: 'Transparent MRV',
    description: 'Measurement, Reporting, and Verification'
  },
  {
    id: 9,
    title: 'Trusted Verification',
    description: 'Third-party validation of all credits'
  }
];

const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="section-padding bg-carbon-light px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="section-title">Our Technology</h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Our processing technology is scalable, efficient & clean
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div key={tech.id} className="tech-card">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 flex items-center justify-center border border-gold rounded-full">
                  <span className="text-gold text-xl">{tech.id}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-gold mb-2">{tech.title}</h3>
              <p className="text-center text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
