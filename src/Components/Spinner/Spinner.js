import Spinner2 from 'react-bootstrap/Spinner';

function Spinner() {
  return (
    <Spinner2 animation="border" role="status" variant="light" className='mx-auto d-flex'>
      <span className="visually-hidden">Loading...</span>
    </Spinner2>
  );
}

export default Spinner;