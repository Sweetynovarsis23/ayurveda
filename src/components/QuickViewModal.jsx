import React from 'react';
import { X, ShoppingCart, Star, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quickview-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="quickview-grid">
          <div className="quickview-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="quickview-details">
            <div className="badge-group">
              {product.tags?.slice(0, 2).map(tag => (
                <span key={tag} className="product-badge">{tag}</span>
              ))}
            </div>
            
            <h2>{product.name}</h2>
            
            <div className="rating-summary">
              <div className="stars" style={{ color: 'var(--secondary)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="review-count">({product.reviewCount} Reviews)</span>
            </div>

            <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
            
            <p className="quickview-desc">{product.description}</p>
            
            <div className="quickview-actions">
              <button className="btn btn-primary add-to-cart" onClick={() => addToCart(product)}>
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <Link to={`/product/${product.id}`} className="btn btn-outline" onClick={onClose}>
                View Full Details
              </Link>
            </div>

            <div className="quickview-benefits">
              {product.benefits?.slice(0, 2).map((benefit, idx) => (
                <div key={idx} className="benefit-item">
                  <ShieldCheck size={18} color="var(--primary)" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
