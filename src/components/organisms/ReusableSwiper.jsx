import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { slidesData } from "../../assets/dataStore";

const ReusableSwiper = ({
  width = "w-full",
  height = "h-[30vh] sm:h-[100vh]",
  slide = slidesData,
}) => {
  return (
    <div className={`${width} ${height} overflow-hidden `}>
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
        {slide.map((slide, index) => (
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
      <div className="absolute bottom-[60%] sm:bottom-0 w-full h-60 bg-gradient-to-b from-transparent to-body pointer-events-none z-10 " />
    </div>
  );
};

export default ReusableSwiper;
