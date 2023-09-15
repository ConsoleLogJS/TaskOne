import { useState } from 'react';
import './Carousel.css';
function Images({ content }) {
  const [itemImage, setItemImage] = useState(0);

  console.log(content[itemImage].image, content[itemImage].alt);

  const nextElementHandler = () => {
    if (itemImage !== content.length - 1) {
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
      setItemImage(content.length - 1);
      console.log('Clicked back');
    }
  };

  return (
    <div className="carousel">
      <button className="btn" onClick={backElementHandler}>
        Back
      </button>
      <img src={content[itemImage].image} alt={content[itemImage].alt} />
      <button className="btn" onClick={nextElementHandler}>
        Next
      </button>
    </div>
  );
}
export default Images;
