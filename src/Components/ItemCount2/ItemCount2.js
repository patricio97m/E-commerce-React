import { Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";

const ItemCount2 = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

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
  };

  return (
    <>
      <InputGroup className="formSize">
        <Button variant="outline-secondary" onClick={Decrement}>-</Button>
        <Form.Control aria-label="Cantidad" value={count} className="text-center" readOnly/>
        <Button variant="outline-secondary" onClick={Increment}>+</Button>
      </InputGroup>
      <Button variant="primary" onClick={AddToCart}>
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount2;
