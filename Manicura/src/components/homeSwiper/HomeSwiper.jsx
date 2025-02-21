import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import './HomeSwiper.css'; 

// Imágenes
import bluenailImage from '../../assets/image/swiper/bluenail.jpg';
import mixnailImage from '../../assets/image/swiper/mixnail.jpg';
import yellownailImage from '../../assets/image/swiper/yellownail.jpg';

const HomeSwiper = () => {
  const slidesData = [
    {
      imgSrc: bluenailImage,
      alt: "Slide 1",
    },
    {
      imgSrc: mixnailImage,
      alt: "Slide 2",
    },
    {
      imgSrc: yellownailImage,
      alt: "Slide 3",
    },
  ];

  return (
    <div className="home-swiper-container">
      
      {/* Sección fija encima del Swiper */}
      <div className="fixed-section">
        <h1>Bienvenido a la tienda</h1>
        <h2>Explora nuestras mejores ofertas y productos exclusivos</h2>
        <div className="buttons-container">
          <button>Ver más ofertas</button>
          <button>Explorar productos</button>
        </div>
      </div>

      {/* Contenedor principal del Swiper */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000 }}
        effect="fade"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="home-swiper-slide">
              <div className="image-section">
                <img src={slide.imgSrc} alt={slide.alt} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
