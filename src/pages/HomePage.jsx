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
      image: "https://www.brillare.co.in/cdn/shop/files/AGE-REVIVAL-SERUM-MIST-1_0168a9d9-6ac4-440e-84b0-80b7af79497b.jpg?v=1752589060&width=1780"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Yoga Instructor",
      text: "Prana Essence has completely transformed my daily routine. The Ashwagandha blend gives me sustained energy without the crash. I've never felt more aligned and focused.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 2,
      name: "Rohan Desai",
      role: "Wellness Coach",
      text: "Finding authentically sourced Ayurvedic supplements is rare. The transparency and quality from Prana Essence are unmatched. My clients love the Triphala detox.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 3,
      name: "Anita Mehra",
      role: "Holistic Therapist",
      text: "The Kumkumadi Tailam is a miracle in a bottle. Within two weeks, my skin's texture improved drastically. I appreciate the true cold-press extraction it uses.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150"
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
                <img src="https://plus.unsplash.com/premium_photo-1723928419895-525187cc1be1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXl1cnZlZGljJTIwcHJvZHVjdHN8ZW58MHwxfDB8fHww" alt="Ingredients" />
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
            <h2 className="section-title">Our Most Loved Rituals</h2>
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

      {/* Testimonials Section */}
      <section className="testimonials-section" style={{ padding: '120px 0', background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label" style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '15px' }}>
              Real Voices, Real Balance
            </span>
            <h2 className="section-title">Discover How Prana Essence Has Transformed Lives.</h2>
          </div>
          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card" style={{ background: '#f5f7f5', padding: '40px', borderRadius: '30px', position: 'relative' }}>
                <div style={{ display: 'flex', color: 'var(--secondary)', marginBottom: '20px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p style={{ fontSize: '1.05rem', color: 'var(--text)', marginBottom: '30px', fontStyle: 'italic', lineHeight: '1.7' }}>
                  "{testimonial.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={testimonial.image} alt={testimonial.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '2px', color: 'var(--primary)' }}>{testimonial.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{testimonial.role}</span>
                  </div>
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
