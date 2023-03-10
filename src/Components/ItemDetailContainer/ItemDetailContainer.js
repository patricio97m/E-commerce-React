import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import {getFirestore, getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [specificProduct, setSpecificProduct] = useState({ product: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { productID } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "products", productID);

    if (productID) {
      getDoc(productRef).then((snapshot) => {
        const product = {
          id: snapshot.id,
          ...snapshot.data(),
        };
        setSpecificProduct(product);
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
