import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import Navbar from "./Components/NavBar/NavBar";
import Home from "./routes/Home/Home";
import Categories from "./routes/Categories/Categories";
import SearchResults from "./routes/SearchResults/SearchResults";
import Footer from "./Components/Footer/Footer";
import SpecificProduct from "./routes/SpecificProduct/SpecificProduct";
import Cart from "./routes/Cart/Cart";
import MyAccount from "./routes/MyAccount/MyAccount";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <UserProvider>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/product/:productID" element={<SpecificProduct />}/>
              <Route exact path="/products/:search" element={<SearchResults />}/>
              <Route exact path="/categories/:specificCategory" element={<Categories />} />
              <Route exact path="/myaccount" element={<MyAccount />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </UserProvider>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
