import { Link } from 'react-router-dom';
import { Leaf, Camera, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo logo-white">
            <Leaf className="logo-icon" />
            <span>AyurVeda</span>
          </div>
          <p>Restoring balance and vitality through the ancient wisdom of nature. Our products are 100% organic and ethically sourced.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Camera size={20} /></a>
            <a href="#" aria-label="Twitter"><MessageCircle size={20} /></a>
            <a href="#" aria-label="Global"><Globe size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Organic Shop</Link></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Privacy</h4>
          <ul>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Join the Tribe</h4>
          <p>Get wellness tips and early access to new arrivals.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe Now</button>
          </form>
          <div className="payment-methods" style={{ marginTop: '24px', display: 'flex', gap: '12px', opacity: 0.6 }}>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', width: '100%' }}>Secure Payment via</span>
            <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
              <span style={{ fontWeight: '800', fontStyle: 'italic' }}>VISA</span>
              <span style={{ fontWeight: '800', fontStyle: 'italic' }}>MasterCard</span>
              <span style={{ fontWeight: '800', fontStyle: 'italic' }}>UPI</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p>&copy; {new Date().getFullYear()} AyurVeda Wellness. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Powered by NovarsisTech Pvt. Ltd.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
