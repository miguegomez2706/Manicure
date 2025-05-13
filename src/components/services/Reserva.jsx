import React, { useState, useEffect } from "react"; // Asegúrate de tener React importado
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ModalReserva from "./ModalReserva";
// import ResumenReserva from "./ResumenReserva"; // Puedes usarlo si quieres encapsular la vista de confirmación
import Disponibilidad from "./Disponibilidad";
import Btn from "../atoms/Btn";

const Reserva = () => {
  const [date, setDate] = useState(new Date());
  const [disponible, setDisponible] = useState(null);
  // const [servicioSeleccionado, setServicioSeleccionado] = useState(null); // Ya no necesitamos estado para servicio *inicial*
  const [modalOpen, setModalOpen] = useState(false);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [serviciosDeLaReserva, setServiciosDeLaReserva] = useState([]); // Guarda los servicios confirmados

  // Verificar disponibilidad (sin cambios)
  const verificarDisponibilidad = (fecha) => {
    console.log("Verificando disponibilidad para:", fecha.toDateString());
    const esDiaDeshabilitado =
      [0, 6].includes(fecha.getDay()) ||
      fecha.toDateString() === "Tue May 27 2025";
    // Aquí iría tu lógica real de API o chequeo de horarios si la tuvieras
    setDisponible(!esDiaDeshabilitado);
  };

  // --- ELIMINADO useEffect que leía de localStorage ---

  // Verificar disponibilidad cuando cambia la fecha (sin cambios)
  useEffect(() => {
    verificarDisponibilidad(date);
    // Resetear hora y reserva confirmada si cambia la fecha y ya había algo confirmado
    if (serviciosDeLaReserva.length > 0) {
      setServiciosDeLaReserva([]); // Limpiar reserva anterior
    }
    setHorarioSeleccionado(null);
  }, [date]); // Quitar dependencia serviciosDeLaReserva para evitar bucle

  // Función para manejar la selección de horario (sin cambios)
  const handleHorarioSeleccionado = (hora) => {
    console.log("Horario seleccionado:", hora);
    setHorarioSeleccionado(hora);
    // Limpiar reserva anterior si seleccionan nueva hora
    if (serviciosDeLaReserva.length > 0) {
      setServiciosDeLaReserva([]);
    }
  };

  // Función para buscar próxima disponibilidad (sin cambios)
  const buscarProximaDisponibilidad = () => {
    let nuevaFecha = new Date(date);
    do {
      // Asegura avanzar al menos un día y saltar deshabilitados
      nuevaFecha.setDate(nuevaFecha.getDate() + 1);
    } while (
      [0, 6].includes(nuevaFecha.getDay()) ||
      nuevaFecha.toDateString() === "Tue May 27 2025"
    );

    setDate(nuevaFecha);
  };

  // Función para abrir el modal (sin cambios en la lógica principal)
  const handleOpenModal = () => {
    if (!horarioSeleccionado) {
      alert("Por favor, selecciona un horario antes de continuar.");
      return;
    }
    // Limpiar reserva anterior justo antes de abrir el modal para una nueva selección
    setServiciosDeLaReserva([]);
    console.log("Abriendo modal para seleccionar servicios...");
    setModalOpen(true);
  };

  // Función que se ejecuta al confirmar en el modal (SIN localStorage)
  const handleConfirmReserva = (serviciosConfirmados) => {
    console.log("Reserva confirmada con servicios:", serviciosConfirmados);
    console.log("Fecha:", date.toDateString());
    console.log("Hora:", horarioSeleccionado);

    // Guarda los servicios confirmados en el estado local
    setServiciosDeLaReserva(serviciosConfirmados);

    // --- ELIMINADO localStorage.setItem ---

    setModalOpen(false); // Cierra el modal

    // Podrías mostrar un mensaje más integrado en la UI en lugar de alert
    // Ejemplo: setMensajeConfirmacion("¡Reserva confirmada con éxito!");
    // alert("¡Reserva confirmada con éxito!"); // Quitar alert si usas mensaje en UI
  };

  // Función para cerrar el modal (sin confirmar) (sin cambios)
  const handleCloseModal = () => {
    console.log("Cerrando modal sin confirmar");
    setModalOpen(false);
  };

  // Función para resetear y hacer nueva reserva (SIN localStorage)
  const handleNewReservation = () => {
    setServiciosDeLaReserva([]);
    setHorarioSeleccionado(null);
    // Opcional: resetear fecha
    // setDate(new Date());
    // --- ELIMINADO localStorage.removeItem ---
    console.log("Formulario reseteado para nueva reserva.");
  };

  // Calcular total para mostrar en la confirmación
  const totalReservaConfirmada = serviciosDeLaReserva.reduce(
    (sum, service) => sum + service.precio,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {" "}
      {/* Ajustado padding y bg */}
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
          Programa tu cita
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Revisa nuestra disponibilidad y reserva la fecha y hora que más te
          convengan.
        </p>
      </header>
      {/* Contenedor Principal: Pasos de Reserva O Vista de Confirmación */}
      {serviciosDeLaReserva.length === 0 ? (
        // --- Vista de Selección (cuando no hay reserva confirmada) ---
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna 1: Calendario */}
          <div className="p-5 shadow-lg rounded-lg bg-white flex flex-col">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              1. Selecciona la fecha
            </h3>
            <div className="flex justify-center">
              <Calendar
                minDate={new Date()} // No permitir fechas pasadas
                // maxDate={...} // Puedes definir un límite futuro
                tileDisabled={
                  ({ date }) =>
                    [0, 6].includes(date.getDay()) || // Domingos y Sábados
                    date.toDateString() === "Tue May 27 2025" // Ejemplo día específico
                }
                onChange={setDate}
                value={date}
                className="react-calendar p-0 border-0" // Quitar borde por defecto y ajustar
                showNeighboringMonth={false}
              />
            </div>
          </div>

          {/* Columna 2: Disponibilidad */}
          {/* Pasamos date y las funciones necesarias a Disponibilidad */}
          <Disponibilidad
            date={date}
            disponible={disponible} // El estado de si el día está disponible en general
            horarioSeleccionado={horarioSeleccionado}
            handleHorarioSeleccionado={handleHorarioSeleccionado}
            buscarProximaDisponibilidad={buscarProximaDisponibilidad}
            // Aquí podrías pasar horarios específicos si los tuvieras
          />

          {/* Columna 3: Siguiente Paso */}
          <div className="p-5 shadow-lg rounded-lg bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
                Resumen de la reserva.
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
            </div>

            {/* Botón para abrir el modal, habilitado solo si hay horario */}
            <Btn
              text="3. Seleccionar Servicios"
              onClick={handleOpenModal}
              disabled={!horarioSeleccionado} // Deshabilitado si no hay hora
              className={`w-full mt-4 text-lg py-3 ${
                !horarioSeleccionado ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />
          </div>
        </div> // --- Fin Vista de Selección ---
      ) : (
        // --- Vista de Confirmación (cuando serviciosDeLaReserva tiene datos) ---
        <div className="mt-6 p-6 bg-green-50 border border-green-300 rounded-lg shadow-lg animate-fade-in">
          {" "}
          {/* Animación simple */}
          <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }`}</style>
          <h3 className="text-2xl md:text-3xl text-green-800 mb-5 font-semibold border-b border-green-200 pb-3 text-center">
            🎉 ¡Reserva Confirmada! 🎉
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Detalles Fecha y Hora */}
            <div className="bg-white p-4 rounded shadow border border-gray-200">
              <p className="mb-2 text-lg">
                <strong className="text-gray-700">Fecha:</strong>{" "}
                <span className="text-gray-900">
                  {new Date(date).toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </p>
              <p className="text-lg">
                <strong className="text-gray-700">Hora:</strong>{" "}
                <span className="text-gray-900">{horarioSeleccionado}</span>
              </p>
            </div>

            {/* Detalles Servicios y Total */}
            <div className="bg-white p-4 rounded shadow border border-gray-200">
              <h4 className="text-lg font-medium text-gray-700 mb-3">
                Servicios Reservados:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
                {serviciosDeLaReserva.map((servicio) => (
                  <li key={servicio.id}>
                    {servicio.nombre || servicio.descripcion} ({servicio.opcion}
                    )
                    <span className="font-numeros font-semibold ml-2 float-right text-indigo-600">
                      ${servicio.precio.toLocaleString("es-ES")}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Total */}
              <p className="mt-4 text-xl font-bold text-green-900 border-t pt-3">
                Total:{" "}
                <span className="font-numeros float-right">
                  ${totalReservaConfirmada.toLocaleString("es-ES")}
                </span>
              </p>
            </div>
          </div>
          {/* Botón para realizar una nueva reserva */}
          <div className="text-center mt-8">
            <Btn
              text="Hacer Otra Reserva"
              onClick={handleNewReservation} // Llama a la función de reseteo
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-base"
              textColor="text-white"
            />
          </div>
        </div> // --- Fin Vista de Confirmación ---
      )}
      {/* --- Renderizado del Modal --- */}
      {/* Pasa null como servicio inicial ya que no usamos localStorage */}
      <ModalReserva
        isOpen={modalOpen}
        servicio={null} // <--- Siempre null al abrir ahora
        onClose={handleCloseModal}
        onConfirm={handleConfirmReserva}
      />
    </div> // Fin del div principal de Reserva
  );
};

export default Reserva;
