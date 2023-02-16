import "./addcartButtom.css";
import cartAdd from "../img/cart-add.svg";
import RedCircle from "../RedCircle/RedCircle";

function AddCartButtom({ count }) {


  return (
    <button className="add-button" >
      {<img src={cartAdd} alt="logo" />}
    </button>
  );
}

export default AddCartButtom;
