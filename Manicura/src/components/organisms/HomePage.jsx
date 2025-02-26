import SalonComponent from "../atoms/SalonComponent.jsx";
// import HomeSwiper from "../homeSwiper/HomeSwiper.jsx";
import ListCard from "../molecules/ListCard.jsx";
import Commercial from "../molecules/commercial.jsx";
import ListCardGeneral from "../molecules/ListCardGeneral.jsx";

const publicidad = {
  title: "titulo",
  description: "descripcion",
};

const HomePage = () => {
  return (
    // <HomeSwiper />
    <>
      <ListCard />
      <Commercial publicidad={publicidad} />
      <SalonComponent />
      <ListCardGeneral />
    </>
  );
};

export default HomePage;
