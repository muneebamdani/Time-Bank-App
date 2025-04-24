import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FiCheckSquare } from 'react-icons/fi'; // Using feather icons via react-icons

const StartSellerSection = () => {
  return (
    <section className="start-seller-sec py-5">
      <Container>
        <Row>
          <Col lg={6} className="d-flex">
            <div className="seller-inner-img w-100">
              <Image 
                src="/images/about-us-04.jpg" 
                fluid 
                alt="Seller showcase" 
                className="rounded"
              />
            </div>
          </Col>
          
          <Col lg={6} className="d-flex">
            <div className="seller-info-content w-100 ps-lg-4">
              <div className="seller-head mb-4">
                <h3 className="fw-bold mb-3">Start As Seller</h3>
                <p className="lead">Embark on a Journey of Entrepreneurship, Launch Your Seller Profile Today.</p>
                <p className="seller-para text-muted">
                  Showcase your expertise on a platform designed for success. Create your 
                  seller profile, highlight your skills, and set your services apart. 
                  Benefit from our robust marketplace that connects you with a global audience.
                </p>
              </div>
              
              <div className="seller-feature-list d-flex flex-column flex-lg-row w-100 gap-4">
                <div className="sellers-list">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <span className="text-primary me-2"><FiCheckSquare /></span>
                      Set your prices
                    </li>
                    <li className="mb-2">
                      <span className="text-primary me-2"><FiCheckSquare /></span>
                      Flexible schedule
                    </li>
                    <li className="mb-2">
                      <span className="text-primary me-2"><FiCheckSquare /></span>
                      Build your reputation
                    </li>
                    <li className="mb-3">
                      <span className="text-primary me-2"><FiCheckSquare /></span>
                      Provide 24/7 support
                    </li>
                  </ul>
                  <Button 
                    variant="primary" 
                    href="/sign-in" 
                    className="w-auto px-4 py-2"
                  >
                    Become A Seller
                  </Button>
                </div>
                
                <div className="seller-small-img w-100">
                  <Image 
                    src="/images/about-us-05.jpg" 
                    fluid 
                    alt="Seller benefits" 
                    className="rounded"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StartSellerSection;