import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'; // Importa los módulos
import 'swiper/css'; // Importa los estilos base de Swiper
import 'swiper/css/autoplay'; // Importa los estilos para autoplay
import './HomeSwiper.css'; // Tus estilos personalizados

// Imágenes
import bluenailImage from '../../assets/image/swiper/bluenail.jpg';
import mixnailImage from '../../assets/image/swiper/mixnail.jpg';
import yellownailImage from '../../assets/image/swiper/yellownail.jpg';

const HomeSwiper = () => {
  const slidesData = [
    { imgSrc: bluenailImage, alt: 'Slide 1' },
    { imgSrc: mixnailImage, alt: 'Slide 2' },
    { imgSrc: yellownailImage, alt: 'Slide 3' },
  ];

  return (
    <div className="home-swiper-container">
      {/* Sección fija encima del Swiper */}
      <div className="fixed-section">
        <h1>¿Estás lista<br />para tu<br />mejor<br />versión?</h1>
        <div className="buttons-container">
          <button>Reserva una cita</button>
          
        </div>
      </div>

      {/* Contenedor principal del Swiper */}
      <Swiper
        modules={[ Autoplay ]} // Agrega los módulos aquí
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Cambia de slide cada 3 segundos
          disableOnInteraction: false, // No se detiene al interactuar
        }}
        speed = {1500}
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
