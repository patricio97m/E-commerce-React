import "./itemCount.css";
import React, { useState } from "react";
import cartAdd from "../img/cart-add.svg";

function ItemCount({ productStock }) {
  const [count, setCount] = useState(0);
  const [desiredCount, setDesiredCount] = useState(null);

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

  const handleSave = () => {
    setDesiredCount(count);
    setCount(count - count);
  };

  return (
      <div className="counter-container">
        <div className="counter">
          <button className="counter-button" onClick={Decrement}>-</button>
          <p>{count}</p>
          <button className="counter-button" onClick={Increment}>+</button>
        </div>
        <div>
          <button className="add-button" onClick={handleSave}>
            {<img src={cartAdd} alt="logo" />}
          </button>
        </div>
      </div>
  );
}

export default ItemCount;
