import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "../../../node_modules/react-bootstrap/esm/Navbar";
import Nav from "../../../node_modules/react-bootstrap/esm/Nav";
import Container from "../../../node_modules/react-bootstrap/esm/Container";
import NavDropdown from "../../../node_modules/react-bootstrap/esm/NavDropdown";

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">TweetInfluencer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#getStarted">Get Started</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Stocks" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Tesla</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">GameStop</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">AMC</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Clover Health
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Robinhood</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link eventKey={2} href="#home">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
