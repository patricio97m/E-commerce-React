import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>

      <main className="bg-dark pt-3">
        <div class="text-center">
          <h1 className="bg-light text-uppercase d-inline px-3">
            Productos destacados
          </h1>
        </div>
        <div className="container mt-4">
          <ItemListContainer />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
