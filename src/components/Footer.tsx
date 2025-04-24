import React from 'react';
import { getImagePath } from "@/lib/utils";
import { Linkedin } from 'lucide-react';
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.querySelector(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure page transition is complete
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, sectionId?: string) => {
    e.preventDefault();
    
    if (location.pathname === path) {
      // If we're already on the correct page, just scroll to section
      if (sectionId) {
        scrollToSection(sectionId);
      }
    } else {
      // Navigate to new page and then scroll if needed
      navigate(path);
      if (sectionId) {
        scrollToSection(sectionId);
      }
    }
  };

  return (
    <footer className="w-full py-12 bg-[#FDFAF3]">
      <div className="max-w-[90rem] mx-auto px-4 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center">
          {/* Logo Column */}
          <div className="flex flex-col items-center justify-center">
            <Link to="/" onClick={(e) => handleNavClick(e, '/', '#hero')}>
              <img 
                src={getImagePath("/footer-logo.png")} 
                alt="Nexchar Ventures" 
                className="h-60 w-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[200px] text-center md:text-left">
              <h3 className="text-black font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 flex flex-col items-center md:items-start">
                <li>
                  <a 
                    href="/about#overview" 
                    className="text-black hover:text-black transition-colors"
                    onClick={(e) => handleNavClick(e, '/about', '#overview')}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="/technology#hero"
                    className="text-black hover:text-black transition-colors"
                    onClick={(e) => handleNavClick(e, '/technology', '#hero')}
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a 
                    href="/carbon-credits#hero" 
                    className="text-black hover:text-black transition-colors"
                    onClick={(e) => handleNavClick(e, '/carbon-credits', '#hero')}
                  >
                    Impact
                  </a>
                </li>
                <li>
                  <a 
                    href="/about#connect" 
                    className="text-black hover:text-black transition-colors"
                    onClick={(e) => handleNavClick(e, '/about', '#connect')}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="/gallery#hero" 
                    className="text-black hover:text-black transition-colors"
                    onClick={(e) => handleNavClick(e, '/gallery', '#hero')}
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a 
                    href="/PrivacyPolicy" 
                    className="text-black hover:text-black transition-colors"
                    onClick={(e) => handleNavClick(e, '/PrivacyPolicy')}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[200px] text-center md:text-left">
              <h3 className="text-black font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-black">info@nexcharventures.com</li>
                <li className="flex justify-center md:justify-start">
                  <a 
                    href="https://www.linkedin.com/company/nexchar-ventures" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:text-black transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Line */}
        <div className="w-full py-4">
          <img 
            src={getImagePath("/Section-line.png")}
            alt="Section Divider" 
            className="w-full h-auto" 
          />
        </div>

        {/* Copyright */}
        <div className="pt-8">
          <p className="text-black text-sm text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
