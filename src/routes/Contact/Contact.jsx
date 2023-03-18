import { useState, useRef, useContext, useEffect } from "react";
import {Container, Form, Button, Row, Col, Overlay, Tooltip} from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import SocialLinks from "../../Components/SocialLinks/SocialLinks";
import { UserContext } from "../../context/UserContext";

const queryForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const target = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const { user, isLogged } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: isLogged ? `${user.name} ${user.surname}` : "",
    email: isLogged ? user.email : "",
    subject: "",
    message: "",
  });

  useEffect(() => { //Rellena automáticamente con tu usuario si estas loggeado
    setFormData(prevFormData => ({
      ...prevFormData,
      name: isLogged ? `${user.name} ${user.surname}` : "",
      email: isLogged ? user.email : ""
    }));
  }, [user, isLogged]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const queryCollection = collection(db, "contactQueries");

    addDoc(queryCollection, formData).then((snapshot) => {
      setFormData(queryForm);
    });
    setShowMessage(true); //Estado que habilita el overlay para indicar que se ha enviado la consulta
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <main className="bg-dark pt-3 background">
      <div className="text-center">
        <h1 className="bg-light text-uppercase d-inline px-3">Contacto</h1>
      </div>
      <Container className="mb-3 background2 rounded">
        <Row>
          <Col md={6} sm={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mt-3">
                <Form.Label className="text-light">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label className="text-light">
                  Correo electrónico
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label className="text-light">Asunto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el asunto"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label className="text-light">Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ingresa tu mensaje"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button
                variant="secondary"
                type="submit"
                className="mt-3 mb-3"
                ref={target}
              >
                Enviar
              </Button>
              <Overlay
                target={target.current}
                show={showMessage}
                placement="top"
              >
                {(props) => <Tooltip {...props}>¡Consulta enviada!</Tooltip>}
              </Overlay>
            </Form>
          </Col>
          <Col md={6} sm={12}>
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Contact;
