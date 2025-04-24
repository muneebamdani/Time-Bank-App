import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

// Data for categories
const categories = [
  { imgSrc: 'images/popular-category-01.svg', title: 'Digital Marketing', services: 100 },
  { imgSrc: 'images/popular-category-02.svg', title: 'Programming & Tech', services: 200 },
  { imgSrc: 'images/popular-category-03.svg', title: 'Writing Translation', services: 100 },
  { imgSrc: 'images/popular-category-04.svg', title: 'Photography', services: 150 },
  { imgSrc: 'images/popular-category-05.svg', title: 'Artificial Intelligence', services: 100 },
];

const PopularCategorySection = () => {
  return (
    <section className="popular-category-sec">
      <Container>
        <div className="about-us-header">
          <h2>Explore Popular Categories</h2>
          <p>From in-demand services to crowd favourites, find what suits your needs</p>
        </div>
        <Row>
          <Col md={12}>
            <Carousel className="popular-category-slider" interval={3000} controls={false} indicators={false}>
              {categories.map((category, index) => (
                <Carousel.Item key={index}>
                  <div className="slider-cards">
                    <div className="popular-cat-card">
                      <div className="category-icon">
                        <img src={category.imgSrc} alt={category.title} />
                      </div>
                      <h4>{category.title}</h4>
                      <span>{category.services} Services</span>
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

export default PopularCategorySection;
