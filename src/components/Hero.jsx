import { ArrowRight, ShieldCheck, Truck, Award, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Shapes & Patterns */}
      <div className="hero-decorations">
        <div className="organic-shape shape-1"></div>
        <div className="organic-shape shape-2"></div>
        <div className="dot-pattern pattern-1"></div>
        <div className="dot-pattern pattern-2"></div>
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Left: Text Content */}
          <div className="hero-text">
            <div className="premium-badge">
              <Leaf size={16} /> 100% Natural &amp; Organic
            </div>

            <h1 className="hero-title" style={{ color: 'var(--primary-medium)' }}>
              Restore Your{' '}
              <span style={{
                color: 'var(--primary-highlight)',
                WebkitTextStroke: '1px var(--primary-medium)',
              }}>Natural Balance</span>{' '}
              Discover True{' '}
              <span style={{
                color: 'var(--primary-highlight)',
                WebkitTextStroke: '1px var(--primary-medium)',
              }}>Ayurvedic Wellness</span>
            </h1>

            <p className="hero-description">
              Trusted by 10,000+ customers across India. Discover the power of Ayurveda with our
              curated collection of natural and organic supplements.
            </p>

            <div className="hero-cta-group">
              <Link to="/shop" className="btn btn-primary btn-pill">
                Shop Natural Products <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-outline btn-pill">
                Explore Ayurveda
              </Link>
            </div>

            <div className="hero-trust-indicators">
              <div className="trust-item">
                <div className="trust-icon"><ShieldCheck size={20} /></div>
                <div className="trust-info">
                  <strong>AYUSH Certified</strong>
                  <span>Trusted &amp; Certified</span>
                </div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-icon"><Truck size={20} /></div>
                <div className="trust-info">
                  <strong>Free Shipping</strong>
                  <span>On All Orders</span>
                </div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-icon"><Award size={20} /></div>
                <div className="trust-info">
                  <strong>100% Organic</strong>
                  <span>Pure &amp; Natural</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual">
            <div className="hero-main-img">
              <img
                src="/hero-products.png"
                alt="Ayurvedic Premium Collection"
              />
            </div>
          </div>
        </div>

        {/* Proof Bar — now inside container, normal flow */}
        <div className="hero-proof-bar-inline">
          <div className="proof-content">
            <div className="quote-wrap">
              <div className="quote-icon"><Leaf size={16} /></div>
              <p>Ayurveda is the science of life. Embrace nature.{' '}
                <span className="text-primary">Embrace wellness.</span>
              </p>
            </div>

            <div className="customer-social">
              <div className="avatar-group">
                <img src="https://i.pravatar.cc/100?u=1" alt="User" />
                <img src="https://i.pravatar.cc/100?u=2" alt="User" />
                <img src="https://i.pravatar.cc/100?u=3" alt="User" />
              </div>
              <div className="rating-info">
                <strong>10,000+ Happy Customers</strong>
                <div className="stars">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
