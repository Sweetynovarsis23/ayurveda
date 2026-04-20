import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollUtilities = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Back to top visibility
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default ScrollUtilities;
