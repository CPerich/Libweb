import React from 'react';
import { X, Heart, Download, Share2, Tag } from 'lucide-react';
import { Image } from '../types';

interface ImageDetailProps {
  image: Image | null;
  onClose: () => void;
}

const ImageDetail: React.FC<ImageDetailProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 md:p-8">
      <div 
        className="relative bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="md:w-2/3 h-full bg-gray-100 flex items-center justify-center">
          <div className="relative h-[40vh] md:h-[80vh] w-full">
            <img 
              src={image.url} 
              alt={image.title || 'Image'} 
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/3 p-6 overflow-y-auto flex flex-col h-full">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{image.title || 'Untitled Image'}</h2>
            
            {image.photographer && (
              <p className="text-gray-600 mb-6">
                by <span className="font-medium text-gray-800 hover:text-indigo-600 cursor-pointer">{image.photographer}</span>
              </p>
            )}
            
            {image.description && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            )}

            {/* Image Info */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Dimensions</p>
                  <p className="font-medium">{image.dimensions || '1920 x 1080'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Size</p>
                  <p className="font-medium">{image.size || '2.4 MB'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Format</p>
                  <p className="font-medium">{(image.url?.split('.').pop() || 'JPG').toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Resolution</p>
                  <p className="font-medium">300 DPI</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {(image.tags || ['photography', 'art', 'nature', 'digital']).map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col space-y-3">
            <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center justify-center">
              <Download size={20} className="mr-2" />
              Download
            </button>
            <div className="flex space-x-3">
              <button className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors flex items-center justify-center">
                <Heart size={20} className="mr-2" />
                Save
              </button>
              <button className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors flex items-center justify-center">
                <Share2 size={20} className="mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;