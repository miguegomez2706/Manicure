import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/molecules/navbar/navbar.jsx";
import Footer from "./components/molecules/Footer.jsx";
import SalonPage from "./components/salonPage/SalonPage.jsx";
import HomePage from "./components/organisms/HomePage.jsx";
import Reserva from "./components/services/Reserva.jsx";
import Turnos from "./components/services/Turnos.jsx";
import ListCurso from "./components/organisms/ListCurso.jsx";
import Confirm from "./components/services/Confirm.jsx";
import { useEffect } from "react";
import InfoCurso from "./components/organisms/InfoCurso.jsx";
import ModalConsulta from "./components/molecules/ModalConsulta.jsx";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <div className="font-playfair bg-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cursos" element={<ListCurso />} />
          <Route path="/salon" element={<SalonPage />} />
          <Route path="/Turnos" element={<Turnos />} />
          <Route path="/Reserva" element={<Reserva />} />
          <Route path="/InfoCurso" element={<InfoCurso />} />
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/Modal" element={<ModalConsulta />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
//        <Route path="/Modal" element={<ModalConsulta />} />
