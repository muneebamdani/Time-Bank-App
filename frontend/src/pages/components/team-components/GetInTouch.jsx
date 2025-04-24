import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const TeamForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here (e.g. send to backend or show alert)
    console.log('Submitted:', formData);
  };

  return (
    <div className="team-form py-5">
      <Container>
        <div className="team-form-heading mb-4 text-center">
          <h3>Get in Touch</h3>
          <p>How can I help you? Please write down your query</p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default TeamForm;
