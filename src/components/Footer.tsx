
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-carbon-dark py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-gold">L</span>
              <span className="text-white">ovable.dev</span>
            </div>
            <p className="text-gray-400">
              Scalable carbon solutions for a sustainable future.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gold">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Biochar</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Biocoal</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Wood Vinegar</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gold">Technology</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Processing</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Carbon Credits</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">MRV</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} lovable.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
