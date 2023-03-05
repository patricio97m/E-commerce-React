import { Button, InputGroup, Form, Overlay, Tooltip } from "react-bootstrap";
import { useState, useRef } from "react";

const ItemCount2 = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const target = useRef(null);

  const Increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const AddToCart = () => {
    onAdd(count);
    setCount(1);
    setShowMessage(true); //Estado que habilita el overlay para indicar que se ha agregado un producto
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <>
      <InputGroup className="formSize">
        <Button variant="outline-secondary" onClick={Decrement}>-</Button>
        <Form.Control aria-label="Cantidad" value={count} className="text-center" readOnly/>
        <Button variant="outline-secondary" onClick={Increment}>+</Button>
      </InputGroup>
      <Button ref={target} variant="primary" onClick={AddToCart}>
        Agregar al carrito
      </Button>
      <Overlay target={target.current} show={showMessage} placement="top">
        {(props) => (
          <Tooltip {...props}>
           ¡Agregado con éxito!
          </Tooltip>
        )}
      </Overlay>
    </>
  );
};

export default ItemCount2;