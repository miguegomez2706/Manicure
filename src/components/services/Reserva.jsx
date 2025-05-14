import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ModalReserva from "./ModalReserva";
import Disponibilidad from "./Disponibilidad";
import Btn from "../atoms/Btn";
import { useLocation } from "react-router-dom";

const Reserva = () => {
  const [date, setDate] = useState(new Date());
  const [disponible, setDisponible] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [serviciosDeLaReserva, setServiciosDeLaReserva] = useState([]);
  const [fechaHoraSeleccionada, setFechaHoraSeleccionada] = useState(false);

  const location = useLocation();
  const serviciosRecibidos = location.state?.servicios || [];

  useEffect(() => {
    verificarDisponibilidad(date);
    setHorarioSeleccionado(null);
    setFechaHoraSeleccionada(false);
  }, [date]);

  useEffect(() => {
    if (serviciosRecibidos && serviciosRecibidos.length > 0) {
      setServiciosDeLaReserva(serviciosRecibidos);
      console.log("Servicios recibidos en Reserva:", serviciosRecibidos);
    }
  }, [serviciosRecibidos]);

  const verificarDisponibilidad = (fecha) => {
    const esDiaDeshabilitado =
      [0, 6].includes(fecha.getDay()) ||
      fecha.toDateString() === "Tue May 27 2025";
    setDisponible(!esDiaDeshabilitado);
  };

  const handleHorarioSeleccionado = (hora) => {
    setHorarioSeleccionado(hora);
    setFechaHoraSeleccionada(true);
  };

  const buscarProximaDisponibilidad = () => {
    let nuevaFecha = new Date(date);
    do {
      nuevaFecha.setDate(nuevaFecha.getDate() + 1);
    } while (
      [0, 6].includes(nuevaFecha.getDay()) ||
      nuevaFecha.toDateString() === "Tue May 27 2025"
    );
    setDate(nuevaFecha);
  };

  const handleOpenModal = () => {
    if (!horarioSeleccionado) {
      alert("Por favor, selecciona un horario antes de continuar.");
      return;
    }
    setModalOpen(true);
  };

  const handleConfirmReserva = (serviciosConfirmados) => {
    console.log("Reserva confirmada con servicios:", serviciosConfirmados);
    console.log("Fecha:", date.toDateString());
    console.log("Hora:", horarioSeleccionado);
    setServiciosDeLaReserva(serviciosConfirmados);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNewReservation = () => {
    setDate(new Date());
    setHorarioSeleccionado(null);
    setServiciosDeLaReserva([]);
    setFechaHoraSeleccionada(false);
  };

  const totalReservaConfirmada = serviciosDeLaReserva.reduce(
    (sum, service) => sum + service.precio,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
          Programa tu cita
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Revisa nuestra disponibilidad y reserva la fecha y hora que más te
          convengan.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 shadow-lg rounded-lg bg-white flex flex-col">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
            1. Selecciona la fecha
          </h3>
          <div className="flex justify-center">
            <Calendar
              minDate={new Date()}
              tileDisabled={({ date }) =>
                [0, 6].includes(date.getDay()) ||
                date.toDateString() === "Tue May 27 2025"
              }
              onChange={setDate}
              value={date}
              className="react-calendar p-0 border-0"
              showNeighboringMonth={false}
            />
          </div>
        </div>

        <Disponibilidad
          date={date}
          disponible={disponible}
          horarioSeleccionado={horarioSeleccionado}
          handleHorarioSeleccionado={handleHorarioSeleccionado}
          buscarProximaDisponibilidad={buscarProximaDisponibilidad}
        />

        <div className="p-5 shadow-lg rounded-lg bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Resumen de la cita.
            </h3>
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

            {serviciosDeLaReserva.length > 0 && (
              <div>
                <h4 className="text-lg font-medium text-gray-700 mt-4 mb-3 border-t pt-3">
                  Servicios Seleccionados:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
                  {serviciosDeLaReserva.map((servicio) => (
                    <li key={servicio.id}>
                      {servicio.nombre || servicio.descripcion} (
                      {servicio.opcion})
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

          <Btn
            text="3. Seleccionar Servicios"
            onClick={handleOpenModal}
            disabled={!fechaHoraSeleccionada}
            className={`w-full mt-4 text-lg py-3 ${
              !fechaHoraSeleccionada ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </div>
      </div>

      <ModalReserva
        isOpen={modalOpen}
        // servicio={serviciosRecibidos.length > 0 ? serviciosRecibidos[0] : null}
        serviciosIniciales={serviciosDeLaReserva}
        onClose={handleCloseModal}
        onConfirm={handleConfirmReserva}
      />
    </div>
  );
};

export default Reserva;
