import { Button, InputGroup, Form, Overlay, Tooltip } from "react-bootstrap";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./myAccount.css";
import UserLogin from "../../Components/UserLogin/UserLogin";
import OrdersTable from "../../Components/OrdersTable/OrdersTable";
import userPlaceholder from "../../Components/img/user-placeholder.png";
import {getFirestore, collection, query, where, getDocs, doc, updateDoc} from "firebase/firestore";

const formBase = {
  name: "",
  surname: "",
  email: "",
  user: "",
  password: "",
  cellphone: "",
};

const MyAccount = () => {
  const { user, isLogged, sessionClose, setUserID } = useContext(UserContext);
  const target = useRef(null);
  const [showModal, setShowModal] = useState(true);
  const [newUser, setNewUser] = useState(formBase);
  const [editable, setEditable] = useState(false);
  const [buttonText, setButtonText] = useState("Modificar datos");
  const [showMessage, setShowMessage] = useState(false);
  let navigate = useNavigate();

  const inputChangeHandler = (ev) => {
    const { name, value } = ev.target;
    setNewUser({ ...newUser, [name]: value });
  };

  useEffect(() => {
    const db = getFirestore();
    if (user && user.user) {
      const userQuery = query(
        collection(db, "users"),
        where("user", "==", user.user)
      );
      getDocs(userQuery).then((snapshot) => {
        if (!snapshot.empty) {
          setUserID(snapshot.docs[0].id);
          setNewUser({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() });
        }
      });
    }
  }, [user, setUserID]);

  const editData = (ev) => {
    ev.preventDefault();
    setEditable((prevEditable) => !prevEditable);
    if (!editable) {
      setButtonText("Guardar cambios");
    } else {
      setButtonText("Modificar datos");
      const db = getFirestore();
      const userRef = doc(db, "users", newUser.id);
      updateDoc(userRef, newUser);
      setShowMessage(true); //Estado que habilita el overlay para indicar que se ha agregado un producto
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };

  const closeSession = () => {
    sessionClose();
    navigate(`/`);
    alert("Sesión cerrada con éxito, volviendo a la Home...");
  };

  if (isLogged) {
    return (
      <main className="bg-dark pt-3 background">
        <div className="text-center">
          <h1 className="bg-light text-uppercase d-inline px-3 ">Mi cuenta</h1>
        </div>
        <div className="container mt-4 background2 rounded p-4">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <img
              src={userPlaceholder}
              alt="Imagen de usuario"
              className="rounded-circle me-3"
            />
            <h2 className="text-light">
              {newUser.name} {newUser.surname}
            </h2>
          </div>

          <Form onSubmit={editData}>
            <InputGroup>
              <InputGroup.Text className="inputSize noBorder1">
                Usuario
              </InputGroup.Text>
              <Form.Control
                className="noBorder1"
                type="text"
                aria-label="text"
                value={newUser.user}
                name="user"
                readOnly //El usuario no es editable ya que quedarían órdenes huerfanas
                disabled
              />
            </InputGroup>

            <InputGroup>
              <InputGroup.Text className="inputSize noBorder">
                Contraseña
              </InputGroup.Text>
              <Form.Control
                className="noBorder"
                placeholder="Ingrese una contraseña nueva"
                type="password"
                aria-label="password"
                value={newUser.password}
                required
                name="password"
                onChange={inputChangeHandler}
                readOnly={!editable ? true : false}
                disabled={!editable ? true : false}
              />
            </InputGroup>

            <InputGroup>
              <InputGroup.Text className="inputSize noBorder">
                Teléfono
              </InputGroup.Text>
              <Form.Control
                className="noBorder"
                placeholder="Ingrese un teléfono"
                type="tel"
                aria-label="teléfono"
                value={newUser.cellphone}
                required
                name="cellphone"
                onChange={inputChangeHandler}
                readOnly={!editable ? true : false}
                disabled={!editable ? true : false}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text className="inputSize noBorder2">
                Email
              </InputGroup.Text>
              <Form.Control
                className="noBorder2"
                placeholder="Ingrese un Email"
                type="email"
                aria-label="email"
                value={newUser.email}
                name="email"
                required
                onChange={inputChangeHandler}
                readOnly={!editable ? true : false}
                disabled={!editable ? true : false}
              />
            </InputGroup>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={closeSession}>
                Cerrar sesión
              </Button>
              <Button type="submit" ref={target}>
                {buttonText}
              </Button>
              <Overlay
                target={target.current}
                show={showMessage}
                placement="top"
              >
                {(props) => (
                  <Tooltip {...props}>¡Actualizado con éxito!</Tooltip>
                )}
              </Overlay>
            </div>
          </Form>
          <div className="text-center mt-3">
            <h1 className="bg-light d-inline px-3 ">Órdenes anteriores</h1>
          </div>
          <OrdersTable />
        </div>
      </main>
    );
  } else {
    return <UserLogin showModal={showModal} setShowModal={setShowModal} noCloseControls={true} />;
  }
};

export default MyAccount;
