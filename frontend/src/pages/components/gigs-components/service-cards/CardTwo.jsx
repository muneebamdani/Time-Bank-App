import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { FaStar, FaHeart, FaMapPin, FaMeteor } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';

const ServiceList = () => {
  return (
    <Col xl={12} md={10}>
      <Card className="gigs-grid">
        <div className="gigs-img">
          <Carousel>
            <Carousel.Item>
              <a href="service-details.html">
                <img src="images/gigs-02.jpg" className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src="images/gigs-08.jpg" className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src="images/gigs-09.jpg" className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
          </Carousel>
          <div className="card-overlay-badge">
            <a href="service.html">
              <Badge variant="danger">
                <FaMeteor /> Hot
              </Badge>
            </a>
          </div>
          <div className="fav-selection">
            <a href="javascript:void(0);" className="fav-icon">
              <FaHeart />
            </a>
          </div>
        </div>
        <Card.Body className="gigs-content">
          <div className="gigs-info">
            <a href="service-details.html" className="badge bg-primary-light">
              Ecommerce-Seo
            </a>
            <div className="star-rate">
              <span>
                <FaStar /> 4.3
              </span>
            </div>
          </div>
          <div className="gigs-title">
            <h3>
              <a href="service-details.html">
                I will do professional lifestyle and product photography
              </a>
            </h3>
          </div>
          <ul className="gigs-user-info">
            <li className="gigs-user">
              <img src="images/user-02.jpg" alt="img" />
              <p>By Robert</p>
            </li>
            <li className="gigs-loc">
              <p>
                <FaMapPin /> London
              </p>
            </li>
          </ul>
          <div className="gigs-card-footer">
            <h5>$350</h5>
            <span className="badge">Delivery in 2 days</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceList;
