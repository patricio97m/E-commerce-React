import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import SocialLinks from "../../Components/SocialLinks/SocialLinks";

const queryForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const queryCollection = collection(db, "contactQueries");

    addDoc(queryCollection, formData).then((snapshot) => {
      alert("¡Consulta enviada con éxito!");
      setFormData(queryForm);
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
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
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="secondary" type="submit" className="mt-3 mb-3">
                Enviar
              </Button>
            </Form>
          </Col>
          <Col md={6} sm={12}>
            <SocialLinks/>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Contact;
