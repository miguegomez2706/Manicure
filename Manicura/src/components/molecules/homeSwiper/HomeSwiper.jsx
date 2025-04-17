<<<<<<< HEAD
import { useState } from "react";
import ReusableSwiper from "../../organisms/ReusableSwiper";
=======
import ReusableSwiper from "../organisms/ReusableSwiper";
>>>>>>> main
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
