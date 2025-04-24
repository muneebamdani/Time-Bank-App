import React, { useState } from 'react';
import { 
  Container,
  Row,
  Col,
  Form,
  Button,
  Carousel,
  Image,
  Card,
  FormCheck
} from 'react-bootstrap';
import { Envelope, Eye, EyeSlash } from 'react-bootstrap-icons';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showMandatoryInfo, setShowMandatoryInfo] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setShowMandatoryInfo(true);
      return;
    }
    // Handle login logic here
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

        {/* Login Content - Right Side */}
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
                      <h3>Hi, Welcome Back!</h3>
                      <p className="text-muted">Fill the fields to get into your account</p>
                    </div>

                    <Form.Group className="mb-3 form-floating">
                      <div className="position-relative">
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
                          <Envelope className="me-2" />
                          Email
                        </Form.Label>
                      </div>
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
                          {showPassword ? <EyeSlash /> : <Eye />}
                        </Button>
                      </div>
                    </Form.Group>

                    <Row className="mb-3">
                      <Col md={6}>
                        <FormCheck
                          type="checkbox"
                          id="rememberMe"
                          name="rememberMe"
                          label="Remember Me"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col md={6} className="text-md-end">
                        <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
                      </Col>
                    </Row>

                    {showMandatoryInfo && (
                      <div className="alert alert-warning mb-3">
                        <i className="bi bi-exclamation-triangle me-2"></i>
                        Fill all the fields to submit
                      </div>
                    )}

                    <Button variant="primary" type="submit" className="w-100 mb-3">
                      Sign In
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
                        Don't have an account? <a href="/sign-up">Sign Up</a>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Form>
            </div>
          </div>
        </Col>
      </Row>

      {/* Mouse Cursor */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </Container>
  );
};

export default LoginPage;