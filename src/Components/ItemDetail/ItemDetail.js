import "./itemDetail.css";
import Carrousel from "../Carrousel/Carrousel";
import ItemCount2 from "../ItemCount2/ItemCount2";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({idProp, title, description, price, stock, images, thumbnail}) => {
  const { addItem } = useContext(CartContext);

  const AddToCart = (count) => {
    addItem(
      {
        id: idProp, 
        title: title, 
        price: price, 
        thumbnail: thumbnail
      },
      count
    );
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
