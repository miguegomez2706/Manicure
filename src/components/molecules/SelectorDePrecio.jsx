import Btn from "../atoms/Btn";

const SelectorDePrecio = ({ servicio, onSelect, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Seleccioná una opción
        </h2>
        <ul className="space-y-3 mb-6">
          {servicio.opciones.map((opcion, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-3 rounded-md hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelect(opcion)}
            >
              <span>{opcion.nombre}</span>
              <span className="font-semibold">
                ${opcion.precio.toLocaleString("es-ES")}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-end space-x-4">
          <Btn text="Cancelar" onClick={onCancel} type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default SelectorDePrecio;
