import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { specificCategory } = useParams();
  return (
    <main className="bg-dark pt-3 background">
      <div className="text-center">
        <h1 className="bg-light text-uppercase d-inline px-3">
          {specificCategory}
        </h1>
      </div>
      <div className="container mt-3 background2 rounded">
        <ItemListContainer />
      </div>
    </main>
  );
};

export default Categories;
