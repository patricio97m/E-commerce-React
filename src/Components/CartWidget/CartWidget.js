import "./cartWidget.css";
import cartImg from "../img/icono-carrito.png";

const CartWidget = ({ amount }) => {
  const redCircle = <div className="cantidad">{amount}</div>;
  const noCircle = <div className="noNumber"></div> ;

    return (
      <div className="cart">
        <a href="#cart">
          <img src={cartImg} alt="carrito" />
          {amount == 0 ? noCircle : redCircle}
        </a>
      </div>
    );
  }

export default CartWidget;
