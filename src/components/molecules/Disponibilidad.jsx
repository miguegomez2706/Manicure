// src/components/atoms/Disponibilidad.jsx

import Btn from "../atoms/Btn";

const Disponibilidad = ({
  date,
  disponible,
  horarioSeleccionado,
  handleHorarioSeleccionado,
  buscarProximaDisponibilidad,
}) => {
  return (
    <div className="text-center p-5 shadow-md flex flex-col justify-start items-center min-h-[250px]">
      <h2 className="text-2xl text-title mb-4">
        {`Disponibilidad para: ${new Intl.DateTimeFormat("es-ES", {
          weekday: "long",
          day: "numeric",
          month: "long",
        }).format(date)}`}
      </h2>
      {disponible === null ? (
        <p className="text-2xl text-gray-700 mb-4 mt-10">
          Cargando disponibilidad...
        </p>
      ) : !disponible ? (
        <p className="text-2xl text-gray-700 mb-4 mt-10">
          No hay disponibilidad
        </p>
      ) : null}

      {disponible && (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full mt-10">
          {[
            "09:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "01:00 PM",
            "02:00 PM",
            "03:00 PM",
            "04:00 PM",
          ].map((hora, index) => (
            <div
              key={index}
              onClick={() => handleHorarioSeleccionado(hora)}
              className={`p-3 shadow-md cursor-pointer transition duration-200 w-full text-center rounded-md
                ${
                  horarioSeleccionado === hora
                    ? "bg-pink-300"
                    : "bg-white hover:bg-pink-200"
                }`}
            >
              <p className="text-lg font-semibold">{hora}</p>
            </div>
          ))}
        </div>
      )}

      {!disponible && (
        <Btn
          text="Próxima sesión disponible"
          onClick={buscarProximaDisponibilidad}
          type="primary"
          rounded={true}
          className="mt-4"
        />
      )}
    </div>
  );
};

export default Disponibilidad;
