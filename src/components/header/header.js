import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => (
  // Using react-bootstrap for navbar
  // expand="lg" allows for collapsing navbar at lower breakpoints
  // bg=navbar color || variant=dark is navbar color text styling
  // collapseOnSelect makes the Navbar collapse automatically when the user selects an item
  <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Stockfluence</Navbar.Brand>
      {/* aria-controls property identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set. */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/getStarted">Get Started</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/description">Explore</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
