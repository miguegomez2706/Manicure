import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { slidesData } from "../../assets/dataStore";

const ReusableSwiper = () => {
  return (
    <>
      {/* Contenedor del Swiper */}
      <div className="w-full h-[45vh] sm:h-[100vh] sm:top-0 md:h[20vh] top-0 overflow-hidden flex items-center justify-center ">
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
                <div className="w-full h-full">
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
    </>
  );
};

export default ReusableSwiper;
