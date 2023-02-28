import './itemDetail.css'
import Button from "react-bootstrap/Button";
import Carrousel from "../Carrousel/Carrousel";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const ItemDetail = ({ title, description, price, stock, images }) => {
  const AddToCart = () => {};

  const [count, setCount] = useState(1);

  const Increment = () => {
    if (count <  stock ) {
      setCount(count + 1);
    }
  };

  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container my-4 ">
      <div className="row">
        <div className="col-md-6">
          <Carrousel images={images} alt={title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4 text-light mt-3">{title}</h2>
          <p className="lead text-light">{description}</p>
          <h3 className="mt-4 text-light">${price}</h3>
          <div className="d-flex align-items-center mt-4">
            <InputGroup className="formSize">
              <Button variant="outline-secondary" onClick={Decrement}>-</Button>
              <Form.Control aria-label="Cantidad" value={count} className="text-center" readOnly />
              <Button variant="outline-secondary" onClick={Increment}>+</Button>
            </InputGroup>
            <Button variant="primary" onClick={AddToCart}>
              Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
