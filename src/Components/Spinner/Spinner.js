import Spinner2 from 'react-bootstrap/Spinner';
import './spinner.css'

function Spinner() {
  return (
    <Spinner2 animation="border" role="status" variant="light" className='mx-auto d-flex spinner'>
      <span className="visually-hidden">Cargando...</span>
    </Spinner2>
  );
}

export default Spinner;