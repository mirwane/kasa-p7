import React, { useState } from "react";
import "./ImageBanner.scss";

export function ImageBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction pour obtenir la classe CSS en fonction de l'indice de l'image
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  // Fonction pour passer à l'image suivante
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Fonction pour passer à l'image précédente
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  // Fonction pour vérifier si des images sont disponibles
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // Fonction pour obtenir le carrousel d'images ou une image par défaut
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="https://picsum.photos/800" className="show" alt="" />;
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  return (
    <div className="image__banner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}
