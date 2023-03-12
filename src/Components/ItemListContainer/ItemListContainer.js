import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {getFirestore, collection, getDocs, query, where, limit} from "firebase/firestore";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [productList, setProductList] = useState({ products: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const { specificCategory, search } = useParams();

  useEffect(() => {
    const db = getFirestore();
    
    //Sentencia que se encarga de filtrar los productos por su categoría
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
    }
    
    //Sentencia que se encarga de buscar los productos por su título
    else if (search !== undefined && specificCategory === undefined) {
      const searchToLowerCase = search.toLowerCase();
      const searchResults = collection(db, "products");
      getDocs(searchResults).then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        const filteredProducts = docs.filter((doc) => {
          const title = doc.title.toLowerCase();
          //Devuelve el producto si mínimo coinciden 4 palabras
          return title.includes(searchToLowerCase) && searchToLowerCase.slice(0, 4) === title.slice(0, 4); 
        });
        if (filteredProducts.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
          setProductList(filteredProducts);
        }
        setIsLoading(false);
      });
    } 
    
    //Sentencia que se encarga de filtrar productos para mostrarlos en el Home
    else {
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
            Ningún producto coincide con su búsqueda, pulse
            <Link to="/" className="text-decoration-none">{" "}aquí</Link>{" "}
            para volver.
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
