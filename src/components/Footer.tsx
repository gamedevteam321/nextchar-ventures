import React from 'react';
import { getImagePath } from "@/lib/utils";
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12" style={{ background: '#F0EDE4' }}>
      <div className="max-w-[90rem] mx-auto px-4 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center">
          {/* Logo Column */}
          <div className="flex flex-col items-center justify-center">
            <img 
              src={getImagePath("/footer-logo.png")} 
              alt="Nexchar Ventures" 
              className="h-40 w-auto"
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[200px] text-left">
              <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Technology</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Impact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[200px] text-left">
              <h3 className="text-gray-800 font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">info@nexcharventures.com</li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/nexchar-ventures" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Line */}
        <div className="w-full py-8">
          <img 
            src={getImagePath("/Section-line.png")}
            alt="Section Divider" 
            className="w-full h-auto" 
          />
        </div>

        {/* Copyright */}
        <div className="pt-8">
          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
