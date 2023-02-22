import "./item.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useState } from "react";

const Item = ({ idProp, title, price, stock, image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-7 col-sm-7 col-md-5 col-lg-3 mx-auto">
      <div className="card m-2 cardBig" style={{ width: "18rem" }}>
        <a href="#modal" onClick={handleShow}>
          <img src={image} className="card-img-top img-fluid cardImg" alt="ProductImage" />
        </a>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            <p className="card-text">${price}</p>
          </div>
          <div className="justify-content-end">
            <ItemCount productStock={stock} />
          </div>
        </div>
      </div>
      <ItemDetailContainer show = {show} handleClose = {handleClose} idProp = {idProp} />
    </div>
  );
};

export default Item;
