import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import Btn from "../atoms/Btn";
import "./Reserva.css";

const Reserva = () => {
  const [date, setDate] = useState(null);
  const [disponible, setDisponible] = useState(null);
  const navigate = useNavigate();

  const verificarDisponibilidad = () => {
    // Simulamos disponibilidad aleatoria por ahora
    const disponible = Math.random() > 0.5;
    setDisponible(disponible);
  };

  return (
    <div className="reserva-container">
      {/* Sección 1: Calendario */}
      <div className="seccion">
        <h2>Selecciona una fecha</h2>
        <Calendar onChange={setDate} value={date} />
      </div>
      
      {/* Sección 2: Disponibilidad */}
      <div className="seccion disponibilidad">
        <h2>Disponibilidad</h2>
        {date && (
          <>
            <p>{disponible === null ? "Selecciona una fecha" : disponible ? "Horario disponible!" : "No disponible, intenta otro horario"}</p>
            <Btn buttonText="Próxima sesión disponible" onClick={verificarDisponibilidad} type="primary" rounded={true} />
          </>
        )}
      </div>
      
      {/* Sección 3: Resumen */}
      <div className="seccion resumen">
        <h2>Resumen de la reserva</h2>
        {date && disponible && (
          <>
            <p>Fecha seleccionada: {date.toLocaleDateString()}</p>
            <Btn buttonText="Siguiente" onClick={() => navigate("/confirmacion")} type="primary" rounded={true} />
          </>
        )}
      </div>
    </div>
  );
};

export default Reserva;
