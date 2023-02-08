import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const saludo = greeting ? greeting : "Indefinido";
  return (
    <div className="card">
      <h2>{`${saludo}`}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default ItemListContainer;
