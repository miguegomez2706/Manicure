<<<<<<< HEAD:Manicura/src/components/homeSwiper/HomeSwiper.jsx
import ReusableSwiper from "../organisms/ReusableSwiper";
=======
import { useState } from "react";
import ReusableSwiper from "../../organisms/ReusableSwiper";
>>>>>>> dev-brian:Manicura/src/components/molecules/homeSwiper/HomeSwiper.jsx
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
