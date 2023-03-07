import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const [specificProduct, setSpecificProduct] = useState({ product: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { productID } = useParams();

  useEffect(() => {
    if (productID) {
      fetch(`https://dummyjson.com/products/${productID}`)
        .then((res) => res.json())
        .then((res) => {
          setSpecificProduct(res);
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
          key={specificProduct.id}
          idProp={specificProduct.id}
          title={specificProduct.title}
          description={specificProduct.description}
          price={specificProduct.price}
          stock={specificProduct.stock}
          images={specificProduct.images}
          thumbnail={specificProduct.thumbnail}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
