import "./categories.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Categories = () => {
  return (
    <>
      <Nav.Link aria-current="page" href="#Home">
        Home
      </Nav.Link>
      <NavDropdown title="Categorías" id="basic-nav-dropdown">
        <NavDropdown.Item href="#Smartphones">Smartphones</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#Notebooks">Notebooks</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#Perfumes">Perfumes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#Skincare">Cuidado de la piel</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#Comestibles">Comestibles</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#Contacto">Contacto</Nav.Link>
      <Nav.Link href="#MiCuenta">Mi cuenta</Nav.Link>
    </>
  );
};

export default Categories;
