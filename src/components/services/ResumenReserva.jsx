import React from "react";
import Btn from "../atoms/Btn";

const ResumenReserva = ({
  date,
  horarioSeleccionado,
  serviciosDeLaReserva,
  notaAdicional,
  direccion,
}) => {
  const totalReservaConfirmada = serviciosDeLaReserva.reduce(
    (sum, service) => sum + service.precio,
    0
  );

  return (
    <div className="p-5 shadow-lg rounded-lg bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          Resumen de la cita.
        </h3>
        {/* <Btn
          text="editar"
          onClick={handleOpenModal}
          disabled={!fechaHoraSeleccionada}
          className={`w-auto mt-4 text-sm px-3 py-1 ml-auto  ${
            !fechaHoraSeleccionada ? "opacity-50 cursor-not-allowed" : ""
          }`}
        /> */}
        <p className="text-gray-600 mb-2">Fecha seleccionada:</p>
        <p className="font-semibold text-lg text-indigo-700 mb-4">
          {date.toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-gray-600 mb-2">Hora seleccionada:</p>
        <p
          className={`font-semibold text-lg mb-4 ${
            horarioSeleccionado ? "text-indigo-700" : "text-gray-400"
          }`}
        >
          {horarioSeleccionado ? horarioSeleccionado : "Pendiente..."}
        </p>
        {direccion && (
          <p className="mt-2 text-sm text-gray-700">
            📍 Necochea 307 OF 3, H3500 Resistencia
          </p>
        )}

        {serviciosDeLaReserva.length > 0 && (
          <div>
            <h4 className="text-lg font-medium text-gray-700 mt-4 mb-3 border-t pt-3">
              Servicios Seleccionados:
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
              {serviciosDeLaReserva.map((servicio) => (
                <li key={servicio.id}>
                  {servicio.nombre || servicio.descripcion} ({servicio.opcion})
                  <span className="font-numeros font-semibold ml-2 float-right text-indigo-600">
                    ${servicio.precio.toLocaleString("es-ES")}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xl font-bold text-indigo-700 border-t pt-3">
              Total:{" "}
              <span className="font-numeros float-right">
                ${totalReservaConfirmada.toLocaleString("es-ES")}
              </span>
            </p>
          </div>
        )}
      </div>
      {notaAdicional && (
        <p className="mt-4 text-sm text-gray-500 italic border-t pt-4">
          {notaAdicional}
        </p>
      )}
    </div>
  );
};

export default ResumenReserva;
