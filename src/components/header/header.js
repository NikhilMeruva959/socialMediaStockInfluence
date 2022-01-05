import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">TweetInfluencer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/getStarted">Get Started</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/description">All Stocks</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link eventKey={2} href="/">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
