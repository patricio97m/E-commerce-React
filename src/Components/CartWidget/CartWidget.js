import cartImg from "../img/icono-carrito.png";
import RedCircle from '../RedCircle/RedCircle'

const CartWidget = ({ amount }) => {
  const noCircle = <div className="noNumber"></div> ;

    return (
      <div className="cart">
        <a href="#cart">
          <img src={cartImg} alt="carrito" />
          {amount === 0 ? noCircle : <RedCircle  amount = {4}/>}
        </a>
      </div>
    );
  }

export default CartWidget;
