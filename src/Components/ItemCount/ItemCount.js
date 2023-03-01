import "./itemCount.css";
import React, { useState } from "react";
import cartAdd from "../img/cart-add.svg";

function ItemCount({ productStock, onAdd }) {
  const [count, setCount] = useState(1);

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
  };

  return (
    <div className="counter-container position-absolute bottom-0 end-0">
      <div className="counter">
        <button className="counter-button" onClick={Decrement}>-</button>
        <p>{count}</p>
        <button className="counter-button" onClick={Increment}>+</button>
      </div>
      <div>
        <button className="add-button " onClick={AddToCart}>
          {<img src={cartAdd} alt="logo" />}
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
