import React from "react";

const ModalReserva = ({ isOpen, servicio, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Confirmar Reserva
        </h2>
        {servicio ? (
          <p>
            ¿Quieres reservar el servicio <b>{servicio.nombre}</b> por{" "}
            <b>${servicio.precio}</b>?
          </p>
        ) : (
          <p>Cargando...</p>
        )}
        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-400 px-4 py-2 rounded-md text-white hover:bg-gray-500"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700"
            onClick={onConfirm}
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalReserva;
