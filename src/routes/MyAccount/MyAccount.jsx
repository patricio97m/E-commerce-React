import { Button, Table } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import UserLogin2 from "../../Components/UserLogin2/UserLogin2";

const MyAccount = () => {
  const { user, isLogged } = useContext(UserContext);
  const [showModal, setShowModal] = useState(true);

  if (isLogged) {
    return (
      <main className="bg-dark pt-3 background">
        <div className="text-center">
          <h1 className="bg-light text-uppercase d-inline px-3">Mi cuenta</h1>
        </div>
        <div className="container mt-4 background2 rounded">
          <div class="container">
            <Table striped hover variant="light">
              <tbody>
                <tr>
                  <td>Nombre: {user.name}</td>
                  <td id="nombre"></td>
                </tr>
                <tr>
                  <td>Apellido: {user.surname}</td>
                  <td id="apellido"></td>
                </tr>
                <tr>
                  <td>Teléfono: {user.cellphone}</td>
                  <td id="telefono"></td>
                </tr>
                <tr>
                  <td>Email: {user.email}</td>
                  <td id="email"></td>
                </tr>
              </tbody>
            </Table>
            <Button>Modificar datos</Button>
          </div>
        </div>
      </main>
    );
  }
  else{
    return <UserLogin2 showModal={showModal} setShowModal={setShowModal} />;
  }
};

export default MyAccount;
