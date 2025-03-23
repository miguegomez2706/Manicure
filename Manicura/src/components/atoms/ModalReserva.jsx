import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "./Btn";

const ModalReserva = ({
  isOpen,
  servicio,
  onClose,
  onConfirm,
  onAddService,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl h-screen flex flex-col gap-10">
        {/* 🔹 HEADER con TÍTULO + BOTÓN CERRAR */}
        <div className="flex justify-between items-center border-b py-1">
          <h1 className="text-3xl  text-gray-900 mb-7">Resumen de la Cita</h1>
          <button
            className="text-gray-600 hover:text-gray-900 text-2xl mb-7"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        {/* 🔹 CONTENEDOR DEL RESUMEN */}
        <div className="flex-1 flex flex-col justify-center">
          {servicio ? (
            <div className="border border-gray-300 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 leading-10">
                {servicio.nombre}
              </h2>
              <h3 className="text-xl text-gray-800 mb-2 leading-10">
                Necochea 307 OF 3, H3500
              </h3>
              <p className="text-gray-700 leading-10">
                Precio:
                <span className="font-numeros font-bold ml-2">
                  ${servicio.precio.toLocaleString("es-ES")}
                </span>
              </p>
            </div>
          ) : (
            <p className="text-center text-gray-600">Cargando...</p>
          )}
        </div>

        {/* 🔹 SECCIÓN DE AGREGAR SERVICIOS */}
        <div className="flex flex-col justify-center items-centern mb-10">
          <h2 className="text-lg text-gray-900 text-center">
            ¿Deseas agregar otro servicio?
          </h2>
          <Btn
            onClick={() => console.log("Ir a Turnos")} // Puedes ejecutar alguna acción antes de la navegación
            text="＋ Agregar otro servicio "
            to="/turnos" // Ruta a la que llevará el botón
            textColor="text-black"
            bgColor="transparent"
          />
        </div>

        {/* 🔹 BOTÓN DE CONFIRMACIÓN */}
        <div className="border-t flex justify-center">
          <button
            onClick={() => navigate("/turnos")}
            className="w-full px-7 py-3 bg-button text-white cursor-pointer text-xl mt-8 sm:mt-4 border-2 border-solid border-gray-900 hover:bg-buttonHover hover:border-gray-900 bg-gray-900 hover:underline"
          >
            Programar cita
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalReserva;
