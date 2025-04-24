import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div className="back-to-top">
        <a
          className="back-to-top-icon align-items-center justify-content-center d-flex"
          onClick={scrollToTop}
          href="#top"
        >
          <img src="images/arrow-badge-up.svg" alt="Back to Top" />
        </a>
      </div>
    )
  );
};

export default BackToTop;
