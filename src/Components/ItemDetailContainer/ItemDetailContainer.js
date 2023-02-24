import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const [productKey, setProductKey] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productID } = useParams();

  useEffect(() => {
    if (productID) {
      fetch(`https://dummyjson.com/products/${productID}`)
        .then((res) => res.json())
        .then((res) => {
          setProductKey(res);
          setIsLoading(false);
        });
    }
  }, [productID]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ItemDetail
          key={productKey.id}
          idProp={productKey.id}
          title={productKey.title}
          description={productKey.description}
          price={productKey.price}
          stock={productKey.stock}
          images={productKey.images}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
