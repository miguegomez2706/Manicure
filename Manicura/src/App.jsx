import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/molecules/navbar/navbar.jsx";
import HomeSwiper from "./components/homeSwiper/HomeSwiper";
import semi1 from "./assets/image/semipermanente/semi1.jpeg";
import ListCard from "./components/molecules/ListCard.jsx";
import Commercial from "./components/molecules/commercial.jsx";
import ListCardGeneral from "./components/molecules/ListCardGeneral.jsx";
import Footer from "./components/molecules/Footer.jsx";
import SalonComponent from "./components/atoms/SalonComponent.jsx";
import Reserva from "./components/turns/Reserva.jsx";
import ListCardText from "./components/molecules/ListCardText.jsx";
import CardText from "./components/atoms/CardText.jsx";
import CardTextCarrousel from "./components/molecules/CardTextCarrousel.jsx";
import Carousel from "./components/molecules/Carousel.jsx";
// import Calendar from "./components/services/Calendar.jsx";

const publicidad = {
  img: semi1,
  title: "titulo",
  description: "descripcion",
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HomeSwiper /> 
            <ListCard />
            <Commercial publicidad={publicidad} />
            <SalonComponent />
            <ListCardGeneral />
            <Footer />
          </>
        } />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </Router>
  );
}

export default App;