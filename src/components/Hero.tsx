import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] mb-16 overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
          Discover and download stunning, high-quality images
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
          Over millions of royalty-free stock photos for your next creative project
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-xl">
          <input 
            type="text" 
            className="w-full px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none shadow-lg" 
            placeholder="Search for any image..."
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-colors duration-300">
            <Search size={24} />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="text-sm bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
            Nature
          </span>
          <span className="text-sm bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
            Business
          </span>
          <span className="text-sm bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
            Technology
          </span>
          <span className="text-sm bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
            Architecture
          </span>
          <span className="text-sm bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
            Food
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;