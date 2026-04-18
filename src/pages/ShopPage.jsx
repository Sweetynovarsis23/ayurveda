import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

const ShopPage = () => {
  return (
    <div className="shop-page fade-in" style={{ paddingTop: '80px' }}>
      <div className="container">
        {/* <header className="shop-header" style={{ padding: '60px 0 20px', textAlign: 'center' }}>
          <h1>Our Full Collection</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>
            Explore our range of premium Ayurvedic essentials for every wellness need.
          </p>
        </header> */}
      </div>
      <FeaturedProducts />
    </div>
  );
};

export default ShopPage;
