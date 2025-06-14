import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/molecules/navbar.jsx";
import Footer from "./components/molecules/Footer.jsx";
import SalonPage from "./components/organisms/SalonPage.jsx";
import HomePage from "./components/organisms/HomePage.jsx";
import Reserva from "./components/organisms/Reserva.jsx";
import Turnos from "./components/organisms/Turnos.jsx";
import ListCurso from "./components/organisms/ListCurso.jsx";
import Confirm from "./components/organisms/Confirm.jsx";
import { useEffect } from "react";
import InfoCurso from "./components/organisms/InfoCurso.jsx";
import ModalConsulta from "./components/molecules/ModalConsulta.jsx";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-playfair bg-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" element={<ListCurso />} />
        <Route path="/infocurso/:id" element={<InfoCurso />} />
        <Route path="/salon" element={<SalonPage />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/modal" element={<ModalConsulta />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
