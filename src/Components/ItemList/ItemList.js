import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="row mt-3">
      {products.map((item) => (
        <Item
          key={item.id}
          idProp={item.id}
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
