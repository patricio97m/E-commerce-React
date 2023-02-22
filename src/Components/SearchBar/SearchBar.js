import "./searchBar.css";

const SearchBar = () => {

  return (
    <form className = "d-flex big" >
      <input
        className="form-control me-1"
        type="search"
        placeholder="Buscar..."
        aria-label="Search"
      />
      <button className="btn btn btn-outline-secondary" type="submit"></button>
    </form>
  );
};
export default SearchBar;
