import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content fade-in">
        <div className="hero-text">
          <span className="badge">100% Natural & Organic</span>
          <h1>Ancient Wisdom for Modern Wellness</h1>
          <p>Discover the power of Ayurveda with our curated collection of organic supplements, oils, and teas. Restore balance to your body and mind.</p>
          <div className="hero-btns">
            <Link to="/shop" className="btn btn-primary">
              Shop Now <ArrowRight size={20} style={{marginLeft: '8px'}} />
            </Link>
            <a href="#about" className="btn btn-outline" style={{marginLeft: '15px'}}>Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-blob">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200" 
              alt="Ayurvedic herbs and oils" 
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
