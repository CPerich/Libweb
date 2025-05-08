import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageGrid from './components/ImageGrid';
import ImageDetail from './components/ImageDetail';
import CategoryFilter from './components/CategoryFilter';
import Collections from './components/Collections';
import Footer from './components/Footer';
import { Image } from './types';
import { mockImages, mockCollections, categories } from './data/mockData';

function App() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [filteredImages, setFilteredImages] = useState<Image[]>(mockImages);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    if (categoryId === 'all') {
      setFilteredImages(mockImages);
    } else {
      setFilteredImages(mockImages.filter(image => image.category === categoryId));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Category Filter Section */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Images</h2>
            <CategoryFilter 
              categories={categories} 
              onCategoryChange={handleCategoryChange} 
            />
          </div>
        </div>

        {/* Image Grid */}
        <ImageGrid 
          images={filteredImages} 
          onImageClick={handleImageClick} 
        />

        {/* Collections Section */}
        <Collections collections={mockCollections} />

        {/* Image Detail Modal */}
        {selectedImage && (
          <ImageDetail 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;