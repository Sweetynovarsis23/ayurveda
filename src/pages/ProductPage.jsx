import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { 
  ShoppingCart, ArrowLeft, Star, ChevronDown, ChevronUp, 
  Package, ShieldCheck, Truck, ThumbsUp, MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('description');
  const [openFaq, setOpenFaq] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showSticky, setShowSticky] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const { addToCart } = useCart();

  // Mock gallery for demo
  const gallery = product ? [
    product.image,
    "https://images.unsplash.com/photo-1611073103930-9b3ba897da2a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=800"
  ] : [];

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Link to="/" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '30px', color: 'var(--text-muted)' }}>
          <ArrowLeft size={18} /> Back to Shop
        </Link>
        
        <div className="product-detail-grid">
          <div className="product-gallery-container">
            <div className="main-image">
              <img src={selectedImage} alt={product.name} className="fade-in" key={selectedImage} />
            </div>
            <div className="gallery-thumbs">
              {gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`thumb-item ${selectedImage === img ? 'active' : ''}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="product-details">
            <div className="badge-group">
              <span className="product-badge" style={{ background: '#EBF2EB' }}>Best Seller</span>
              {product.tags.map(tag => (
                <span key={tag} className="product-badge">{tag}</span>
              ))}
            </div>
            
            <h1 className="section-title" style={{ marginBottom: '15px' }}>{product.name}</h1>
            
            <div className="rating-summary" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div className="stars" style={{ display: 'flex', color: 'var(--secondary)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="review-count" style={{ fontWeight: '600' }}>{product.rating} ({product.reviewCount} Reviews)</span>
              <span style={{ color: 'var(--secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={16} /> 98% Recommend this
              </span>
            </div>

            <p className="product-price" style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '20px' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </p>
            
            <p className="product-desc" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.7' }}>
              {product.description}
            </p>
            
            <div className="purchase-actions" style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
              <div className="qty-picker">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '10px 20px' }}>-</button>
                <span style={{ minWidth: '40px', textAlign: 'center', fontWeight: 'bold' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '10px 20px' }}>+</button>
              </div>
              <button 
                className="btn btn-primary add-to-cart" 
                style={{ flex: 1, padding: '16px' }}
                onClick={() => addToCart(product, quantity)}
              >
                <ShoppingCart size={20} style={{ marginRight: '10px' }} /> Add to Cart
              </button>
            </div>

            <div className="trust-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px', background: '#f9f9f9', borderRadius: '15px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Truck size={20} color="var(--primary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>Free Express Shipping</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <ShieldCheck size={20} color="var(--primary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>Ayush Certified Pure</span>
              </div>
            </div>

            <div className="product-tabs">
              <div className="tab-nav" style={{ borderBottom: '1px solid var(--border)', display: 'flex', gap: '30px', marginBottom: '20px' }}>
                {['description', 'ingredients', 'shipping'].map(tab => (
                  <button 
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                    style={{ padding: '10px 0', borderBottom: activeTab === tab ? '2px solid var(--primary)' : 'none', fontWeight: '600', textTransform: 'capitalize' }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="tab-content" style={{ minHeight: '150px' }}>
                {activeTab === 'description' && (
                  <div className="tab-panel">
                    <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>{product.fullDescription}</p>
                    <div className="product-benefits" style={{marginTop: '25px'}}>
                      <h4 style={{ marginBottom: '15px' }}>Why you'll love it:</h4>
                      <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem'}}>
                            <CheckCircle2 size={16} color="var(--secondary)" /> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {activeTab === 'ingredients' && (
                  <div className="tab-panel">
                    <div className="ingredients-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {product.ingredients.map(ing => (
                        <div key={ing} className="ingredient-card" style={{ padding: '10px 20px', background: '#f5f7f5', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '500' }}>{ing}</div>
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
                          <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>On all orders over ₹499. Arrives in 3-5 business days.</p>
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

        {/* FAQs Section */}
        <div className="faq-section" style={{ marginTop: '100px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Common Questions</h2>
          <div className="faq-container" style={{maxWidth: '800px', margin: '40px auto 0'}}>
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="faq-item" style={{ borderBottom: '1px solid var(--border)' }}>
                <button 
                  className="faq-trigger" 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '20px 0', fontSize: '1.1rem', fontWeight: '600' }}
                >
                  {faq.q}
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && <div className="faq-content fade-in" style={{ paddingBottom: '20px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-container" style={{ background: '#f9f9f9', padding: '120px 0', marginTop: '120px' }}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px'}}>
            <div>
              <span className="section-label">COMMUNITY VOICES</span>
              <h2 style={{ fontSize: '3rem', marginTop: '10px' }}>Customer Reviews</h2>
              <div className="rating-summary" style={{marginTop: '15px', display: 'flex', alignItems: 'center', gap: '15px'}}>
                <div className="stars" style={{ color: 'var(--secondary)', display: 'flex' }}>
                   {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <strong style={{ fontSize: '1.5rem' }}>{product.rating}</strong>
                <span style={{ color: 'var(--text-muted)' }}>based on {product.reviewCount} reviews</span>
              </div>
            </div>
            <button className="btn btn-outline" style={{ padding: '14px 28px' }}>Write a Review</button>
          </div>

          <div className="review-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            {product.reviews.map((review, idx) => (
              <div key={idx} className="review-card" style={{ background: 'white', padding: '40px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div className="review-meta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div>
                    <span className="review-author" style={{ fontWeight: '700', fontSize: '1.1rem' }}>{review.user}</span>
                    <span className="verified-badge"><CheckCircle2 size={12} /> Verified Purchase</span>
                    <div className="stars" style={{ display: 'flex', color: 'var(--secondary)', marginTop: '5px' }}>
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                  <span className="review-date" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{review.date}</span>
                </div>
                <p style={{ color: 'var(--text)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px' }}>"{review.text}"</p>
                <div className="review-actions">
                  <button className="help-btn"><ThumbsUp size={16} /> Helpful ({Math.floor(Math.random() * 10) + 1})</button>
                  <button className="help-btn"><MessageSquare size={16} /> Reply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products container" style={{ padding: '120px 0' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>Pairs Well With</h2>
          <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Sticky Bottom Bar */}
      <div className={`sticky-cta-bar ${showSticky ? 'visible' : ''}`}>
        <div className="container">
          <div className="sticky-cta-content">
            <div className="sticky-product-info">
              <img src={product.image} alt={product.name} />
              <div>
                <h4>{product.name}</h4>
                <div style={{ display: 'flex', color: 'var(--secondary)' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />)}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>₹{product.price.toLocaleString('en-IN')}</span>
              <button 
                className="btn btn-primary" 
                style={{ padding: '12px 30px' }}
                onClick={() => addToCart(product, quantity)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
