import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ModalReserva from "./ModalReserva";
import ResumenReserva from "./ResumenReserva";
import Disponibilidad from "./Disponibilidad";

const Reserva = () => {
  const [date, setDate] = useState(new Date());
  const [disponible, setDisponible] = useState(null);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  const verificarDisponibilidad = (fecha) => {
    const disponible = Math.random() > 0.5;
    setDisponible(disponible);
  };

  useEffect(() => {
    const storedService = localStorage.getItem("servicioSeleccionado");
    if (storedService) {
      setServicioSeleccionado(JSON.parse(storedService));
    }
  }, []);

  useEffect(() => {
    verificarDisponibilidad(date);
  }, [date]);

  const handleHorarioSeleccionado = (hora) => {
    setHorarioSeleccionado(hora);
  };

  const buscarProximaDisponibilidad = () => {
    let nuevaFecha = new Date(date);
    nuevaFecha.setDate(nuevaFecha.getDate() + 1);
    setDate(nuevaFecha);
    verificarDisponibilidad(nuevaFecha);
  };

  return (
    <div className="max-w-7xl mx-auto p-5 bg-header shadow-lg rounded-lg">
      <h2 className="text-5xl text-title text-left mb-6 mt-10">
        Programa tu cita.
      </h2>
      <h3 className="text-1xl text-text text-left mb-14">
        Revisa nuestra disponibilidad y reserva la fecha y hora que más te
        convengan.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Sección 1: Calendario */}
        <div className="text-center p-5 shadow-md flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-2xl text-title mb-4">Selecciona fecha y hora</h2>
          <Calendar
            minDate={new Date()}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 2))}
            tileDisabled={({ date }) =>
              [0, 6].includes(date.getDay()) ||
              date.toDateString() === "Tue May 27 2025"
            }
            onChange={setDate}
            value={date}
            className="bg-white p-4 shadow-md rounded-md w-full max-w-xs sm:max-w-md !text-lg sm:!text-xl custom-calendar"
            showNeighboringMonth={false}
          />
        </div>

        {/* Sección 2: Disponibilidad (extraída) */}
        <Disponibilidad
          date={date}
          disponible={disponible}
          horarioSeleccionado={horarioSeleccionado}
          handleHorarioSeleccionado={handleHorarioSeleccionado}
          buscarProximaDisponibilidad={buscarProximaDisponibilidad}
        />

        {/* Sección 3: Resumen */}
        <ResumenReserva
          servicioSeleccionado={servicioSeleccionado}
          date={date}
          disponible={disponible}
          onEditar={() => setModalOpen(true)}
        />
      </div>

      {/* Modal para elegir servicio */}
      <ModalReserva
        isOpen={modalOpen}
        servicio={servicioSeleccionado}
        onClose={() => setModalOpen(false)}
        onConfirm={(nuevoServicio) => {
          setServicioSeleccionado(nuevoServicio);
          localStorage.setItem(
            "servicioSeleccionado",
            JSON.stringify(nuevoServicio)
          );
          setModalOpen(false);
        }}
      />
    </div>
  );
};

export default Reserva;
