import { useParams } from "react-router-dom";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

const SearchResults = () => {
  const { search } = useParams();

  return (
    <main className="bg-dark pt-3 background">
      <div className="text-center">
        <h1 className="bg-light text-uppercase d-inline px-3 rounded">
          Resultados de "{search}"
        </h1>
      </div>
      <div className="container mt-4 background2">
        <ItemListContainer />
      </div>
    </main>
  );
};

export default SearchResults;
