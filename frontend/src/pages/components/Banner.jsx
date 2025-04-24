import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="banner-bg-imgs">
        <img src="images/banner-bg-01.png" className="banner-bg-one" alt="img" />
        <img src="images/banner-bg-02.png" className="banner-bg-two" alt="img" />
        <img src="images/banner-bg-03.png" className="banner-bg-three" alt="img" />
        <img src="images/banner-bg-04.png" className="banner-bg-four" alt="img" />
      </div>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="banner-content aos" data-aos="fade-up">
              <div className="banner-head">
                <h1>Discover Top Talent & Sell Your Skills by the Hour.</h1>
                <p>
                  Thousands are using Time Bank to monetize their skills and bring ideas to
                  life—one hour at a time.
                </p>
              </div>
              <div className="banner-form">
                <Form action="service.html">
                  <div className="banner-search-list d-flex flex-wrap gap-3">
                    <Form.Group className="input-block" controlId="categorySelect">
                      <Form.Label>Category</Form.Label>
                      <Form.Select>
                        <option>Select</option>
                        <option>Digital Marketing</option>
                        <option>Writing</option>
                        <option>Social Media</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="input-block" controlId="locationInput">
                      <Form.Label>Location</Form.Label>
                      <div className="input-locaion d-flex align-items-center">
                        <Form.Control type="text" placeholder="Miami, USA" />
                        <img src="images/map-pin-heart.svg" alt="Icon" className="ms-2" />
                      </div>
                    </Form.Group>

                    <Form.Group className="input-block border-0" controlId="keywordInput">
                      <Form.Label>Keyword</Form.Label>
                      <Form.Control type="text" placeholder="Need Graphic Designer" />
                    </Form.Group>
                  </div>

                  <div className="input-block-btn mt-3">
                    <Button variant="primary" type="submit">
                      <i className="fas fa-magnifying-glass"></i> Search
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="banner-img">
              <div className="banner-img-right">
                <img src="images/banner-img.png" className="img-fluid" alt="img" />
              </div>
              <img src="images/banner-small-bg-01.svg" className="banner-small-bg-one" alt="img" />
              <img src="images/banner-small-bg-02.png" className="banner-small-bg-two" alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
