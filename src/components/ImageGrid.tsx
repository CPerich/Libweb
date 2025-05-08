import React from 'react';
import ImageCard from './ImageCard';
import { Image } from '../types';

interface ImageGridProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((image) => (
          <ImageCard 
            key={image.id} 
            image={image} 
            onClick={onImageClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;