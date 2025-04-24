import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const reviews = [
  {
    title: 'Great Work',
    description: '“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn\'t on our original designs.”',
    rating: 5,
    userName: 'Gloria Weber',
    userLocation: 'United States',
    userImage: 'images/user-17.jpg'
  },
  {
    title: 'Seamless Experience',
    description: '“Communication with the service provider was smooth and efficient through the platform\'s messaging system. The built-in tools for file sharing ensuring a productive experience.”',
    rating: 5,
    userName: 'John Cramer',
    userLocation: 'United States',
    userImage: 'images/user-18.jpg'
  },
  {
    title: 'Great Work',
    description: '“This service marketplace is a game-changer, delivering a polished and professional platform that exceeded our expectations and it saved us time and resources, allowing for a quick launch.”',
    rating: 5,
    userName: 'Mary Marquez',
    userLocation: 'United States',
    userImage: 'images/user-19.jpg'
  },
  {
    title: 'Great Work',
    description: '“This service marketplace is a game-changer, delivering a polished and professional platform that exceeded our expectations and it saved us time and resources, allowing for a quick launch.”',
    rating: 5,
    userName: 'Joanne Parise',
    userLocation: 'United States',
    userImage: 'images/user-16.jpg'
  }
];

const ClientReviewSection = () => {
  return (
    <section className="client-review-sec">
      <Container>
        <div className="about-us-header">
          <h2>What Our Clients Say</h2>
          <p>Hear What Our Clients Have to Say. Explore the Testimonials that Showcase 
            Our Commitment to Excellence
          </p>
        </div>
        <Row>
          <Col md={12}>
            <Carousel className="review-slider" interval={3000} controls={false} indicators={false}>
              {reviews.map((review, index) => (
                <Carousel.Item key={index}>
                  <div className="review-card">
                    <span className="quotation-icon">
                      <img src="images/quotation-icon.svg" alt="img" />
                    </span>
                    <h4>{review.title}</h4>
                    <p>{review.description}</p>
                    <div className="star-rate">
                      <span>
                        {[...Array(review.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star filled"></i>
                        ))}
                      </span>
                    </div>
                    <div className="review-user">
                      <a href="javascript:void(0);">
                        <img src={review.userImage} alt="user" />
                      </a>
                      <h6>
                        <a href="javascript:void(0);">{review.userName}</a>
                        <span>{review.userLocation}</span>
                      </h6>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientReviewSection;
