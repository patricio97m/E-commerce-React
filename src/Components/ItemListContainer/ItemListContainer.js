import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {getFirestore, collection, getDocs, query, where, limit} from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState({ products: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const { specificCategory, search } = useParams();

  useEffect(() => {
    const db = getFirestore();

    if (specificCategory && search === undefined) {
      const category = query(
        collection(db, "products"),
        where("category", "==", specificCategory)
      );
      getDocs(category).then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        setProductList(docs);
        setIsLoading(false);
      });
    } else if (search !== undefined && specificCategory === undefined) {
      const searchResults = query(
        collection(db, "products"),
        where("title", "array-contains", search)
      );
      getDocs(searchResults).then((snapshotList) => {
        if (snapshotList.size === 0) {
          setNoResults(true);
        } else {
          const docs = snapshotList.docs.map((snapshot) => ({
            id: snapshot.id,
            ...snapshot.data(),
          }));
          setProductList(docs);
        }
        setIsLoading(false);
      });
    } else {
      const productsCollection = query(
        collection(db, "products"),
        where("category", "in", ["smartphones", "notebooks"]),
        limit(8)
      );
      getDocs(productsCollection).then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        setProductList(docs);
        setIsLoading(false);
      });
    }
  }, [specificCategory, search]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {noResults ? (
            <h2 className="text-light text-center p-2">
              Ningún producto coincide con su búsqueda
            </h2>
          ) : (
            <ItemList products={productList} />
          )}
        </>
      )}
    </>
  );
};

export default ItemListContainer;
