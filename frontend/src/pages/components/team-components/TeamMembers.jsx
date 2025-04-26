import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import feather from 'feather-icons';
useEffect(() => {
  feather.replace();
}, []);

const TeamSection = () => {
  const teamMembers = [
    // ... (keep your existing teamMembers array)
  ];

  const options = {
    items: 4,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 }
    }
  };

  return (
    <section className="team-section py-5">
      <Container>
        <Row>
          <Col lg={12}>
            <OwlCarousel options={options}>
              {teamMembers.map(member => (
                <div className="team-grid" key={member.id}>
                  <div className="team-img position-relative mb-3">
                    <div className="team-overlay-img overflow-hidden">
                      <img src={member.img} className="img-fluid" alt="Team" />
                    </div>
                    <div className="team-view-btn position-absolute bottom-0 start-50 translate-middle-x mb-3">
                      <Button variant="primary" href="team-details.html">View Detail</Button>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <div className="team-title mb-3">
                      <h4 className="mb-1">
                        <a href="team-details.html" className="text-decoration-none">{member.name}</a>
                      </h4>
                      <p className="text-muted mb-0">{member.position}</p>
                    </div>
                    <div className="team-social-links d-flex justify-content-center">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="feather-facebook hi-icon"></i>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="feather-twitter hi-icon"></i>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <i className="feather-linkedin hi-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;