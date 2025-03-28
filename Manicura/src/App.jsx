import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/molecules/navbar/navbar.jsx";
import Footer from "./components/molecules/Footer.jsx";
import SalonPage from "./components/salonPage/SalonPage.jsx";
import HomePage from "./components/organisms/HomePage.jsx";
import Reserva from "./components/turns/Reserva.jsx";
import Turnos from "./components/turns/Turnos.jsx";
import ListCurso from "./components/organisms/ListCurso.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <div className="font-playfair">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cursos" element={<ListCurso />} />
          <Route path="/salon" element={<SalonPage />} />
          <Route path="/Turnos" element={<Turnos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
