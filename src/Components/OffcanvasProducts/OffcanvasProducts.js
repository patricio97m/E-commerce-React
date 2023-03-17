import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";

const OffCanvasProducts = ({ orderProducts, show, onClose }) => {
  return (
    <Offcanvas show={show} onHide={onClose} placement="bottom">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Productos adquiridos</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {orderProducts && (
          <ul>
            {orderProducts.map((product) => (
              <li key={product.id}>
                {product.title}{" "}
                <Badge bg="secondary">x{product.quantity}</Badge> - $
                {product.price}
              </li>
            ))}
          </ul>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvasProducts;
