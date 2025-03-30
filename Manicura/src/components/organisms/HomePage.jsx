import SalonComponent from "../atoms/SalonComponent.jsx";
import HomeSwiper from "../homeSwiper/HomeSwiper.jsx";
import ListCard from "../molecules/ListCard.jsx";
import Commercial from "../molecules/commercial.jsx";
import ListCardGeneral from "../molecules/ListCardGeneral.jsx";
import { useEffect, useState } from "react";

const publicidad = {
  title: "titulo",
  description: "descripcion",
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1);
  }, []);
  return (
    <div
      className={`relative w-full animate-fade-in transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <HomeSwiper />
      <Commercial publicidad={publicidad} />
      <ListCard />
      <SalonComponent />
      <ListCardGeneral />
    </div>
  );
};

export default HomePage;
