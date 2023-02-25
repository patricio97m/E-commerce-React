import "./searchBar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

  const submitSearch = (event) => {
    event.preventDefault();
    setSearchTerm("");
    navigate(`/products/${searchTerm}`)
  };

  const submitChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <form className="d-flex big" onSubmit={submitSearch}>
      <input
        className="form-control me-1"
        type="search"
        placeholder="Buscar..."
        aria-label="Search"
        onChange={submitChange}
        value={searchTerm}
        required
      />
      <button className="btn btn btn-outline-secondary" type="submit"></button>
    </form>
  );
};

export default SearchBar;
