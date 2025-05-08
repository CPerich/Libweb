import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from './Navigation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900 flex items-center">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 h-6 w-6 rounded-lg mr-2"></span>
            Pixel
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Explore
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Collections
            </Link>
            <div className="relative ml-2">
              <input
                type="text"
                placeholder="Search images..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white border-2 border-transparent focus:border-indigo-500 focus:outline-none w-44 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search images..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white border-2 border-transparent focus:border-indigo-500 focus:outline-none transition-all duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          </div>
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">
              Explore
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">
              Collections
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;