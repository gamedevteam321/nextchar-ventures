import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] py-12 border-t border-white/10">
      <div className="max-w-[90rem] mx-auto px-4 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Company Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm text-center md:text-left">
              Transforming waste into value through innovative carbon removal solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Impact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">info@nexcharventures.com</li>
              {/* <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">123 Business Street</li>
              <li className="text-gray-400">City, State 12345</li> */}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
