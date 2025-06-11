import React, { useState } from 'react';
import { Menu, X, Monitor } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Monitor className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">MITS</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#partners" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Partners</a>
            <a href="#stats" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Statistics</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#partners" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Partners</a>
              <a href="#stats" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Statistics</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;