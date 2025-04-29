import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { slidesData } from "../../assets/dataStore";

const ReusableSwiper = () => {
  return (
    <div className="w-full h-[30vh] sm:h-[100vh] overflow-hidden">
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
        className="w-full h-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="w-full h-full">
              <img
                src={slide.imgSrc}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReusableSwiper;
