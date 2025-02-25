import { useNavigate } from "react-router-dom";

import React from "react";
import "./ModalTurnos.css"; // Archivo de estilos

const ModalTurnos = ({ isOpen, onClose, servicios }) => {
  const navigate = useNavigate();

  return (
    <body>
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h1 className="titulo">Servícios disponíbles.</h1>
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio">
            <h2>{servicio.nombre}</h2>
            <hr className="servicio-linea" />
            <p>{servicio.descripcion}</p>
            <p>Precio: $ <span className="precio">{servicio.precio}</span></p>
            <button onClick={() => navigate("/reserva")}>Reservar ahora</button>
          </div>
        ))}
      </div>
    </div>

    </body>
  );
};

export default ModalTurnos;
