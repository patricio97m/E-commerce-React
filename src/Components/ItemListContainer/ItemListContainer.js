import ItemList from '../ItemList/ItemList'
import products from '../products.json'

const ItemListContainer = () => {
  return (
    <div>
      <ItemList products = {products} />
    </div>
  );
};

export default ItemListContainer;
