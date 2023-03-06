import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

function Carrousel({ images }) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    if (images) {
      setPictures(images);
    }
  }, [images]);

  return (
    <Carousel variant="dark">
      {pictures.map((item, index) => (
        <Carousel.Item key={index}> 
          <img className="d-block w-100 rounded" src={item} alt="First slide"/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrousel;
