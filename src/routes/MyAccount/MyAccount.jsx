import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import UserLogin2 from "../../Components/UserLogin2/UserLogin2";
import userPlaceholder from '../../Components/img/user-placeholder.png'

const MyAccount = () => {
  const { user, isLogged, sessionClose } = useContext(UserContext);
  const [showModal, setShowModal] = useState(true);
  let navigate = useNavigate();

  const closeSession = () =>{
    sessionClose();
    navigate(`/`)
    alert("Sesión cerrada con éxito, volviendo a la Home...")
  }

  if (isLogged) {
    return (
      <main className="bg-dark pt-3 background">
        <div className="text-center">
          <h1 className="bg-light text-uppercase d-inline px-3 ">Mi cuenta</h1>
        </div>
        <div className="container mt-4 background2 rounded p-4">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <img
              src= {userPlaceholder}
              alt="Imagen de usuario"
              className="rounded-circle me-3"
            />
            <h2 className="text-light">{user.name} {user.surname}</h2>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">Teléfono:</span> {user.cellphone}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Email:</span> {user.email}
            </li>
          </ul>
          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={closeSession}>Cerrar sesión</Button>
            <Button>Modificar datos</Button>
          </div>
        </div>
      </main>
    );
  } else {
    return <UserLogin2 showModal={showModal} setShowModal={setShowModal} />;
  }
};

export default MyAccount;
