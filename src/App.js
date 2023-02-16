import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar searchBarSize={50} />
      </header>
      
      <main className="products">
        <h1>Productos destacados</h1>
        <ItemListContainer />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
