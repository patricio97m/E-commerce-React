import "./itemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const saludo = greeting ? greeting : "Indefinido";

  return (
    <div className="card">
      <h2> {saludo} </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <ItemCount productStock={10} />
    </div>
  );
};

export default ItemListContainer;
