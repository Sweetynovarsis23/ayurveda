import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Truck, CreditCard, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    // In a real app, this would trigger the payment gateway
  };

  if (isOrdered) {
    return (
      <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
        <CheckCircle2 size={80} color="var(--primary)" style={{ marginBottom: '30px' }} />
        <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Order Placed!</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px' }}>
          Thank you for choosing Ayurveda. Your wellness journey begins now.
        </p>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page fade-in" style={{ paddingTop: '120px', paddingBottom: '100px', background: '#FDFBF7' }}>
      <div className="container">
        <Link to="/shop" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', color: 'var(--text-muted)' }}>
          <ArrowLeft size={18} /> Back to Shop
        </Link>

        <h1 className="section-title" style={{ marginBottom: '60px' }}>Complete Your Order</h1>

        <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px' }}>
          <div className="checkout-form-container">
            <form onSubmit={handleSubmit} style={{ background: 'white', padding: '50px', borderRadius: '30px', boxShadow: '0 15px 40px rgba(0,0,0,0.05)' }}>
              <div className="form-section" style={{ marginBottom: '40px' }}>
                <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Truck size={22} color="var(--primary)" /> Shipping Information
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="text" placeholder="First Name" required className="checkout-input" />
                  <input type="text" placeholder="Last Name" required className="checkout-input" />
                  <input type="email" placeholder="Email Address" required className="checkout-input" style={{ gridColumn: 'span 2' }} />
                  <input type="text" placeholder="Shipping Address" required className="checkout-input" style={{ gridColumn: 'span 2' }} />
                  <input type="text" placeholder="City" required className="checkout-input" />
                  <input type="text" placeholder="Pincode" required className="checkout-input" />
                </div>
              </div>

              <div className="form-section" style={{ marginBottom: '40px' }}>
                <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CreditCard size={22} color="var(--primary)" /> Payment Method
                </h3>
                <div className="payment-options" style={{ display: 'flex', gap: '20px' }}>
                  <label className="payment-label active">
                    <input type="radio" name="payment" defaultChecked />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className="payment-label">
                    <input type="radio" name="payment" disabled />
                    <span>Card / UPI (Coming Soon)</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }}>
                Place Order ₹{cartTotal.toLocaleString('en-IN')}
              </button>
            </form>
          </div>

          <div className="order-summary-sidebar">
            <div style={{ background: '#f5f7f5', padding: '40px', borderRadius: '30px', position: 'sticky', top: '120px' }}>
              <h3 style={{ marginBottom: '25px' }}>Order Summary</h3>
              <div className="summary-items" style={{ marginBottom: '25px' }}>
                {cartItems.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <span style={{ fontSize: '0.95rem' }}>{item.name} x {item.quantity}</span>
                    <span style={{ fontWeight: '600' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #e0e6e0', paddingTop: '20px', marginBottom: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span>Shipping</span>
                  <span style={{ color: 'var(--primary)', fontWeight: '600' }}>FREE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', fontWeight: '800', marginTop: '10px' }}>
                  <span>Total</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <div className="trust-badges" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <ShieldCheck size={16} color="var(--primary)" /> Secure 256-bit SSL encrypted checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .checkout-input {
          width: 100%;
          padding: 15px 20px;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        .checkout-input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .payment-label {
          flex: 1;
          padding: 20px;
          border: 2px solid #e0e0e0;
          border-radius: 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
        }
        .payment-label.active {
          border-color: var(--primary);
          background: #f5f7f5;
        }
        .payment-label input { display: none; }
      `}</style>
    </div>
  );
};

export default CheckoutPage;
