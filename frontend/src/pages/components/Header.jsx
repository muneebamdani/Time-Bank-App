import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import logo from "../../images/TimeBankLogo.png"

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm" style={{top:"stick"}}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="TimeBank Logo"
            height="30"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Gigs" id="gigs-dropdown">
              <NavDropdown.Item href="/gigs/design">Design</NavDropdown.Item>
              <NavDropdown.Item href="/gigs/tech">Tech</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/gigs/other">Other</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" className="text-primary">About Us</Nav.Link>
            <Nav.Link href="/team">Our Team</Nav.Link>
            <NavDropdown title="User Dashboard" id="dashboard-dropdown">
              <NavDropdown.Item href="/dashboard/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/dashboard/settings">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex gap-2">
          <Nav.Link href='/sign-in'><Button variant="outline-warning">Sign In</Button></Nav.Link>
            <Nav.Link href='/sign-up'><Button variant="primary">Get Started</Button></Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
