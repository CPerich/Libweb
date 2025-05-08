import React, { useState } from 'react';
import { Heart, Download } from 'lucide-react';
import { Image } from '../types';

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would trigger the download
    console.log('Download image:', image.id);
  };

  return (
    <div 
      className="overflow-hidden rounded-lg shadow-sm group cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(image)}
    >
      <div className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/2] bg-gray-100 overflow-hidden">
        <img 
          src={image.url} 
          alt={image.title || 'Image'} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay with actions */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}
        >
          <div className="w-full p-4 flex justify-between items-center text-white">
            <div className="flex flex-col">
              <p className="font-medium truncate">{image.title || 'Untitled'}</p>
              {image.photographer && (
                <p className="text-sm opacity-90">by {image.photographer}</p>
              )}
            </div>
            <div className="flex space-x-3">
              <button 
                className={`p-2 rounded-full ${isLiked ? 'bg-red-500' : 'bg-black/30 hover:bg-black/50'} transition-colors`}
                onClick={handleLike}
                aria-label="Like"
              >
                <Heart size={18} className={isLiked ? 'fill-white' : ''} />
              </button>
              <button 
                className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                onClick={handleDownload}
                aria-label="Download"
              >
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;