import { useState } from 'react';
import './Carousel.css';
function Images({ img, alt }) {
  const [itemImage, setItemImage] = useState(0);

  console.log(img[itemImage], alt[itemImage]);

  const nextElementHandler = () => {
    if (itemImage !== img.length - 1) {
      setItemImage((prev) => prev + 1);
      console.log('Clicked next');
    } else {
      setItemImage(0);
      console.log('Clicked next');
    }
  };

  const backElementHandler = () => {
    if (itemImage !== 0) {
      setItemImage((prev) => prev - 1);
      console.log('Clicked back');
    } else {
      setItemImage(img.length - 1);
      console.log('Clicked back');
    }
  };

  return (
    <div className="carousel">
      <button className="btn" onClick={backElementHandler}>
        Back
      </button>
      <img src={img[itemImage]} alt={alt[itemImage]} />
      <button className="btn" onClick={nextElementHandler}>
        Next
      </button>
    </div>
  );
}
export default Images;
