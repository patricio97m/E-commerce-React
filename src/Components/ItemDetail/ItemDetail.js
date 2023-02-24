import Button from "react-bootstrap/Button";
import Carrousel from "../Carrousel/Carrousel";

const ItemDetail = ({ title, description, price, stock, images }) => {
  const AddToCart = () => {};

  return (
    <div className="container my-4 ">
      <div className="row">
        <div className="col-md-6">
          <Carrousel images={images} alt={title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4 text-light mt-3">{title}</h2>
          <p className="lead text-light">{description}</p>
          <h3 className="mt-4 text-light">${price}</h3>
          <div className="d-flex align-items-center mt-4"></div>
          <Button variant="primary" className="mt-4" onClick={AddToCart}>
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
