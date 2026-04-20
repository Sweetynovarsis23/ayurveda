import { Eye, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onQuickView }) => {
  const isLowStock = product.stock < 10;

  return (
    <div className="product-card">
      <div className="product-image">
        <div className={`stock-badge ${isLowStock ? 'stock-low' : ''}`}>
          <div className="stock-dot"></div>
          {isLowStock ? `Only ${product.stock} left` : 'In Stock'}
        </div>
        
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="view-btn" title="Quick View" onClick={onQuickView}>
            <Eye size={22} />
          </button>
          <button className="add-btn" title="Add to Cart">
            <ShoppingCart size={22} />
          </button>
        </div>
        <span className="category-tag">{product.category}</span>
      </div>
      
      <div className="product-info">
        <div className="card-rating">
          <Star size={14} fill="currentColor" />
          <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>{product.rating}</span>
          <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
