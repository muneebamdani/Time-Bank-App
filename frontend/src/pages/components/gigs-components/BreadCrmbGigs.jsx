import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import bannerImg from '../../../images/banner-bg-03.png'; // Update path as needed
import Slider from './Slider'
import Title from './Title'
import SideBar from './SideBar'
const ServicesBreadcrumb = () => {
  return (
    <>
    <div className="breadcrumb-bar breadcrumb-bar-info">
      <div className="breadcrumb-img">
        <div className="breadcrumb-left">
          <img src={bannerImg} alt="img" />
        </div>
      </div>

      <Container>
        <Row>
          <Col md={12}>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="index.html">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Services</Breadcrumb.Item>
                <Breadcrumb.Item active>Programming & Tech</Breadcrumb.Item>
              </Breadcrumb>
            </nav>

            <div className="slide-title-wrap">
              <Row className="align-items-center">
                <Col md={8}>
                  <div className="slider-title">
                    <h2>
                      Browse Listing & More{' '}
                      <span className="text-primary">“ 900 Services ”</span>
                    </h2>
                  </div>
                </Col>
                <Col md={4} className="text-md-end">
                  <div className="owl-nav service-nav nav-control nav-top"></div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Slider />
    </div>
    <Title />
    <SideBar />
    </>

  );
};

export default ServicesBreadcrumb;
