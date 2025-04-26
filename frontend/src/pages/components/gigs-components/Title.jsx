import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Search } from 'react-feather'; // optional, or replace with your own icon

const PageHeader = () => {
  return (
    <div className="page-content">
      <Container>
        <div className="title-section">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="title-header">
                <h3>Programming & Tech</h3>
                <p>View all your Services for your Business</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="title-filter d-flex flex-column flex-md-row justify-content-md-end gap-3">
                <div className="form-group search-group position-relative">
                  <span className="search-icon position-absolute" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
                    <Search size={16} />
                  </span>
                  <Form.Control
                    type="text"
                    placeholder="Search Category"
                    className="ps-5"
                  />
                </div>
                <div className="search-filter-selected">
                  <Form.Group>
                    <span className="sort-text me-2">Sort By</span>
                    <Form.Select>
                      <option>New Arrivals</option>
                      <option>Featured</option>
                      <option>Price: High to Low</option>
                      <option>Price: Low to High</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
