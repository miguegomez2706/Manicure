import ReusableSwiper from "../ReusableSwiper";
import "swiper/css";
import TextSwiper from "../../atoms/TextSwiper";

const HomeSwiper = () => {
  return (
    <div className="relative w-full">
      <ReusableSwiper />
      <TextSwiper />
    </div>
  );
};

export default HomeSwiper;
