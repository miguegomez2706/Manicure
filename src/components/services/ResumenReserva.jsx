import { useState } from "react";
import Btn from "../atoms/Btn";
import { useNavigate } from "react-router-dom";

const ResumenReserva = ({
  servicios = [], // Asegurarse que servicios sea un array por defecto
  date,
  disponible,
  botonTexto = "Siguiente",
}) => {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [precioElegido, setPrecioElegido] = useState(null);

  const seleccionarPrecio = (precio) => {
    setPrecioElegido(precio);
    setMostrarModal(false);
  };

  const puedeContinuar = servicios.length > 0 && precioElegido; // Verifica que servicios no esté vacío

  const preciosDisponibles =
    servicios
      ?.map((servicio) =>
        Array.isArray(servicio?.precios) && servicio.precios.length > 0
          ? servicio.precios
          : servicio?.precio
          ? [servicio.precio]
          : []
      )
      .flat() || [];

  return (
    <div className="relative text-center p-5 shadow-md flex flex-col justify-start items-center rounded-lg min-h-[250px]">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl text-title mb-4 text-left">
          Datos de la reserva
        </h2>
      </div>

      {servicios.length > 0 ? (
        <div className="text-left w-full">
          {servicios.map((servicio, index) => (
            <div key={index}>
              <p className="text-base text-gray-700 mb-4 mt-10">
                {servicio.nombre}
              </p>
              <p className="text-base text-gray-700 mb-4">
                {servicio.descripcion}
              </p>
              <p className="text-base text-gray-700 mb-4">
                Necochea 307 OF 6, H3500 Resistencia
              </p>{" "}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">No se ha seleccionado ningún servicio</p>
      )}

      {date && disponible && (
        <p className="text-base text-gray-700 mb-2 text-left w-full">
          <strong>Fecha seleccionada:</strong> {date.toLocaleDateString()}
        </p>
      )}

      {puedeContinuar && (
        <Btn
          text={botonTexto}
          onClick={() =>
            navigate("/confirm", {
              state: {
                serviciosSeleccionados: servicios, // Aseguramos que pasamos el array de servicios
                precio: precioElegido,
                date,
                disponible,
              },
            })
          }
          type="primary"
          rounded={true}
        />
      )}

      {/* Modal de selección de precio */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Elige un precio</h2>
            <div className="flex flex-col gap-3">
              {preciosDisponibles.map((precio, index) => (
                <button
                  key={index}
                  onClick={() => seleccionarPrecio(precio)}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                >
                  ${precio.toLocaleString("es-ES")}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMostrarModal(false)}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumenReserva;
