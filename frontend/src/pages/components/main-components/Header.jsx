import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink
import logo from "../../../images/TimeBankLogo.png";

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" className="sticky-top bg-white shadow-sm">
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
            <Nav.Link as={NavLink} to="/" exact activeClassName="text-primary">Home</Nav.Link>
            <NavDropdown title="Gigs" id="gigs-dropdown">
              <NavDropdown.Item as={NavLink} to="/all-gigs" activeClassName="text-primary">All Gigs</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/gigs/categories" activeClassName="text-primary">Categories</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/gigs/add-gigs" activeClassName="text-primary">Add Gigs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/about" activeClassName="text-primary">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/" activeClassName="text-primary">Our Team</Nav.Link>
            <NavDropdown title="User Dashboard" id="dashboard-dropdown">
              <NavDropdown.Item as={NavLink} to="/dashboard/profile" activeClassName="text-primary">Profile</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/dashboard/settings" activeClassName="text-primary">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex gap-2">
            <Nav.Link as={NavLink} to="/sign-in" activeClassName="text-primary">
              <Button variant="outline-warning">Sign In</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sign-up" activeClassName="text-primary">
              <Button variant="primary">Get Started</Button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
