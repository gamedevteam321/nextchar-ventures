import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDarkTheme);
    document.documentElement.classList.toggle('light', !isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80; // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (isMobileMenuOpen) {
        toggleMobileMenu();
      }
    }
  };

  const handleGetStarted = () => {
    // Scroll to the contact or relevant section
    handleNavClick({ preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>, '#carbon');
  };

  return (
    <>
      <header className={`${isScrolled ? 'sticky-header' : 'bg-transparent'} 
        ${!isDarkTheme ? 'light-header bg-white text-black shadow-md' : ''} 
        py-6 px-6 md:px-12 lg:px-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}>
        <div className="flex items-center">
          <div className="flex items-center">
            <img 
              src={getImagePath(isDarkTheme ? "/lovable-uploads/logo.png" : "/lovable-uploads/blacklogo.png")} 
              alt="Nextchar Ventures" 
              className="h-12 w-auto" 
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#products" 
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 text-sm font-medium`}
            onClick={(e) => handleNavClick(e, '#products')}
          >
            Products
          </a>
          <a 
            href="#technology" 
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 text-sm font-medium`}
            onClick={(e) => handleNavClick(e, '#technology')}
          >
            Technology
          </a>
          <a 
            href="#carbon" 
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 text-sm font-medium`}
            onClick={(e) => handleNavClick(e, '#carbon')}
          >
            Carbon Removal
          </a>
          <a 
            href="#about" 
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 text-sm font-medium`}
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About Us
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            className="hidden md:flex bg-gold text-black hover:bg-gold-light font-medium rounded-md text-sm px-6"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'}`}
            onClick={toggleTheme}
          >
            {isDarkTheme ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isDarkTheme ? 'text-white' : 'text-gray-800'} p-2`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 w-[80%] h-full ${isDarkTheme ? 'bg-black/95' : 'bg-white'} z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          <a
            href="#products"
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 text-xl font-medium`}
            onClick={(e) => handleNavClick(e, '#products')}
          >
            Products
          </a>
          <a
            href="#technology"
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 text-xl font-medium`}
            onClick={(e) => handleNavClick(e, '#technology')}
          >
            Technology
          </a>
          <a
            href="#carbon"
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 text-xl font-medium`}
            onClick={(e) => handleNavClick(e, '#carbon')}
          >
            Carbon Removal
          </a>
          <a
            href="#about"
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 text-xl font-medium`}
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About Us
          </a>
          <Button
            className="bg-gold text-black hover:bg-gold-light font-medium rounded-md text-lg px-8 py-3 mt-4"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} mt-4`}
            onClick={toggleTheme}
          >
            {isDarkTheme ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;