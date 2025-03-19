import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
    <div className="relative w-full">
      {/* Contenedor del Swiper */}
      <div className="w-full h-[95vh] overflow-hidden flex items-center justify-center">
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
              <div className="flex items-center justify-center w-full h-full">
                <div className="w-full h-full mx-24">
                  <img
                    src={slide.imgSrc}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Sección del título y botón debajo del Swiper */}
      <div className="flex flex-col justify-center items-center sm:items-start sm:absolute sm:top-[15%] sm:left-[70%] sm:transform sm:-translate-x-1/2 sm:w-[20%] sm:z-10 sm:text-center p-4 sm:p-0 ">
  <h1 className="font-rale text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black sm:text-white text-shadow-lg">
    ¿Estás lista
    <br />
    para tu
    <br />
    mejor
    <br />
    versión?
  </h1>
        <div className="mt-5 sm:mt-8 flex justify-center w-full">
          <button
            onClick={() => setModalOpen(true)}
          className="px-7 py-3 bg-button text-white cursor-pointer text-xl rounded-lg mt-8 sm:mt-4 border-2 border-solid border-gray-900 hover:bg-buttonHover hover:border-gray-900 bg-gray-900 hover:bg-transparent "
          >
            Reserva una cita
          </button>
        </div>
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
