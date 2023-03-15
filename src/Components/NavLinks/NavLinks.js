import "./navLinks.css";
import { useState, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UserContext } from "../../context/UserContext";
import UserLogin from "../UserLogin/UserLogin";
import { Link } from "react-router-dom";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const { isLogged } = useContext(UserContext);

  const login = () => {
    setShowModal(true);
  };

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
      {isLogged ? (
        <Nav.Link as={Link} to="/myaccount">Mi cuenta</Nav.Link>
      ):(
        <Nav.Link onClick={login}>Mi cuenta</Nav.Link>
      )}
      <UserLogin showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Categories;
