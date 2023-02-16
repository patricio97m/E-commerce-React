import "./item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ title, description, price, stock, image }) => {
  return (
    <div className="card">
      <div class="product-image">
        <img src= {image} alt="ProductImage" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <div className="itemCount">
        <ItemCount productStock={stock} />
      </div>
    </div>
  );
};

export default Item;
