import "./navLinks.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <NavDropdown title="Categorías" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/categories/smartphones">
          Smartphones
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/categories/notebooks">
          Notebooks
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/categories/consolas">
          Consolas de videojuegos
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/categories/televisores">
          Televisores
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/categories/perifericos">
          Perifericos de PC
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#Contacto">Contacto</Nav.Link>
      <Nav.Link href="#MiCuenta">Mi cuenta</Nav.Link>
    </>
  );
};

export default Categories;
