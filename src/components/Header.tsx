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
  return <header className={`${isScrolled ? 'sticky-header' : 'bg-transparent'} py-6 px-6 md:px-12 lg:px-16 flex items-center justify-between absolute top-0 left-0 right-0 z-50`}>
      <div className="flex items-center">
        <div className="flex items-center">
          <img src="/lovable-uploads/febb6c91-fbeb-473c-8b2d-00dcf36d471c.png" alt="Lovable Ventures" className="h-12 w-auto" />
          
        </div>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#products" className="text-white hover:text-gold transition-colors duration-300 text-sm font-medium">Products</a>
        <a href="#technology" className="text-white hover:text-gold transition-colors duration-300 text-sm font-medium">Technology</a>
        <a href="#carbon" className="text-white hover:text-gold transition-colors duration-300 text-sm font-medium">Carbon Removal</a>
        <a href="#about" className="text-white hover:text-gold transition-colors duration-300 text-sm font-medium">About Us</a>
      </nav>
      
      <Button className="bg-gold text-black hover:bg-gold-light font-medium rounded-md text-sm px-6">Get Started</Button>
    </header>;
};
export default Header;