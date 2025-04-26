import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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
          <Col md={12} xs={12}>
            <Breadcrumb aria-label="breadcrumb" className="page-breadcrumb">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Team Details</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="breadcrumb-title">Team Details</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbBar;
