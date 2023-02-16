import './searchBar.css';

const SearchBar = ({ size }) => {
    const sizeclass = size ? size : "small"
   
    return <div className = {sizeclass}>
        <input type="text" name="buscar" id="buscar" placeholder="Buscar..." />
        <button></button>
    </div>
}
export default SearchBar;