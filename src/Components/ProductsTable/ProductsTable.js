import { Button, Table } from "react-bootstrap";
import TableRow from "../TableRow/TableRow";
import "./productTable.css";
import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import UserLogin from "../../Components/UserLogin/UserLogin";

const ProductsTable = () => {
  const { cart, getTotalQuantity, clear, getTotalPrice } = useContext(CartContext);
  const { user, isLogged } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  if (getTotalQuantity() === 0) {
    return (
      <h2 className="text-light text-center p-2 bg-dark">
        No hay productos en el carrito, pulse
        <Link to="/" className="text-decoration-none">
          {" "}
          aquí
        </Link>{" "}
        para volver.
      </h2>
    );
  }

  const orderStart = () => { 
    if (isLogged) { //Lógica para agregar una orden
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      const products = {
        products: cart.cartItems.map((product) => ({
          id: product.id,
          price: product.price,
          title: product.title,
          quantity: product.quantity,
        })),
      };
      const date = new Date();

      const newOrder = {
        buyer: {
          user: user.user,
          email: user.email,
          name: user.name,
          cellphone: user.cellphone,
        },
        ...products,
        date: date,
        total: getTotalPrice(),
      };
      addDoc(orderCollection, newOrder);
      clear();
      alert("Órden realizada con éxito");
    } else {
      setShowModal(true);
    }
  };
  return (
    <>
      <Table striped hover variant="light">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </Table>
      <div>
        <Button variant="danger" onClick={orderStart}>
          Finalizar compra
        </Button>
      </div>
      {showModal ? (
        <UserLogin showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </>
  );
};

export default ProductsTable;
