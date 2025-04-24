import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel'; // Owl Carousel in React
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-owl-carousel/dist/owl.carousel.css'; // Ensure styles are loaded

const MainWrapper = () => {
  
  // Mouse Cursor Effect
  useEffect(() => {
    const outerCursor = document.querySelector('.cursor-outer');
    const innerCursor = document.querySelector('.cursor-inner');
    
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      
      outerCursor.style.transform = `translate(${mouseX - 15}px, ${mouseY - 15}px)`;
      innerCursor.style.transform = `translate(${mouseX - 7}px, ${mouseY - 7}px)`;
    });

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div className="main-wrapper">
      
      {/* Mouse Cursor */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
      
      {/* Top Scroll */}
      <div className="back-to-top">
        <a href="#top" className="back-to-top-icon d-flex align-items-center justify-content-center">
          <img src="images/arrow-badge-up.svg" alt="arrow" />
        </a>
      </div>

      {/* Owl Carousel */}
      <OwlCarousel className="review-slider" items={1} loop nav>
        {/* Your review cards will go here */}
        <div className="review-card">
          <h4>Review Title</h4>
          <p>Review content...</p>
        </div>
        {/* Repeat for other reviews */}
      </OwlCarousel>
      
      {/* Select2 Replacement */}
      <Select 
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      />

      {/* Your custom JS functionality */}
      <script src="js/rocket-loader.min.js" data-cf-settings="eff9867b8191634b0c7435fc-|49" defer=""></script>
    </div>
  );
};

export default MainWrapper;
