import React, { useState, useEffect } from "react";
import Btn from "../atoms/Btn";
import { servicios } from "../../assets/dataStore";

const ModalReserva = ({ isOpen, servicio, onClose, onConfirm }) => {
  const [isAddingService, setIsAddingService] = useState(false);
  const [updatedServices, setUpdatedServices] = useState([]);
  const [showExitAlert, setShowExitAlert] = useState(false);
  // const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    if (servicio) {
      setUpdatedServices([servicio]);
    } else {
      setUpdatedServices([]);
    }
  }, [servicio]);

  if (!isOpen) return null;

  const handleAddService = (servicioBase) => {
    const selectedOption = selectedOptions[servicioBase.descripcion];
    if (!selectedOption) return;

    const uniqueId = `${servicioBase.descripcion}-${selectedOption.nombre}`;

    // evitar duplicados
    if (!updatedServices.some((s) => s.id === uniqueId)) {
      const nuevoServicio = {
        id: uniqueId,
        nombre: servicioBase.nombre || servicioBase.descripcion,
        descripcion: servicioBase.descripcion,
        subDescripcion: servicioBase.subDescripcion,
        precio: selectedOption.precio,
        opcion: selectedOption.nombre,
      };
      setUpdatedServices((prev) => [...prev, nuevoServicio]);
      setIsAddingService(false);
    }
  };

  const handleRemoveService = (index) => {
    setUpdatedServices((prevServices) =>
      prevServices.filter((_, i) => i !== index)
    );
  };

  const handleClose = () => {
    if (updatedServices.length > 0) {
      setShowExitAlert(true);
    } else {
      onClose();
    }
  };

  const handleExitWithoutBooking = () => {
    setShowExitAlert(false);
    onClose();
  };

  const handleConfirm = () => {
    console.log("reserva");
    if (updatedServices.length > 0) {
      onConfirm(updatedServices);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col gap-6 h-screen">
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-3xl text-gray-900">
            {isAddingService
              ? "Selecciona otro servicio"
              : "Resumen de la Cita"}
          </h1>
          <button
            className="text-gray-600 hover:text-gray-900 text-2xl"
            onClick={handleClose}
          >
            ✖
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
          {!isAddingService && (
            <div className="space-y-4">
              {updatedServices.length > 0 ? (
                updatedServices.map((s, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 p-4 rounded-lg space-y-2"
                  >
                    <h2 className="text-xl font-semibold text-gray-800">
                      {s.nombre}
                    </h2>
                    <p className="text-gray-700">{s.descripcion}</p>
                    <p className="text-gray-700 italic">Opción: {s.opcion}</p>
                    <div className="text-gray-900 font-bold">
                      <span>Precio:</span>
                      <span className="font-numeros ml-2">
                        ${s.precio.toLocaleString("es-ES")}
                      </span>
                    </div>
                    <button
                      className="text-red-600 hover:text-red-800 mt-2"
                      onClick={() => handleRemoveService(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No hay servicios seleccionados</p>
              )}

              <p className="text-center text-gray-700 pb-2 mt-4">
                ¿Quieres agregar otro servicio a esta cita?
              </p>
              <Btn
                text="＋ Agregar otro servicio"
                onClick={() => setIsAddingService(true)}
                className="bg-transparent border border-gray-300 text-gray-900 px-4 py-2 rounded"
                textColor="text-black"
                disableHover={true}
              />
            </div>
          )}

          {isAddingService && (
            <div className="space-y-4">
              {Array.isArray(servicios) && servicios.length > 0 ? (
                servicios.map((servicio, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 p-4 rounded-lg"
                  >
                    <h2 className="text-xl font-semibold text-gray-800">
                      {servicio.nombre || servicio.descripcion}
                    </h2>
                    <p className="text-gray-700">{servicio.subDescripcion}</p>
                    <div className="mt-2 space-y-2">
                      {servicio.opciones.map((op, i) => (
                        <label key={i} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name={`opcion-${index}`}
                            value={op.nombre}
                            checked={
                              selectedOptions[servicio.descripcion]?.nombre ===
                              op.nombre
                            }
                            onChange={() =>
                              setSelectedOptions((prev) => ({
                                ...prev,
                                [servicio.descripcion]: op,
                              }))
                            }
                          />
                          {op.nombre} - ${op.precio.toLocaleString("es-ES")}
                        </label>
                      ))}
                    </div>
                    <button
                      onClick={() => handleAddService(servicio)}
                      className="mt-2 text-sm bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700"
                    >
                      Agregar este servicio
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No hay servicios disponibles</p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {isAddingService && (
            <Btn
              text="Volver al resumen"
              onClick={() => setIsAddingService(false)}
              className="bg-transparent border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100 w-full"
              textColor="text-gray-900"
              disableHover={true}
            />
          )}
          <Btn text="Confirmar Reserva" onClick={handleConfirm} />
        </div>
      </div>

      {showExitAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-90 h-96 flex flex-col gap-4 relative">
            <button
              className="absolute top-4 right-5 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setShowExitAlert(false)}
            >
              ✖
            </button>
            <h2 className="text-center text-4xl text-gray-900 mt-20">
              ¿Salir sin reservar?
            </h2>
            <p className="text-center text-gray-900 mt-3">
              Si te vas ahora, tu cita no se guardará.
            </p>
            <div className="flex gap-4 mt-auto">
              <Btn
                text="No reservar"
                onClick={handleExitWithoutBooking}
                className="!text-black bg-transparent px-4 !py-1 w-full text-sm"
              />
              <Btn
                text="Seguir reservando"
                onClick={() => setShowExitAlert(false)}
                className="px-4 !py-1 w-full text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalReserva;
