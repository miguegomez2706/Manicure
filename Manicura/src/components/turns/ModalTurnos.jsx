import { useNavigate } from "react-router-dom";
import Btn from "../atoms/Btn";
import "./ModalTurnos.css"; // Archivo de estilos

const ModalTurnos = ({ isOpen, onClose, servicios }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
          <div className="close-btn-contenedor">
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
          </div>

          <h1 className="titulo">Servícios disponíbles.</h1>
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio">
              <h2>{servicio.nombre}</h2>
              <hr className="servicio-linea" />
              <p>{servicio.descripcion}</p>
              <p>
                Precio: $ <span className="precio">{servicio.precio}</span>
              </p>
              
              <Btn 
                rounded={true}
                type={"primary"}
                buttonText={"Reservar Ahora!"}
                onClick={() => navigate("/reserva")}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ModalTurnos;
