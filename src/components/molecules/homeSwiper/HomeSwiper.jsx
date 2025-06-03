import ReusableSwiper from "../../organisms/ReusableSwiper";
import "swiper/css";
import TextSwiper from "../../atoms/TextSwiper";

const HomeSwiper = () => {
  return (
    <div className="relative w-full">
      <ReusableSwiper />
      <TextSwiper />

      <div className="absolute bottom-[60%] sm:bottom-0 w-full h-60 bg-gradient-to-b from-transparent to-body pointer-events-none z-10 " />
    </div>
  );
};

export default HomeSwiper;
