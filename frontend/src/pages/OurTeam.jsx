import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // React Icons for social media icons
import Header from './components/main-components/Header';

const TeamSection = () => {
  return (
    <>
    <Header/>
    <section className="team-section">
      <Container>
        <div className="team-details">
          <Row className="align-items-center">
            <Col lg={4} md={12}>
              <div className="team-details-img">
                <img src="images/team-img.jpg" className="img-fluid" alt="Team" />
                <div className="team-social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="hi-icon" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hi-icon" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="hi-icon" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={8} md={12}>
              <div className="team-details-heading">
                <h2>Hanzala Ahmed</h2>
                <h5>Chief Financial Officer</h5>
                <p>
                  Bryant brings a wealth of financial expertise and strategic insight. As our Chief Financial Officer, he plays a pivotal role in steering the financial direction of our marketplace, ensuring not only its fiscal health but also its ability to innovate and grow in a competitive landscape.
                </p>
              </div>
              <div className="team-details-list">
                <ul>
                  <li><span>Responsibility: </span>Chief Financial Officer</li>
                  <li><span>Experience: </span>5 Years</li>
                  <li><span>Phone: </span>+1 62904 71093</li>
                  <li>
                    <span>Email: </span>
                    <a href="mailto:[email protected]">[email protected]</a>
                  </li>
                  <li><span>Address: </span>44 Jerry Toth Drive, Nuiqsut, AK 99789</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    <div className="team-personal-info">
      <Card>
        <Card.Body>
          <Card.Title>Personal Info</Card.Title>
          <Card.Text>
            Away from the world of numbers and financial strategies, Bryant enjoys hiking and photography. He believes in a balanced lifestyle and often says that his best ideas come when he is on a long walk, practicing yoga, or spending time with family in trekking.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default TeamSection;
