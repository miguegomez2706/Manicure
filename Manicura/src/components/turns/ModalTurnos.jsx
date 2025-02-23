import React from "react";
import "./ModalTurnos.css"; // Archivo de estilos

const ModalTurnos = ({ isOpen, onClose, servicios }) => {
  return (
    // Uso de ternaria
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h1>Servicios disponibles</h1>

        {servicios.map((servicio, index) => (
          <div key={index} className="servicio">
            <h2>{servicio.nombre}</h2>
            <p>{servicio.descripcion}</p>
            <p>Precio: ${servicio.precio}</p>
            <button>Reservar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalTurnos;
