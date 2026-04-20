import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import QuickViewModal from './QuickViewModal';

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Curated Collection</h2>
          <p>Hand-picked Ayurvedic essentials for your daily wellness journey.</p>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={() => handleQuickView(product)}
            />
          ))}
        </div>
      </div>

      <QuickViewModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default FeaturedProducts;
