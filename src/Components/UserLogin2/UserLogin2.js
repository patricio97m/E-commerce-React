import Button from "react-bootstrap/Button";
import UserRegister from "../UserRegister/UserRegister";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";

const formBase = {
  user: "",
  password: "",
};

const UserLogin2 = ({ showModal, setShowModal }) => {
  const [showModal2, setShowModal2] = useState(false);
  const [showUserError, setShowUserError] = useState(false);
  const handleClose = () => setShowModal(false);
  const [form, setForm] = useState(formBase);
  const { setAccount, logUser } = useContext(UserContext);
  
  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const UserCollection = collection(db, "users");
    
    const userQuery = query(UserCollection, where("user", "==", form.user), where("password", "==", form.password));
    getDocs(userQuery).then((userSnapshot)=>{
      if (!userSnapshot.empty) {
        alert("Logueado con éxito");
        const userNew = userSnapshot.docs[0].data();
        
        setAccount({
          user: userNew.user,
          password: userNew.password,
          name: userNew.name,
          surname: userNew.surname,
          email: userNew.email,
          cellphone: userNew.cellphone
        })
        logUser();
        handleClose();
      } else {
        setShowUserError(true);
      }
    })

    
    
  };

  const inputChangeHandler = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegister = () => {
    setShowModal2(true);
  };

  return (
    <>
      <Modal show={showModal} >
        <Modal.Header>
          <Modal.Title>Ingresa a tu cuenta</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitHandler}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su usuario"
                name="user"
                id="user"
                value={form.user}
                onChange={inputChangeHandler}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                name="password"
                id="password"
                value={form.password}
                onChange={inputChangeHandler}
                required
              />
              {showUserError ? (
                <Form.Text className="text-danger">
                  Usuario o contraseña incorrectos
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleRegister}>
              Registarse
            </Button>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <UserRegister showModal={showModal2} setShowModal={setShowModal2} />
    </>
  );
};

export default UserLogin2;