import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

const BreadcrumbBar = () => {
  return (
    <div className="breadcrumb-bar">
      <div className="breadcrumb-img">
        <div className="breadcrumb-left">
          <img src="images/banner-bg-03.png" alt="img" />
        </div>
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="index.html">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Team</Breadcrumb.Item>
              </Breadcrumb>
            </nav>
            <h2 className="breadcrumb-title">Team</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbBar;
