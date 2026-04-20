import { ArrowRight, ShieldCheck, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Floating Elements */}
      <div className="hero-background-elements">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="leaf-element" 
            style={{
              left: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <span className="badge">100% Natural & Organic</span>
          <h1>
            <span>Ancient</span> <span>Wisdom</span> <span>Wellness</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '30px' }}>
            Trusted by 10,000+ customers across India. Discover the power of Ayurveda with our curated collection of organic supplements.
          </p>
          <div className="hero-btns">
            <Link to="/shop" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Shop Now <ArrowRight size={20} className="arrow-icon" style={{marginLeft: '10px'}} />
            </Link>
            <a href="#about" className="btn btn-outline" style={{marginLeft: '15px', padding: '16px 32px'}}>Explore Story</a>
          </div>

          <div className="trust-badges-hero">
            <div className="trust-badge-item">
              <ShieldCheck size={20} />
              <span>Ayush Certified</span>
            </div>
            <div className="trust-badge-item">
              <Truck size={20} />
              <span>Free Shipping</span>
            </div>
            <div className="trust-badge-item">
              <Award size={20} />
              <span>India Organic</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-blob">
            <img 
              src="https://plus.unsplash.com/premium_photo-1694412516047-c9ef201f9564?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Ayurvedic herbs and oils" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
