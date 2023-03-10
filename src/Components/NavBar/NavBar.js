import "./navBar.css";
import logo from "../img/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../NavLinks/NavLinks";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar2 from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky-top">
      <Navbar2 bg="light" expand="lg">
        <Container fluid>
          <Navbar2.Brand>
            <Link to="/">
              <img src={logo} alt="logo" className="imgLogo img-fluid" />
            </Link>
          </Navbar2.Brand>
          <Navbar2.Toggle aria-controls="basic-navbar-nav" />
          <Navbar2.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Categories />
            </Nav>
            <Nav className="me-auto">
              <SearchBar />
            </Nav>
            <Nav className="ms-auto mt-3 me-3">
              <Link to="/cart" className="text-decoration-none">
                <div className="cart-container">
                  <CartWidget />
                </div>
              </Link>
            </Nav>
          </Navbar2.Collapse>
        </Container>
      </Navbar2>
    </header>
  );
};

export default Navbar;
