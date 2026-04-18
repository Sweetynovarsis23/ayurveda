import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingCart, Check, ArrowLeft, Star, ChevronDown, ChevronUp, Package, ShieldCheck, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('description');
  const [openFaq, setOpenFaq] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container" style={{padding: '150px 0', textAlign: 'center'}}>
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary" style={{marginTop: '20px'}}>Back to Home</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-page fade-in">
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} /> Back to Shop
        </Link>
        
        <div className="product-detail-grid">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          
          <div className="product-details">
            <div className="badge-group">
              {product.tags.map(tag => (
                <span key={tag} className="product-badge">{tag}</span>
              ))}
            </div>
            
            <h1>{product.name}</h1>
            
            <div className="rating-summary">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="review-count">({product.reviewCount} Reviews)</span>
            </div>

            <p className="product-price">${product.price.toFixed(2)}</p>
            
            <p className="product-desc">{product.description}</p>
            
            <div className="purchase-actions">
              <div className="qty-picker">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="btn btn-primary add-to-cart">
                <ShoppingCart size={20} /> Add to Cart
              </button>
            </div>

            <div className="product-tabs">
              <div className="tab-nav">
                <button 
                  className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ingredients')}
                >
                  Ingredients
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
                  onClick={() => setActiveTab('shipping')}
                >
                  Shipping
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'description' && (
                  <div className="tab-panel">
                    <p>{product.fullDescription}</p>
                    <div className="product-benefits" style={{marginTop: '20px'}}>
                      <h4>Why you'll love it:</h4>
                      <ul style={{marginTop: '10px'}}>
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                            <ShieldCheck size={18} color="var(--secondary)" /> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {activeTab === 'ingredients' && (
                  <div className="tab-panel">
                    <div className="ingredients-grid">
                      {product.ingredients.map(ing => (
                        <div key={ing} className="ingredient-card">{ing}</div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'shipping' && (
                  <div className="tab-panel">
                    <div style={{display: 'flex', gap: '20px', flexDirection: 'column'}}>
                      <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                        <Truck size={24} color="var(--primary)" />
                        <div>
                          <strong>Free Shipping</strong>
                          <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>On all orders over $50. Arrives in 3-5 business days.</p>
                        </div>
                      </div>
                      <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                        <Package size={24} color="var(--primary)" />
                        <div>
                          <strong>Easy Returns</strong>
                          <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>30-day money back guarantee. No questions asked.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Common Questions</h2>
          <div className="faq-container" style={{marginTop: '30px'}}>
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button className="faq-trigger" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  {faq.q}
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && <div className="faq-content fade-in">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="reviews-container">
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <div>
              <h2>Customer Reviews</h2>
              <div className="rating-summary" style={{marginTop: '10px'}}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <strong>{product.rating} out of 5</strong>
              </div>
            </div>
            <button className="btn btn-outline">Write a Review</button>
          </div>

          <div className="review-grid">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="review-card">
                <div className="review-meta">
                  <span className="review-author">{review.user}</span>
                  <div className="stars">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p style={{fontStyle: 'italic', marginBottom: '10px'}}>{review.text}</p>
                <span className="review-date">{review.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products container">
          <h2>You May Also Like</h2>
          <div className="related-grid">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
