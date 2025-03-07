import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/molecules/navbar/navbar.jsx";
import Footer from "./components/molecules/Footer.jsx";
import SalonPage from "./components/salonPage/SalonPage.jsx";
import HomePage from "./components/organisms/HomePage.jsx";
import Reserva from "./components/turns/Reserva.jsx";
import ModalTurnos from "./components/turns/ModalTurnos.jsx";

function App() {
  return (
    <Router>
      <div className="font-rale">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/salon" element={<SalonPage />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/modal" element={<ModalTurnos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
