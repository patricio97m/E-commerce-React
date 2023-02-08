import './searchBar.css';

const SearchBar = ({ size }) => {
    const sizeclass = size ? size : '10'
    return <div className='search'>
        <input type="text" name="buscar" id="buscar" placeholder="Buscar..."  size = {`${sizeclass}`} />
        <button></button>
    </div>
}
export default SearchBar;