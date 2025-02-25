import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/molecules/navbar/navbar.jsx";
import Footer from "./components/molecules/Footer.jsx";
import SalonPage from "./components/salonPage/SalonPage.jsx";
import HomePage from "./components/organisms/HomePage.jsx";



function App() {
  return (
    <Router>
      <div className="font-rale">
        <Navbar />
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<HomePage/>}
          />
          {/* Nueva página con info del salón */}
          <Route path="/salon" element={<SalonPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
