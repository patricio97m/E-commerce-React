import './cartWidget.css'
import cartImg from '../img/icono-carrito.png'

const CartWidget = ({amount}) => {
    const cant = amount ? amount:0;

    return <div className= "cart">
    <div className= "cart"></div>
        <a href="#cart"><img src= {cartImg} alt="carrito" />
            <div className="cantidad">{`${cant}`}</div>
        </a>
    </div>
}

export default CartWidget;