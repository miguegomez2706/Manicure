import "./App.css";
import Navbar from "./components/molecules/navbar/navbar.jsx";
import semi1 from "./assets/image/semipermanente/semi1.jpeg";
import ListCard from "./components/molecules/ListCard.jsx";
import Commercial from "./components/molecules/commercial.jsx";

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
    </>
  );
}

export default App;
