import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carrousel from "../Carrousel/Carrousel";

function ItemDetail({
  show,
  handleClose,
  title,
  description,
  price,
  stock,
  images,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Carrousel images={images} />
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>{title}</Modal.Title>
          <p>{description}</p>
          <p>${price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemDetail;
