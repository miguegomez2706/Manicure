import React from "react";

const Slides = ({ currentSlide, slides }) => {
  const { imgSrc, title, subtitle, trend, mainTitle, description } = slides[currentSlide];

  return (
    <div className="home__group">
      {/* Imagen y detalles de la imagen */}
      <div className="home__img-container">
        <img src={imgSrc} alt={title} className="home__img" />
        <div className="home__indicator"></div>
        <div className="home__details-img">
          <h4 className="home__details-title">{title}</h4>
          <span className="home__details-subtitle">{subtitle}</span>
        </div>
      </div>

      {/* Contenido del texto y botones */}
      <div className="slide__content">
        <h3 className="home__subtitle">{trend}</h3>
        <h1 className="home__title">{mainTitle}</h1>
        <p className="home__description">{description}</p>
        <div className="home__buttons">
          <a href="details.html" className="button1">Comprar</a>
          <a href="details.html" className="button2">
            Ver detalles<i className="bx bx-right-arrow-alt button__icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slides;
