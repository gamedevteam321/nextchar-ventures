
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    id: 1,
    number: '1,650,000+',
    label: 'CO₂ sequestered',
    icon: '🌱'
  },
  {
    id: 2,
    number: '3,000,000+',
    label: 'tons biomass processed',
    icon: '🌿'
  },
  {
    id: 3,
    number: '750,000+',
    label: 'tons of biochar produced',
    icon: '🌎'
  },
  {
    id: 4,
    number: '1000+',
    label: 'field trials, 10,000+ carbon data points',
    icon: '📊'
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section className="section-padding bg-carbon px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="section-title">Our Plan</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card animate-fade-in" style={{ animationDelay: `${stat.id * 0.1}s` }}>
              <span className="text-3xl mb-2">{stat.icon}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-2">{stat.number}</h3>
              <p className="text-center text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gold/10 p-8 rounded-lg border border-gold/20 text-center max-w-4xl mx-auto">
          <p className="text-xl italic text-white">
            "From degraded to regenerated — biochar is the bridge to fertile, living soil"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
