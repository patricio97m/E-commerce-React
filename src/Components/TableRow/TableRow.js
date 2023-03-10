import './tableRow.css'
import trashCan from "../img/trash.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const TableRow = () => {
  const { cart, removeItem, getTotalPrice } = useContext(CartContext);

  return (
    <>
      {cart.cartItems.map((product) => (
        <tr key={product.id}>
          <td className=" text-center align-middle rowImage">
            <img src={product.thumbnail} alt={product.name} />
          </td>
          <td>{product.title}</td>
          <td>{product.quantity}</td>
          <td>${product.price * product.quantity}</td>
          <td className="trashCan text-center align-middle table-danger">
            <a href="#delete" onClick={() => removeItem(product.id)}>
              <img src={trashCan} alt="trashCan" className="img-fluid" />
            </a>
          </td>
        </tr>
      ))}
      <tr>
        <th></th>
        <th></th>
        <th>Total: </th>
        <th>${getTotalPrice()}</th>
      </tr>
    </>
  );
};

export default TableRow;
