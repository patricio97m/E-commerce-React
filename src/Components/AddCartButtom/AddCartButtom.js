import "./addcartButtom.css";
import cartAdd from "../img/cart-add.svg";
function AddCartButtom({ count }) {
    return (
    <button className="add-button" >
      {<img src={cartAdd} alt="logo" />}
    </button>
  );
}

export default AddCartButtom;
