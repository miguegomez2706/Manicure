import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./HomeSwiper.css";
import ModalTurnos from "../turns/ModalTurnos"; // Importamos la modal
import servicios from "../turns/servicios"; // Importamos los servicios

import bluenailImage from "../../assets/image/swiper/bluenail.jpg";
import mixnailImage from "../../assets/image/swiper/mixnail.jpg";
import yellownailImage from "../../assets/image/swiper/yellownail.jpg";

const HomeSwiper = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const slidesData = [
    { imgSrc: bluenailImage, alt: "Slide 1" },
    { imgSrc: mixnailImage, alt: "Slide 2" },
    { imgSrc: yellownailImage, alt: "Slide 3" },
  ];

  return (
    <div className="home-swiper-wrapper"> {/* Nuevo contenedor */}
      {/* Sección fija encima del Swiper */}
      <div className="fixed-section">
        <h1>
          ¿Estás lista
          <br />
          para tu
          <br />
          mejor
          <br />
          versión?
        </h1>
        <div className="buttons-container">
          <button onClick={() => setModalOpen(true)}>Reserva una cita</button>
        </div>
      </div>

      {/* Contenedor del Swiper */}
      <div className="home-swiper-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1200}
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

      {/* Modal */}
      <ModalTurnos
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        servicios={servicios}
      />
    </div>
  );
};

export default HomeSwiper;
