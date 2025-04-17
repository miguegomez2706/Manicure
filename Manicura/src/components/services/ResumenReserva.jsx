// components/atoms/ResumenReserva.jsx
import Btn from "../atoms/Btn";
import { useNavigate } from "react-router-dom";

const ResumenReserva = ({
  servicioSeleccionado,
  date,
  disponible,
  onEditar,
  botonTexto = "Siguiente",
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative text-center p-5 shadow-md flex flex-col justify-start items-center rounded-lg min-h-[250px]">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl text-title mb-4 text-left">
          Datos de la reserva
        </h2>
        {/* <button
          className="text-sm text-blue-500 hover:underline ml-auto"
          onClick={onEditar}
        >
          Editar
        </button> */}
        {/* <Btn
          text="Editar"
          textColor="text-blue-500"
          className="text-sm hover:underline mb-5 w-5 mr-6"
          trasparent={true}
          borderColor="none"
          disableHover={true}
        ></Btn>*/}
      </div>

      {servicioSeleccionado ? (
        <div className="text-left w-full">
          <p className="text-base text-gray-700 mb-4 mt-10">
            {servicioSeleccionado.nombre}
          </p>
          <p className="text-base text-gray-700 mb-4">
            {servicioSeleccionado.descripcion}
          </p>
          <p className="text-base text-gray-700 mb-4">
            Necochea 307 OF 3, H3500 Resistencia
          </p>
          <p className="text-base text-gray-700 mb-4">
            <strong>Precio:</strong> $
            {servicioSeleccionado.precio.toLocaleString("es-ES")}
          </p>
        </div>
      ) : (
        <p className="text-gray-700">No se ha seleccionado ningún servicio</p>
      )}

      {date && disponible && (
        <p className="text-base text-gray-700 mb-2 text-left w-full">
          <strong>Fecha seleccionada:</strong> {date.toLocaleDateString()}
        </p>
      )}

      {servicioSeleccionado && (
        <Btn
          text={botonTexto}
          onClick={() =>
            navigate("/confirm", {
              state: {
                servicioSeleccionado,
                date,
                disponible,
              },
            })
          }
          type="primary"
          rounded={true}
        />
      )}
    </div>
  );
};

export default ResumenReserva;
