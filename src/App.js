import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="bg-dark pt-3 background">
        <div className="text-center">
          <h1 className="bg-light text-uppercase d-inline px-3">
            Productos destacados
          </h1>
        </div>
        <div className="container mt-4 background2 p-1">
          <ItemListContainer />
        </div>
      </main>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
