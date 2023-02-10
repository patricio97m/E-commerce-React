import "./navBar.css";
import logo from "../img/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ searchBarSize, amountCart }) => {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <div>
        <SearchBar size={`${searchBarSize}`} />
        <Categories />
      </div>
      <div className="cartWidget">
        <CartWidget amount={`${amountCart}`} />
      </div>
    </div>
  );
};

export default Navbar;
