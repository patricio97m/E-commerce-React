import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import UserLogin from "../UserLogin/UserLogin";
import { useState } from "react";
import {getFirestore, collection, addDoc, query, where, getDocs} from "firebase/firestore";

const formBase = {
  user: "",
  password: "",
  name: "",
  surname: "",
  email: "",
  cellphone: "",
};

const UserRegister = ({ showModal, setShowModal }) => {
  const [showModal2, setShowModal2] = useState(false);
  const [form, setForm] = useState(formBase);
  const handleClose = () => setShowModal(false);
  const [showUserError, setShowUserError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  
  const handleUser = () => {
    handleClose();
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const UserCollection = collection(db, "users");

    // Verificar si el email o usuario ya existe en la base de datos
    const emailQuery = query(UserCollection, where("email", "==", form.email));
    const userQuery = query(UserCollection, where("user", "==", form.user));

    Promise.all([getDocs(emailQuery), getDocs(userQuery)]).then(
      ([emailSnapshot, userSnapshot]) => {
        if (!emailSnapshot.empty) {
          //Si el mail se encuentra en la base de datos, se muestra un mensaje
          setShowEmailError(true);
          setShowUserError(false);
        } else if (!userSnapshot.empty) {
          //Si el usuario se encuentra en la base de datos, se muestra un mensaje
          setShowUserError(true);
          setShowEmailError(false);
        } else {
          // Agregar el nuevo usuario a la base de datos si no hay coincidencias
          addDoc(UserCollection, form).then((snapshot) => {
            setForm(formBase);
            alert("¡Usuario registrado con éxito!");
            handleUser();
          });
        }
      }
    );
  };

  const inputChangeHandler = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrarse</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitHandler}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un usuario"
                name="user"
                id="user"
                value={form.user}
                onChange={inputChangeHandler}
                required
              />
              {showUserError ? (
                <Form.Text className="text-danger">
                  El usuario ingresado ya se encuentra registrado
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
                name="password"
                id="password"
                value={form.password}
                onChange={inputChangeHandler}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                name="name"
                id="name"
                value={form.name}
                onChange={inputChangeHandler}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido"
                name="surname"
                id="surname"
                value={form.surname}
                onChange={inputChangeHandler}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un Email"
                name="email"
                id="email"
                value={form.email}
                onChange={inputChangeHandler}
                required
              />
              {showEmailError ? (
                <Form.Text className="text-danger">
                  El Email ingresado ya se encuentra registrado
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ingrese un teléfono"
                name="cellphone"
                id="cellphone"
                value={form.cellphone}
                onChange={inputChangeHandler}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleUser}>
              Volver
            </Button>
            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Modal.Footer>
        </Form>
        <UserLogin showModal={showModal2} setShowModal={setShowModal2} />
      </Modal>
    </>
  );
};

export default UserRegister;
