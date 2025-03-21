import { useNavigate } from "react-router-dom";
import Btn from "../atoms/Btn";
import servicios from "./servicios"; // Importa los servicios

const Turnos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center  p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Servicios Disponibles
      </h1>
      <div className="w-full max-w-4xl space-y-6">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white p-6 text-center border-t border-b border-gray-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {servicio.nombre}
            </h2>
            <hr className="my-3 border-gray-300" />
            <p className="text-gray-700">{servicio.descripcion}</p>
            <p className="text-lg font-bold text-gray-900 mt-2">
              Precio: ${servicio.precio}
            </p>
            <Btn
              rounded={true}
              type={"primary"}
              buttonText={"Reservar Ahora!"}
              onClick={() => navigate("/reserva")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Turnos;
