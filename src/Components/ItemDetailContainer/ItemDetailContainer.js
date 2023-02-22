import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ show, handleClose, idProp }) => {
  const [productKey, setProductKey] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProductKey(data.products.find((index) => index.id === idProp));
      });
  }, [idProp]);

  return (
    <>
      <ItemDetail
        idProp={productKey.id}
        title={productKey.title}
        description={productKey.description}
        price={productKey.price}
        stock={productKey.stock}
        images={productKey.images}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

export default ItemDetailContainer;
