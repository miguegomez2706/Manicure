import React from "react";
import { useLocation } from "react-router-dom";
import ResumenReserva from "./ResumenReserva";
import FormularioReserva from "./FormularioReserva";

const Confirm = () => {
  const location = useLocation();
  const { servicioSeleccionado, date, disponible } = location.state || {};

  const handleEditar = () => {
    // Podrías usar navigate para volver a la página anterior
  };

  const handleFormularioSubmit = (formData) => {
    console.log("Datos enviados desde Confirm:", formData);
  };

  // Definimos los campos que queremos mostrar en el formulario
  const fields = [
    { name: "nombre", label: "Nombre", required: true },
    { name: "apellido", label: "Apellido", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "telefono", label: "Teléfono", required: true },
    { name: "mensaje", label: "Mensaje", type: "textarea", required: false },
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-10 gap-8 px-4">
      <div className="w-full lg:w-2/3">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md">
          <h2 className="text-5xl text-title text-left mb-10 mt-2">
            Formulario de reserva
          </h2>
          <h3 className="text-lg text-text text-left mb-8">
            Detalles del cliente
          </h3>

          <h4 className="p-5 bg-gray-100 rounded text-title text-md mb-10">
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="underline hover:text-gray-600">
              Inicia sesión
            </a>
          </h4>

          <FormularioReserva
            onSubmit={handleFormularioSubmit}
            fields={fields} // Pasamos los campos dinámicos
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <ResumenReserva
          servicioSeleccionado={servicioSeleccionado}
          date={date}
          disponible={disponible}
          onEditar={handleEditar}
          botonTexto="Reservar ahora"
        />
      </div>
    </div>
  );
};

export default Confirm;
