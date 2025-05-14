import React, { useState, useEffect } from "react";
import Btn from "../atoms/Btn";
// Asegúrate que esta ruta sea correcta para tu estructura de proyecto
import { servicios } from "../../assets/dataStore"; // <--- Importa los servicios

const ModalReserva = ({ isOpen, servicio, onClose, onConfirm }) => {
  // 'servicio' ahora puede tener el servicio inicial seleccionado
  const [isAddingService, setIsAddingService] = useState(false);
  const [updatedServices, setUpdatedServices] = useState([]); // Estado interno para los servicios de ESTA reserva
  const [showExitAlert, setShowExitAlert] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    // Inicializa los servicios del modal.
    if (servicio) {
      // Formatea el servicio recibido para que coincida con la estructura de updatedServices
      const servicioInicialConFormato = {
        id: `${servicio.descripcion}-${servicio.nombre}-${Date.now()}`, // Genera un ID único
        nombre: servicio.nombre,
        descripcion: servicio.descripcion,
        subDescripcion: servicio.subDescripcion,
        precio: servicio.precio,
        opcion: servicio.nombre,
      };
      setUpdatedServices([servicioInicialConFormato]);
      setIsAddingService(false); // Mostrar el resumen directamente
    } else {
      setUpdatedServices([]);
      setIsAddingService(false); // Mostrar el resumen vacío inicialmente
    }
    setSelectedOptions({});
    setShowExitAlert(false);
  }, [isOpen, servicio]); // React to changes in isOpen and the initial servicio prop

  if (!isOpen) return null;

  // --- Lógica para añadir servicio (sin cambios importantes aquí) ---
  const handleAddService = (servicioBase) => {
    const selectedOption = selectedOptions[servicioBase.descripcion];
    if (!selectedOption) {
      alert("Por favor, selecciona una opción para este servicio.");
      return;
    }

    const uniqueId = `${servicioBase.descripcion}-${
      selectedOption.nombre
    }-${Date.now()}`;

    const nuevoServicio = {
      id: uniqueId,
      nombre: servicioBase.nombre || servicioBase.descripcion,
      descripcion: servicioBase.descripcion,
      subDescripcion: servicioBase.subDescripcion,
      precio: selectedOption.precio,
      opcion: selectedOption.nombre,
    };

    setUpdatedServices((prev) => [...prev, nuevoServicio]);
    setSelectedOptions((prev) => {
      const newState = { ...prev };
      delete newState[servicioBase.descripcion];
      return newState;
    });
    setIsAddingService(false); // Volver al resumen después de añadir
  };

  // --- Lógica para eliminar servicio (sin cambios) ---
  const handleRemoveService = (idToRemove) => {
    setUpdatedServices((prevServices) =>
      prevServices.filter((s) => s.id !== idToRemove)
    );
  };

  // --- Lógica para cerrar (sin cambios) ---
  const handleClose = () => {
    if (updatedServices.length > 0 && !showExitAlert) {
      setShowExitAlert(true);
    } else {
      onClose();
    }
  };

  // --- Lógica para salir sin reservar (sin cambios) ---
  const handleExitWithoutBooking = () => {
    setShowExitAlert(false);
    onClose();
  };

  // --- Lógica para confirmar (sin cambios) ---
  const handleConfirm = () => {
    if (updatedServices.length === 0) {
      alert(
        "Debes seleccionar al menos un servicio para confirmar la reserva."
      );
      return;
    }
    console.log("Confirmando servicios desde Modal:", updatedServices);
    onConfirm(updatedServices);
  };

  // Calcular total para mostrar en el modal (sin cambios)
  const totalModal = updatedServices.reduce(
    (sum, service) => sum + service.precio,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      {/* Contenedor principal del modal */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl flex flex-col gap-4 h-[95vh] overflow-hidden">
        {/* Encabezado */}
        <div className="flex justify-between items-center border-b pb-3 flex-shrink-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold">
            {isAddingService
              ? "Añade Servicios a tu Cita"
              : "Resumen de tu Cita"}
          </h1>
          <button
            className="text-gray-500 hover:text-gray-800 text-3xl"
            onClick={handleClose}
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>
        {/* Contenido Principal (Scrollable) */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
          {/* --- Vista Resumen --- */}
          {!isAddingService && (
            <div className="space-y-4">
              {updatedServices.length > 0 ? (
                updatedServices.map((s) => (
                  <div
                    key={s.id}
                    className="border border-gray-200 p-4 rounded-lg shadow-sm space-y-2 relative bg-gray-50"
                  >
                    <h2 className="text-lg font-semibold text-gray-800">
                      {s.nombre}
                    </h2>
                    <p className="text-sm text-gray-700 italic">
                      Opción: {s.opcion}
                    </p>
                    <div className="text-gray-900 font-bold">
                      <span>Precio:</span>
                      <span className="font-numeros ml-2 text-indigo-600">
                        ${s.precio.toLocaleString("es-ES")}
                      </span>
                    </div>
                    <button
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xs font-semibold p-1 bg-red-100 rounded"
                      onClick={() => handleRemoveService(s.id)}
                      aria-label={`Eliminar ${s.nombre} (${s.opcion})`}
                    >
                      Eliminar
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 py-10">
                  Aún no has añadido servicios a tu cita. Haz clic en "Agregar
                  otro servicio".
                </p>
              )}

              {/* Botón para ir a añadir más servicios */}
              <div className="pt-4 border-t mt-4">
                <p className="text-center text-gray-700 pb-2">
                  ¿Quieres agregar otro servicio a esta cita?
                </p>
                <Btn
                  text="＋ Agregar Servicio"
                  onClick={() => setIsAddingService(true)}
                  className="w-full border border-gray-300 text-gray-800 hover:bg-gray-100"
                  bgColor="bg-transparent"
                  textColor="text-gray-800"
                  disableHover={false}
                />
              </div>
            </div>
          )}
          {/* --- Vista Añadir Servicio --- */}
          {isAddingService && (
            <div className="space-y-4">
              {/* Usamos el array 'servicios' importado */}
              {Array.isArray(servicios) && servicios.length > 0 ? (
                servicios.map((servicioBase, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white"
                  >
                    <h2 className="text-lg font-semibold text-gray-800">
                      {servicioBase.nombre || servicioBase.descripcion}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1 mb-3">
                      {servicioBase.subDescripcion}
                    </p>
                    <div className="space-y-2">
                      {/* Opciones como Radio Buttons */}
                      {servicioBase.opciones.map((op, i) => (
                        <label
                          key={i}
                          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`opcion-${servicioBase.descripcion}`}
                            value={op.nombre}
                            checked={
                              selectedOptions[servicioBase.descripcion]
                                ?.nombre === op.nombre
                            }
                            onChange={() =>
                              setSelectedOptions((prev) => ({
                                ...prev,
                                [servicioBase.descripcion]: op,
                              }))
                            }
                            className="form-radio h-4 w-4 text-indigo-600"
                          />
                          <span className="flex-1 text-sm text-gray-700">
                            {op.nombre}
                          </span>
                          <span className="text-sm font-semibold font-numeros text-indigo-600">
                            ${op.precio.toLocaleString("es-ES")}
                          </span>
                        </label>
                      ))}
                    </div>
                    {/* Botón para añadir la opción seleccionada de este servicio */}
                    <button
                      onClick={() => handleAddService(servicioBase)}
                      disabled={!selectedOptions[servicioBase.descripcion]}
                      className={`mt-3 w-full text-sm px-4 py-2 rounded ${
                        !selectedOptions[servicioBase.descripcion]
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                    >
                      Añadir Selección
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">
                  No hay servicios disponibles para añadir.
                </p>
              )}

              {/* Botón para volver al resumen si ya hay servicios añadidos */}
              {updatedServices.length > 0 && (
                <Btn
                  text="← Volver al Resumen"
                  onClick={() => setIsAddingService(false)}
                  className="w-full mt-4 border border-gray-300 text-gray-800 hover:bg-gray-100"
                  bgColor="bg-transparent"
                  textColor="text-gray-800"
                />
              )}
            </div>
          )}
        </div>
        {/* Footer del Modal */}
        <div className="border-t pt-4 flex-shrink-0 space-y-3">
          <div className="flex justify-between items-center text-xl font-semibold">
            <span className="text-gray-700">Total Estimado:</span>
            <span className="font-numeros text-indigo-700">
              ${totalModal.toLocaleString("es-ES")}
            </span>
          </div>
          {/* Botón Confirmar sólo visible en la vista de resumen */}
          {!isAddingService && (
            <Btn
              text="Confirmar Reserva"
              onClick={handleConfirm}
              disabled={updatedServices.length === 0}
              className={`w-full text-lg ${
                updatedServices.length === 0
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            />
          )}
        </div>
      </div>
      {/* Alerta de Salida */}
      {showExitAlert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          aria-modal="true"
          role="alertdialog"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm flex flex-col gap-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setShowExitAlert(false)}
              aria-label="Cerrar alerta"
            >
              &times;
            </button>
            <h2 className="text-center text-xl font-semibold text-gray-900 mt-4">
              ¿Salir sin reservar?
            </h2>
            <p className="text-center text-gray-700 text-sm">
              Si sales ahora, los servicios que seleccionaste no se guardarán en
              tu cita.
            </p>
            <div className="flex gap-4 mt-4">
              <Btn
                text="No reservar"
                onClick={handleExitWithoutBooking}
                className="w-full !text-red-600 bg-transparent border border-red-500 hover:bg-red-50 !py-2"
                bgColor="bg-transparent"
                textColor="text-red-600"
              />
              <Btn
                text="Seguir reservando"
                onClick={() => setShowExitAlert(false)}
                className="w-full !py-2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalReserva;
