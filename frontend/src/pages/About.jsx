import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Header from "../pages/components/Header"

const AboutPage = () => {
  return (
    <>
    <Header/>
      <section className="about-us-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Row>
                <Col sm={6}>
                  <div className="about-inner-img">
                    <Image src="images/about-us-01.jpg" fluid alt="img" />
                  </div>
                </Col>
                <Col sm={6}>
                  <Row>
                    <Col sm={12}>
                      <div className="about-inner-img">
                        <Image src="images/about-us-02.jpg" fluid alt="img" />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="about-inner-img">
                        <Image src="images/about-us-03.jpg" fluid alt="img" />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <div className="about-us-info">
                <div className="about-us-head">
                  <h6>About Us</h6>
                  <h2>We Provide Best solutions For Your Business</h2>
                  <p>
                    Welcome to Time Bank, where innovation meets expertise. We are a dynamic and forward-thinking service marketplace...
                  </p>
                  <h5>Our Mission</h5>
                  <p>
                    At Time Bank, our mission is to empower individuals and businesses by facilitating easy access...
                  </p>
                </div>
                <div className="about-features d-flex">
                  <ul className="list-one">
                    <li><span><img src="images/target-arrow-icon.svg" alt="icon" /></span>Diverse Network of Professionals</li>
                    <li><span><img src="images/target-arrow-icon.svg" alt="icon" /></span>Trust and Transparency</li>
                  </ul>
                  <ul className="list-two">
                    <li><span><img src="images/target-arrow-icon.svg" alt="icon" /></span>User Friendly Platform</li>
                    <li><span><img src="images/target-arrow-icon.svg" alt="icon" /></span>Innovation In Technology</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

   
    </>
  );
};

export default AboutPage;
