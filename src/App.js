import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar searchBarSize = {50} amountCart = {17}/>
      </header>

      <main className="products">
          <ItemListContainer greeting = {"Producto"} />
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
