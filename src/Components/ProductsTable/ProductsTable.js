import { Button, Table } from "react-bootstrap";
import TableRow from "../TableRow/TableRow";
import "./productTable.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ProductsTable = () => {
  const { getTotalQuantity, clear } = useContext(CartContext);

  if (getTotalQuantity() === 0) {
    return (
      <h2 className="text-light text-center p-2 bg-dark">
        No hay productos en el carrito, pulse
        <Link to="/" className="text-decoration-none">{" "}aquí</Link>{" "}
        para volver.
      </h2>
    );
  }

  const clearCart = () =>{
    clear();
    alert("Compra finalizada con éxito");
  }

  return (
    <div>
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
        <Button variant="danger" onClick={clearCart}>Finalizar compra</Button>
      </div>
    </div>
  );
};

export default ProductsTable;
