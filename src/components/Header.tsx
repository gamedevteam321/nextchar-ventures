
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? 'sticky-header' : 'bg-transparent'} py-4 px-6 md:px-12 flex items-center justify-between`}>
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <span className="text-gold">L</span>
          <span className="text-white">ovable.dev</span>
        </div>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#products" className="text-white hover:text-gold transition-colors duration-300">Products</a>
        <a href="#technology" className="text-white hover:text-gold transition-colors duration-300">Technology</a>
        <a href="#carbon" className="text-white hover:text-gold transition-colors duration-300">Carbon Removal</a>
        <a href="#about" className="text-white hover:text-gold transition-colors duration-300">About Us</a>
      </nav>
      
      <Button className="btn-gold">Get Started</Button>
    </header>
  );
};

export default Header;
