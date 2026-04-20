import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import { 
  ArrowRight, Star, Tag, ShoppingCart, Leaf, Recycle, 
  MapPin, FlaskConical, Award, ShieldCheck 
} from 'lucide-react';

const HomePage = () => {
  const [stats, setStats] = useState({ organic: 0, noFillers: 0, pure: 0 });
  const philosophyRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const rituals = [
    {
      id: 101,
      name: "Golden Nectar Face Oil",
      desc: "24k Gold & Saffron",
      price: 84.00,
      rating: 4.9,
      reviews: 156,
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 102,
      name: "Ojas Building Blend",
      desc: "Ashwagandha & Shatavari",
      price: 42.00,
      rating: 4.8,
      reviews: 92,
      bestSeller: false,
      image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/ayurvedic/z/h/u/capsule-and-oil-1-ojas-earth-original-imahkbvghh9y7wvz.jpeg?q=90"
    },
    {
      id: 103,
      name: "Morning Detox Kit",
      desc: "Copper Scraper & Pulling Oil",
      price: 38.00,
      rating: 4.7,
      reviews: 64,
      bestSeller: true,
      image: "https://m.media-amazon.com/images/I/71rCEoCCCAL._SL1080_.jpg"
    },
    {
      id: 104,
      name: "Prana Mist",
      desc: "Holy Basil & Eucalyptus",
      price: 29.00,
      rating: 4.6,
      reviews: 48,
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop"
    }
  ];



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          
          let frame = 0;
          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            setStats({
              organic: Math.floor(progress * 100),
              noFillers: 0, // Text based
              pure: 100 // Visual target
            });
            if (frame === totalFrames) clearInterval(timer);
          }, frameDuration);
        }
      },
      { threshold: 0.5 }
    );

    if (philosophyRef.current) observer.observe(philosophyRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <main className="fade-in">
      <Hero />

      {/* About Section */}
      <section id="about" className="about-section" style={{ background: 'white', padding: '140px 0' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-visuals-dual">
              <div className="about-img-main">
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" alt="Ingredients" />
              </div>
              <div className="about-img-founder">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Founder" />
                <div className="founder-label">
                   <strong>Dr. Priya Sharma</strong>
                   <span>Founder & Practitioner</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <span className="section-label">THE ESSENCE</span>
              <h2>True Wellness is Harmony.</h2>
              <p>Founded by Dr. Priya Sharma, a 3rd generation Ayurvedic practitioner, AyurVeda bridges modern living with Vedic wisdom. We believe beauty is a reflection of internal balance.</p>
              
              <div className="about-features-list" style={{ marginTop: '40px' }}>
                <div className="about-feature-item">
                  <div className="feature-icon-box"><Leaf size={24} /></div>
                  <div>
                    <h4>Ethically Sourced</h4>
                    <p>Working directly with local farmers across India to ensure purity at the source.</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="feature-icon-box"><Recycle size={24} /></div>
                  <div>
                    <h4>Zero Waste Commitment</h4>
                    <p>All glass containers are 100% recyclable. We minimize plastic at every stage.</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="feature-icon-box"><MapPin size={24} /></div>
                  <div>
                    <h4>Ingredient Origin</h4>
                    <p>Each harvest is traceable back to the specific field it was grown in.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section" ref={philosophyRef} style={{ position: 'relative' }}>
        <div className="mandala-pattern"></div>
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-text">
              <span className="section-label" style={{ color: 'var(--secondary)' }}>OUR PHILOSOPHY</span>
              <h2>Tradition meets the Laboratory.</h2>
              <p>We don't just replicate ancient recipes; we validate them. Prana Essence bridges the gap between 5,000 years of Ayurvedic tradition and rigorous modern dermatological science.</p>
              <p>Every herb is ethically wild-harvested at its peak potency, then extracted using cold-press technology.</p>
              <div className="philosophy-stats">
                <div className="stat-item">
                  <h3>{stats.organic}%</h3>
                  <p>India Organic (NPOP)</p>
                </div>
                <div className="stat-item">
                  <h3>No</h3>
                  <p>Synthetic Fillers</p>
                </div>
                <div className="stat-item">
                  <h3>Pure</h3>
                  <p>Ethnobotany</p>
                </div>
              </div>
            </div>
            <div className="philosophy-visuals">
              <div className="phil-img-lg parallax-img">
                <img src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Laboratory" />
              </div>
              <div className="phil-img-sm">
                <img src="https://plus.unsplash.com/premium_photo-1726754732177-caad42dd49bb?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Herbs" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Rituals Section */}
      <section className="rituals-section" style={{ background: '#f5f7f5', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem' }}>Our Most Loved Rituals</h2>
            <p className="rituals-subtitle" style={{ maxWidth: '700px', margin: '20px auto 0', fontSize: '1.1rem' }}>
              Discover the essentials that have become the cornerstone of daily practice for our 10,000+ member community.
            </p>
          </div>
          <div className="rituals-grid">
            {rituals.map(ritual => (
              <div key={ritual.id} className="ritual-item" style={{ position: 'relative' }}>
                {ritual.bestSeller && (
                  <div className="best-seller-pill">Best Seller</div>
                )}
                <div className="ritual-image-container">
                  <img src={ritual.image} alt={ritual.name} />
                  <div className="ritual-quick-btn">
                     <ShoppingCart size={18} /> Quick Add
                  </div>
                </div>
                <div className="ritual-info" style={{ marginTop: '20px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(ritual.rating) ? "var(--secondary)" : "none"} color="var(--secondary)" />
                    ))}
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>({ritual.reviews})</span>
                  </div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{ritual.name}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '10px' }}>{ritual.desc}</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.4rem', color: 'var(--primary)' }}>${ritual.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




    </main>
  );
};

export default HomePage;
