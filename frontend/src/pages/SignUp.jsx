import React, { useState } from 'react';
import { 
  Container,
  Row,
  Col,
  Form,
  Button,
  Carousel,
  Image,
  Card
} from 'react-bootstrap';
import { 
  PersonFill, 
  EnvelopeFill, 
  EyeSlashFill 
} from 'react-bootstrap-icons';

const AuthPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container fluid className="main-wrapper gx-0">
      <Row className="gx-0">
        {/* Banner Content - Left Side */}
        <Col lg={6} className="px-0">
          <div className="authentication-wrapper position-relative">
            <div className="authentication-content">
              <Carousel indicators={false} controls={false} interval={3000}>
                <Carousel.Item>
                  <div className="login-slider text-center p-5">
                    <Image src="/images/login-card-01.svg" fluid className="mb-4" />
                    <h2>Looking to Buy a service?</h2>
                    <p>Browse Listing & More 900 Services</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="login-slider text-center p-5">
                    <Image src="/images/login-card-02.svg" fluid className="mb-4" />
                    <h2>Looking to Sell a service?</h2>
                    <p>Browse Listing & More 900 Services</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="login-bg position-absolute w-100 h-100">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <Image 
                  key={num}
                  src={`/images/shape-0${num}.png`} 
                  alt="decoration" 
                  className={`shape-0${num} position-absolute`}
                />
              ))}
            </div>
          </div>
        </Col>

        {/* Register Content - Right Side */}
        <Col lg={6} className="px-0">
          <div className="login-wrapper d-flex align-items-center justify-content-center h-100">
            <div className="login-content w-75">
              <Form onSubmit={handleSubmit}>
                <Card className="border-0 shadow-none">
                  <Card.Body className="p-4">
                    <div className="text-center mb-4">
                      <Image src="/images/TimeBankLogo.png" alt="Time Bank Logo" fluid className="mb-3" />
                    </div>

                    <div className="text-center mb-4">
                      <h3>Hi, Welcome!</h3>
                      <p className="text-muted">Register to get access to Time Bank</p>
                    </div>

                    <Form.Group className="mb-3 form-floating">
                      <Form.Control
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Form.Label htmlFor="name">
                        <PersonFill className="me-2" />
                        Name *
                      </Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-floating">
                      <Form.Control
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Form.Label htmlFor="email">
                        <EnvelopeFill className="me-2" />
                        Email
                      </Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-floating">
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Button
                          variant="link"
                          className="position-absolute end-0 top-0 text-decoration-none"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <EyeSlashFill />
                        </Button>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3 form-floating">
                      <div className="position-relative">
                        <Form.Control
                          type={showConfirmPassword ? "text" : "password"}
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                        <Button
                          variant="link"
                          className="position-absolute end-0 top-0 text-decoration-none"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          <EyeSlashFill />
                        </Button>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        label={
                          <>
                            By login you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                          </>
                        }
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mb-3">
                      Sign Up
                    </Button>

                    <div className="position-relative my-4">
                      <hr />
                      <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted">
                        or sign up with
                      </span>
                    </div>

                    <div className="d-flex justify-content-center gap-3 mb-4">
                      <Button variant="outline-light" className="d-flex align-items-center">
                        <Image src="/images/google-icon.svg" width={20} className="me-2" />
                        Google
                      </Button>
                      <Button variant="outline-light" className="d-flex align-items-center">
                        <Image src="/images/fb.svg" width={20} className="me-2" />
                        Facebook
                      </Button>
                    </div>

                    <div className="text-center">
                      <p className="mb-0">
                        Already have an account? <a href="/sign-in">Sign In</a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;