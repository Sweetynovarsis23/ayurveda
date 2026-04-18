import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Curated Collection</h2>
          <p>Hand-picked Ayurvedic essentials for your daily wellness journey.</p>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default FeaturedProducts;
