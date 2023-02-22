import "./navBar.css";
import logo from "../img/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#menu">
          <img src={logo} alt="logo" className="imgLogo img-fluid" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Categories />
        </div>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <SearchBar />
        </div>
        <div className=" navbar-collapse d-flex justify-content-end">
          <div className="mt-3">
            <CartWidget />
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
