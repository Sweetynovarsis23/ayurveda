import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import {
  ShoppingCart, ArrowLeft, Star, ChevronDown, ChevronUp,
  Package, ShieldCheck, Truck, ThumbsUp, MessageSquare,
  CheckCircle2, Leaf
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
    const handleScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Home</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-page fade-in">
      <div className="container">

        {/* Back Link */}
        <Link to="/shop" className="pd-back-link">
          <ArrowLeft size={18} /> Back to Shop
        </Link>

        {/* Main Product Grid */}
        <div className="pd-grid">

          {/* Gallery Column */}
          <div className="pd-gallery">
            <div className="pd-main-image">
              <img src={selectedImage} alt={product.name} className="fade-in" key={selectedImage} />
            </div>
            <div className="pd-thumbs">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className={`pd-thumb ${selectedImage === img ? 'active' : ''}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div className="pd-details">
            {/* Badges */}
            <div className="pd-badges">
              <span className="product-badge pd-badge-primary">Best Seller</span>
              {product.tags.map(tag => (
                <span key={tag} className="product-badge">{tag}</span>
              ))}
            </div>

            {/* Title */}
            <h1 className="pd-title">{product.name}</h1>

            {/* Rating */}
            <div className="pd-rating">
              <div className="pd-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span className="pd-rating-count">{product.rating} ({product.reviewCount} Reviews)</span>
              <span className="pd-recommend">
                <CheckCircle2 size={14} /> 98% Recommend
              </span>
            </div>

            {/* Price */}
            <p className="pd-price">₹{product.price.toLocaleString('en-IN')}</p>

            {/* Description */}
            <p className="pd-desc">{product.description}</p>

            {/* Purchase Actions */}
            <div className="pd-actions">
              <div className="qty-picker">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button
                className="btn btn-primary pd-add-btn"
                onClick={() => addToCart(product, quantity)}
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
            </div>

            {/* Trust Grid */}
            <div className="pd-trust-grid">
              <div className="pd-trust-item">
                <Truck size={20} color="var(--primary)" />
                <span>Free Express Shipping</span>
              </div>
              <div className="pd-trust-item">
                <ShieldCheck size={20} color="var(--primary)" />
                <span>AYUSH Certified Pure</span>
              </div>
              <div className="pd-trust-item">
                <Package size={20} color="var(--primary)" />
                <span>30-Day Returns</span>
              </div>
              <div className="pd-trust-item">
                <Leaf size={20} color="var(--primary)" />
                <span>100% Organic</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="pd-tabs">
              <div className="pd-tab-nav">
                {['description', 'ingredients', 'shipping'].map(tab => (
                  <button
                    key={tab}
                    className={`pd-tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="pd-tab-content">
                {activeTab === 'description' && (
                  <div>
                    <p className="pd-tab-text">{product.fullDescription}</p>
                    <h4 className="pd-benefits-title">Why you'll love it:</h4>
                    <ul className="pd-benefits-list">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="pd-benefit-item">
                          <CheckCircle2 size={15} color="var(--primary)" /> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === 'ingredients' && (
                  <div className="pd-ingredients">
                    {product.ingredients.map(ing => (
                      <span key={ing} className="pd-ingredient">{ing}</span>
                    ))}
                  </div>
                )}
                {activeTab === 'shipping' && (
                  <div className="pd-shipping-info">
                    <div className="pd-ship-item">
                      <Truck size={22} color="var(--primary)" />
                      <div>
                        <strong>Free Shipping</strong>
                        <p>On all orders over ₹499. Arrives in 3–5 business days.</p>
                      </div>
                    </div>
                    <div className="pd-ship-item">
                      <Package size={22} color="var(--primary)" />
                      <div>
                        <strong>Easy Returns</strong>
                        <p>30-day money back guarantee. No questions asked.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="pd-faqs">
            <h2 className="pd-section-heading">Common Questions</h2>
            <div className="pd-faq-list">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button
                    className="faq-trigger"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    {faq.q}
                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {openFaq === idx && (
                    <div className="faq-content fade-in">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reviews */}
      <div className="pd-reviews-section">
        <div className="container">
          <div className="pd-reviews-header">
            <div>
              <span className="section-label">COMMUNITY VOICES</span>
              <h2 className="pd-section-heading" style={{ textAlign: 'left', marginTop: '10px' }}>Customer Reviews</h2>
              <div className="pd-overall-rating">
                <div className="pd-stars-lg">
                  {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="currentColor" />)}
                </div>
                <strong className="pd-rating-big">{product.rating}</strong>
                <span className="pd-rating-total">based on {product.reviewCount} reviews</span>
              </div>
            </div>
            <button className="btn btn-outline">Write a Review</button>
          </div>

          <div className="pd-reviews-grid">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="pd-review-card">
                <div className="pd-review-top">
                  <div>
                    <span className="pd-reviewer">{review.user}</span>
                    <span className="verified-badge"><CheckCircle2 size={11} /> Verified</span>
                    <div className="pd-stars-sm">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                    </div>
                  </div>
                  <span className="pd-review-date">{review.date}</span>
                </div>
                <p className="pd-review-text">"{review.text}"</p>
                <div className="pd-review-actions">
                  <button className="help-btn"><ThumbsUp size={14} /> Helpful</button>
                  <button className="help-btn"><MessageSquare size={14} /> Reply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pd-related container">
          <h2 className="pd-section-heading">Pairs Well With</h2>
          <div className="pd-related-grid">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Sticky CTA */}
      <div className={`sticky-cta-bar ${showSticky ? 'visible' : ''}`}>
        <div className="container">
          <div className="sticky-cta-content">
            <div className="sticky-product-info">
              <img src={product.image} alt={product.name} />
              <div>
                <h4>{product.name}</h4>
                <div style={{ display: 'flex', color: 'var(--primary)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                  ))}
                </div>
              </div>
            </div>
            <div className="sticky-cta-right">
              <span className="sticky-price">₹{product.price.toLocaleString('en-IN')}</span>
              <button
                className="btn btn-primary"
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
