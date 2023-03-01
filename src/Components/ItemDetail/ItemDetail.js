import "./itemDetail.css";
import Carrousel from "../Carrousel/Carrousel";
import ItemCount2 from "../ItemCount2/ItemCount2";
import { useState } from "react";

const ItemDetail = ({ title, description, price, stock, images }) => {
  /*La variable cartItemCount es la encargada de almacenar el número de productos que vienen de ItemCount2*/
  const [cartItemCount, setCartItemCount] = useState(0);

  const AddToCart = (count) => {
    setCartItemCount(count);
  };

  return (
    <div className="container my-4 ">
      <div className="row">
        <div className="col-md-6">
          <Carrousel images={images} alt={title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4 text-light mt-3">{title}</h2>
          <p className="lead text-light">{description}</p>
          <h3 className="mt-4 text-light">${price}</h3>
          <div className="d-flex align-items-center mt-4">
            <ItemCount2 stock={stock} onAdd={AddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
