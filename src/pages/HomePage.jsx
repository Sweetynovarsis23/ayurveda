import React from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <main className="fade-in">
      <Hero />
      
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" alt="Natural Ingredients" />
            </div>
            <div className="about-text">
              <h2>The Essence of Ayurveda</h2>
              <p>Ayurveda is more than just a healing system; it's a way of life that emphasizes balance between body, mind, and spirit. Our products are formulated using principles that have been refined over thousands of years.</p>
              <div className="features">
                <div className="feature-item">
                  <span className="feature-dot"></span>
                  <div>
                    <h4>Ethically Sourced</h4>
                    <p>We work directly with local farmers across India.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-dot"></span>
                  <div>
                    <h4>Zero Waste Packaging</h4>
                    <p>All our containers are recyclable or compostable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
