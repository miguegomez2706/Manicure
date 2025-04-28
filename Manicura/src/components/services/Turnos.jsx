import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../atoms/Btn";
import { servicios } from "../../assets/dataStore"; // Importa los servicios
import ModalReserva from "./ModalReserva";

const Turnos = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (servicio) => {
    setSelectedService(servicio); // Establece el servicio seleccionado
    setModalOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setModalOpen(false); // Cierra el modal
    setSelectedService(null); // Limpia el servicio seleccionado
  };

  const addMoreService = () => {
    setModalOpen(false); // Cierra el modal actual
    setSelectedService(null); // Limpia el servicio seleccionado
    // Lógica para permitir la selección de otro servicio
    // Esta función puede abrir de nuevo la lista de servicios
  };

  const confirmReserva = () => {
    // Lógica para confirmar la reserva
    navigate("/reserva"); // Redirige a la página de reserva
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 animate-fade-in transition-opacity duration-700 ease-in-out">
      <h1 className="font-playfair text-4xl md:text-6xl py-8 mb-6 text-gray-800 text-center w-full">
        Servicios Disponibles
      </h1>
      <div className="w-full max-w-4xl space-y-6">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="w-full sm:w-auto max-w-4xl bg-white pt-10 pb-6 border-t border-black flex flex-col items-start"
          >
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4">
              {servicio.nombre}
            </h2>
            <hr className="my-4 border-gray-300 w-full" />
            <p className="text-sm sm:text-[1.2rem] text-gray-700 mb-5">
              {servicio.descripcion}
            </p>
            <p className="text-sm sm:text-lg text-gray-900">
              Precio:
              <span className="font-numeros font-bold ml-2">
                ${servicio.precio.toLocaleString("es-ES")}
              </span>
            </p>
            {/* <Btn
              text="Reservar ahora" // Texto del botón
              onClick={() => openModal(servicio)} // Acción para abrir el modal con el servicio seleccionado
              className="w-full px-7 py-3 bg-button text-white cursor-pointer text-xl mt-8 sm:mt-4 border-2 border-solid border-gray-900 hover:bg-buttonHover hover:border-gray-900"
            /> */}
          </div>
        ))}
      </div>

      {/* 🟢 MODAL */}
      <ModalReserva
        isOpen={modalOpen}
        servicio={selectedService} // Aquí pasamos el servicio seleccionado
        onClose={closeModal}
        onConfirm={confirmReserva} // Confirmar la reserva
        onAddMore={addMoreService} // Agregar más servicios
      />
    </div>
  );
};

export default Turnos;
