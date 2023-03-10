import "./item.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Item = ({ idProp, title, price, stock, image }) => {
  const { addItem } = useContext(CartContext);

  const AddToCart = (count) => {
    addItem(
      {
        id: idProp, 
        title: title, 
        price: price, 
        thumbnail: image
      },
      count
    );
  };

  return (
    <div className="col-12 col-sm-7 col-md-5 col-lg-3 mx-auto d-flex">
      <div className="card m-2 cardBig mx-auto w-100">
        <Link to={`/product/${idProp}`}>
          <img src={image} className="card-img-top img-fluid cardImg mx-auto" alt="ProductImage"/>
        </Link>
        <div className="card-body">
          <Link to={`/product/${idProp}`} className="text-decoration-none">
            <h2 className="card-title">{title}</h2>
          </Link>
          <div>
            <p className="card-text">${price}</p>
          </div>
          <div className="justify-content-end">
            <ItemCount productStock={stock} onAdd={AddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
