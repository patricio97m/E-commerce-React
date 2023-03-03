import './CartWidget.css'
import cartImg from "../img/icono-carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const noCircle = <div className="noNumber"></div>;
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <>
      <img src={cartImg} alt="carrito" />
      {getTotalQuantity() === 0 ? (
        noCircle
      ) : (
        <div className="quantity">{getTotalQuantity()}</div>
      )}
    </>
  );
};

export default CartWidget;
