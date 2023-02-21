import ItemList from "../ItemList/ItemList";
/* import products from "../products.json"; */
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
      });
  }, []);

  return (
    <>
      <ItemList products={productList} />
    </>
  );
};

export default ItemListContainer;
