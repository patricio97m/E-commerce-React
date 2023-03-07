import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {
  const [productList, setProductList] = useState({ products: [] });
  const [isLoading, setIsLoading] = useState(true); 
  const [noResults, setNoResults] = useState(false);
  const { specificCategory, search } = useParams();

  useEffect(() => {
    if (specificCategory && search === undefined) {
      fetch(`https://dummyjson.com/products/category/${specificCategory}`)
        .then((res) => res.json())
        .then((data) => {
          setProductList(data.products);
          setIsLoading(false);
        });
    } else if (search !== undefined && specificCategory === undefined) {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.products.length === 0) {
            setNoResults(true);
          } else {
            setProductList(data.products);
          }
          setIsLoading(false);
        });
    } else {
      fetch(`https://dummyjson.com/products?limit=8`)
        .then((res) => res.json())
        .then((data) => {
          setProductList(data.products);
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
            <h2 className="text-light text-center p-2">Ningún producto coincide con su búsqueda</h2>
          ) : (
            <ItemList products={productList} />
          )}
        </>
      )}
    </>
  );
};

export default ItemListContainer;
