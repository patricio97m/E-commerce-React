import "./navBar.css";
import logo from "../img/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <div className="searchCategory">
        <SearchBar size={"big"} />
        <Categories />
      </div>
      <div className="cartWidget">
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
