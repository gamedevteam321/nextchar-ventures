
import React from 'react';
import { Button } from "@/components/ui/button";

const FooterCTA: React.FC = () => {
  return (
    <section className="section-padding bg-carbon px-6 md:px-12">
      <div className="container mx-auto">
        <div className="border border-gold/30 rounded-xl bg-carbon-light/50 p-8 md:p-12 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
            THE TIME IS NOW
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a carbon project developer creating scalable solutions for sustainable agriculture, carbon sequestration, and climate resilience. Join us in building a regenerative future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gold">Join Our Mission</Button>
            <Button className="btn-outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
