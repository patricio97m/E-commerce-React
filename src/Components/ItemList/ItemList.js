import Item from "../Item/Item";
import { useEffect, useState } from "react";
import "./itemList.css";

const ItemList = ({ products }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      },);
    });
    promise.then((res) => {
      setList(res);
    });
  });

  return (
    <div className="container">
      {list.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          stock={item.stock}
          image={item.thumbnail}
        />
      ))}
    </div>
  );
};

export default ItemList;
