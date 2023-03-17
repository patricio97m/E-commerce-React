import { Table } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import OffcanvasProducts from "../OffcanvasProducts/OffcanvasProducts";

const OrdersTable = () => {
  const { user } = useContext(UserContext);
  const [newOrders, setNewOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const ordersQuery = query( //query que se encarga de buscar que usuario realizó cada orden
      orderCollection,
      where("buyer.user", "==", user.user) 
    );
    getDocs(ordersQuery).then((orderSnapshot) => {
      const orders = [];
      orderSnapshot.forEach((order) => {
        orders.push({ id: order.id, ...order.data() });
      });
      setNewOrders(orders); //Se setean las órdenes que coinciden para mostrarlas en una tabla
    });
  }, [user.user]);

  const openOffcanvas = (order) => {
    setSelectedOrder(order.products); //Se pasan solamente los productos de la orden
    setShowOffcanvas(true);
  };

  return (
    <>
      {newOrders.length > 0 ? (
        <Table striped hover variant="light" className="mt-3">
          <thead>
            <tr>
              <th>Fecha de compra</th>
              <th>Precio final</th>
            </tr>
          </thead>
          <tbody>
            {newOrders.map((newOrder) => ( //map que muestra datos de la órden
              <tr key={newOrder.id}>
                <td>{newOrder.date.toDate().toLocaleString()}</td>
                <td className="d-flex justify-content-between">
                  ${newOrder.total}
                  <Link 
                    onClick={() => openOffcanvas(newOrder)} //Se pasa la orden actual al offcanvas
                    className="text-decoration-none"
                  >
                    Ver detalle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h2 className="text-light text-center p-2 bg-dark mt-3">
          No realizó ninguna orden
        </h2>
      )}
      <OffcanvasProducts
        orderProducts={selectedOrder}
        show={showOffcanvas}
        onClose={() => setShowOffcanvas(false)}
      />
    </>
  );
};

export default OrdersTable;
