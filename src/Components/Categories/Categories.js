import "./categories.css";

const Categories = () => {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Categorias">Categorías</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Contacto">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#MiCuenta">Mi cuenta</a>
        </li>
      </ul>
    </>
  );
};

export default Categories;
