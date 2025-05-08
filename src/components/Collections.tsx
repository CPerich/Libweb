import React from 'react';
import { Collection } from '../types';

interface CollectionsProps {
  collections: Collection[];
}

const Collections: React.FC<CollectionsProps> = ({ collections }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Curated Collections</h2>
          <p className="text-gray-600 max-w-2xl">
            Explore handpicked collections of premium images for your next creative project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img 
                  src={collection.coverImage} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-bold text-xl mb-1">{collection.title}</h3>
                <p className="text-white/80 text-sm">{collection.imageCount} photos</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;