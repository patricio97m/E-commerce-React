import "./itemCount.css";
import React, { useState } from "react";
import AddCartButtom from '../AddCartButtom/AddCartButtom' 

function ItemCount({ productStock }) {
  const [count, setCount] = useState(0);

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

  return (
      <div className="counter-container">
        <div className="counter">
          <button className="counter-button" onClick={Decrement}>-</button>
          <p>{count}</p>
          <button className="counter-button" onClick={Increment}>+</button>
        </div>
        <div>
          <AddCartButtom/>
        </div>
      </div>
  );
}

export default ItemCount;
