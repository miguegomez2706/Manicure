import "./App.css";
import Navbar from "./components/molecules/navbar/navbar.jsx";
import semi1 from "./assets/image/semipermanente/semi1.jpeg";
import ListCard from "./components/molecules/ListCard.jsx";
import Commercial from "./components/molecules/commercial.jsx";
import ListCardText from "./components/molecules/ListCardText.jsx";
import CardText from "./components/atoms/CardText.jsx";
import CardTextCarrousel from "./components/molecules/CardTextCarrousel.jsx";
import ListCardGeneral from "./components/molecules/ListCardGeneral.jsx";

const publicidad = {
  img: semi1,
  title: "titulo",
  description: "descripcion",
};

function App() {
  return (
    <>
      <Navbar />
      <ListCard />
      <Commercial publicidad={publicidad} />
      <ListCardText />
      <ListCardGeneral />
    </>
  );
}

export default App;
