import "./itemCount.css";
import React, { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import cartAdd from "../img/cart-add.svg";

function ItemCount({ productStock, onAdd }) {
  const [count, setCount] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const target = useRef(null);

  const Increment = () => {
    if (count < productStock) {
      setCount(count + 1);
    }
  };

  const Decrement = () => {
    if (count > 0) {
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
    <div className="counter-container position-absolute bottom-0 end-0">
      <div className="counter">
        <button className="counter-button" onClick={Decrement}>-</button>
        <p>{count}</p>
        <button className="counter-button" onClick={Increment}>+</button>
      </div>
      <div>
        <button ref={target} className="add-button " onClick={AddToCart}>
          {<img src={cartAdd} alt="logo" />}
        </button>
        <Overlay target={target.current} show={showMessage} placement="top"> 
          {(props) => <Tooltip {...props}>¡Agregado con éxito!</Tooltip>}
        </Overlay>
      </div>
    </div>
  );
}

export default ItemCount;
