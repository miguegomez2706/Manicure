import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../atoms/Btn";
import { servicios } from "../../assets/dataStore";
import ModalReserva from "./ModalReserva";
import fondo from "../../assets/image/fondo/glamorous.svg";

const Turnos = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (servicio) => {
    setSelectedService(servicio);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const addMoreService = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const confirmReserva = () => {
    navigate("/reserva");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center p-6 overflow-hidden ">
      {/* Fondo con opacidad */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#fecdd3",
          WebkitMaskImage: `url(${fondo})`,
          maskImage: `url(${fondo})`,
          WebkitMaskRepeat: "repeat",
          maskRepeat: "repeat",
          WebkitMaskSize: "auto",
          maskSize: "auto",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-6xl animate-fade-in">
        <h1 className="font-playfair text-4xl md:text-6xl py-8  mb-6 text-title text-center w-full">
          Servicios Disponibles
        </h1>

        <div className="space-y-6 bg-transparent bg-opacity-80 backdrop-blur-md">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className=" pt-10 pb-6 border-t border-title flex flex-col items-start"
            >
              <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4 px-8">
                {servicio.nombre}
              </h2>
              <hr className="my-4 border-gray-300 w-full" />
              <p className="text-sm sm:text-[1.2rem] text-gray-700 mb-5 px-8 font-semibold">
                {servicio.descripcion}
              </p>
              <div className="w-[70%]">
                <p className="text-sm sm:text-[1.2rem] text-gray-700 mb-5 px-8">
                  {servicio.subDescripcion}
                </p>
              </div>
              <div className="w-full space-y-2 px-8">
                {servicio.opciones.map((opcion, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-sm sm:text-lg text-gray-800"
                  >
                    <span>{opcion.nombre}</span>
                    <span className="font-numeros font-semibold">
                      ${opcion.precio.toLocaleString("es-ES")}
                    </span>
                  </div>
                ))}
              </div>
              {/* <Btn
                text="Reservar ahora"
                onClick={() => openModal(servicio)}
                className="w-full px-7 py-3 bg-button text-white cursor-pointer text-xl mt-8 sm:mt-4 border-2 border-solid border-gray-900 hover:bg-buttonHover hover:border-gray-900"
              /> */}
            </div>
          ))}
        </div>
      </div>

      <ModalReserva
        isOpen={modalOpen}
        servicio={selectedService}
        onClose={closeModal}
        onConfirm={confirmReserva}
        onAddMore={addMoreService}
      />
    </div>
  );
};

export default Turnos;
