import React from 'react';
import { Col, Card, Badge } from 'react-bootstrap';
import { FaStar, FaHeart, FaMapPin } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';

const ServiceItem = () => {
  return (
    <Col xl={12} md={10}>
      <Card className="gigs-grid">
        <div className="gigs-img">
          <Carousel>
            <Carousel.Item>
              <a href="service-details.html">
                <img src="images/gigs-08.jpg" className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src="images/gigs-06.jpg" className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src="images/gigs-07.jpg" className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
          </Carousel>
          <div className="fav-selection">
            <a href="javascript:void(0);" className="fav-icon">
              <FaHeart />
            </a>
          </div>
        </div>
        <Card.Body className="gigs-content">
          <div className="gigs-info">
            <a href="service-details.html" className="badge bg-primary-light">
              Promoted Listing
            </a>
            <div className="star-rate">
              <span>
                <FaStar /> 3.5
              </span>
            </div>
          </div>
          <div className="gigs-title">
            <h3>
              <a href="service-details.html">
                I will do collaborating with influencers to promote products and services.
              </a>
            </h3>
          </div>
          <ul className="gigs-user-info">
            <li className="gigs-user">
              <img src="images/user-08.jpg" alt="img" />
              <p>By Pricilla</p>
            </li>
            <li className="gigs-loc">
              <p>
                <FaMapPin /> Bristol
              </p>
            </li>
          </ul>
          <div className="gigs-card-footer">
            <h5>$960</h5>
            <span className="badge">Delivery in 1 day</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceItem;
