import "./CartWidget.css";
import cartImg from "../img/icono-carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <>
      <img src={cartImg} alt="carrito" />
      {getTotalQuantity() === 0 ? (
        <div className="noNumber"></div>
      ) : (
        <div className="quantity">{getTotalQuantity()}</div>
      )}
    </>
  );
};

export default CartWidget;
