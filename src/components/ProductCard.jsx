import React from 'react';
import { Eye, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <Link to={`/product/${product.id}`} className="view-btn">
            <Eye size={20} />
          </Link>
          <button className="add-btn">
            <ShoppingCart size={20} />
          </button>
        </div>
        <span className="category-tag">{product.category}</span>
      </div>
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>

    </div>
  );
};

export default ProductCard;
