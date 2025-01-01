import React, { useState } from "react";
import "./ImageCarousel.scss";

const ImageCarousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="image-carousel">
      {pictures.length > 1 && ( // Afficher la flèche "Précédent" uniquement si plusieurs images
        <button className="carousel-button prev" onClick={prevImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}
      <img src={pictures[currentIndex]} alt="lodging" className="lodging-cover" />
      {pictures.length > 1 && ( // Afficher la flèche "Suivant" uniquement si plusieurs images
        <button className="carousel-button next" onClick={nextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
      <div className="image-counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
