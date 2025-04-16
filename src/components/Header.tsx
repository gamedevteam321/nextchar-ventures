import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    
    // If not on home page, navigate to home page first
    if (location.pathname !== '/') {
      window.location.href = '/' + sectionId;
      return;
    }

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

  const handleProductClick = (product: string) => {
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate(`/${product}`);
  };

  return (
    <>
      <header className={`${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'} 
        py-6 px-6 md:px-12 lg:px-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
        <div className="flex items-center">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src={getImagePath("/lovable-uploads/logo.png")} alt="NexChar Ventures" className="h-12 w-auto" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div 
            className="relative group"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <button 
              className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[25px] font-light leading-[100%] tracking-[0%] text-center flex items-center`}
            >
              Products
              <ChevronDown className="ml-1 h-5 w-5" />
            </button>
            
            {/* Products Dropdown */}
            <div className={`absolute top-full left-0 w-48 ${isDarkTheme ? 'bg-black/90' : 'bg-white'} rounded-md shadow-lg py-2 mt-2 transition-all duration-300 ${isProductsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <a 
                href="/biochar" 
                className={`block px-4 py-2 ${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  handleProductClick('biochar');
                }}
              >
                Biochar
              </a>
              <a 
                href="#bio-coal" 
                className={`block px-4 py-2 ${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300`}
                onClick={(e) => handleNavClick(e, '#bio-coal')}
              >
                Biocoal
              </a>
              <a 
                href="#wood-vinegar" 
                className={`block px-4 py-2 ${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300`}
                onClick={(e) => handleNavClick(e, '#wood-vinegar')}
              >
                Wood Vinegar
              </a>
            </div>
          </div>
          <a 
            href="#technology" 
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[25px] font-light leading-[100%] tracking-[0%] text-center`}
            onClick={(e) => handleNavClick(e, '#technology')}
          >
            Technology
          </a>
          <a 
            href="#carbon" 
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[25px] font-light leading-[100%] tracking-[0%] text-center`}
            onClick={(e) => handleNavClick(e, '#carbon')}
          >
            Carbon Removal
          </a>
          <a 
            href="#about" 
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[25px] font-light leading-[100%] tracking-[0%] text-center`}
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About Us
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            className="hidden md:flex text-white hover:opacity-90 font-medium rounded-md text-sm px-6 relative
            before:absolute before:inset-0 before:rounded-md before:p-[3px] before:bg-gradient-to-r before:from-[#F0EDE4] before:to-[#A4966E]
            after:absolute after:inset-[3px] after:rounded-[5px] after:bg-gradient-to-r after:from-[#886808] after:to-[#C5A133]"
            onClick={handleGetStarted}
          >
            <span className="relative z-10">Get Started</span>
          </Button>

          {/* Theme Toggle Button - Hidden for now
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
          */}
          
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
          <div className="relative">
            <button 
              className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[25px] font-light leading-[100%] tracking-[0%] text-center flex items-center`}
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
            >
              Products
              <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Products Dropdown */}
            <div className={`${isProductsDropdownOpen ? 'max-h-48' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
              <div className="flex flex-col items-center space-y-4 mt-4">
                <a
                  href="/biochar"
                  className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[20px] font-light leading-[100%] tracking-[0%] text-center`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleProductClick('biochar');
                  }}
                >
                  Biochar
                </a>
                <a
                  href="#bio-coal"
                  className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[20px] font-light leading-[100%] tracking-[0%] text-center`}
                  onClick={(e) => handleNavClick(e, '#bio-coal')}
                >
                  Biocoal
                </a>
                <a
                  href="#wood-vinegar"
                  className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[20px] font-light leading-[100%] tracking-[0%] text-center`}
                  onClick={(e) => handleNavClick(e, '#wood-vinegar')}
                >
                  Wood Vinegar
                </a>
              </div>
            </div>
          </div>
          <a
            href="#technology"
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[25px] font-light leading-[100%] tracking-[0%] text-center`}
            onClick={(e) => handleNavClick(e, '#technology')}
          >
            Technology
          </a>
          <a
            href="#carbon"
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[25px] font-light leading-[100%] tracking-[0%] text-center`}
            onClick={(e) => handleNavClick(e, '#carbon')}
          >
            Carbon Removal
          </a>
          <a
            href="#about"
            className={`${isDarkTheme ? 'text-white hover:text-gold' : 'text-gray-800 hover:text-gold'} transition-colors duration-300 font-inter text-[25px] font-light leading-[100%] tracking-[0%] text-center`}
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About Us
          </a>
          <Button
            className="bg-gold text-black hover:bg-gold-light font-medium rounded-md text-lg px-8 py-3 mt-4 relative
            before:absolute before:inset-0 before:rounded-md before:p-[3px] before:bg-gradient-to-r before:from-[#F0EDE4] before:to-[#A4966E]
            after:absolute after:inset-[3px] after:rounded-[5px] after:bg-gradient-to-r after:from-[#886808] after:to-[#C5A133]"
            onClick={handleGetStarted}
          >
            <span className="relative z-10">Get Started</span>
          </Button>
          {/* Theme Toggle Button in Mobile Menu - Hidden for now
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
          */}
        </nav>
      </div>
    </>
  );
};

export default Header;