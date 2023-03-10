import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <main className="bg-dark pt-3 background">
      <div className="text-center">
        <h1 className="bg-light text-uppercase d-inline px-3">
          Productos destacados
        </h1>
      </div>
      <div className="container mt-4 background2 rounded">
        <ItemListContainer />
      </div>
    </main>
  );
};

export default Home;
