import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ResumenReserva from "./ResumenReserva";

const Confirm = () => {
  const location = useLocation();

  const { servicioSeleccionado, date, disponible } = location.state || {};

  const handleEditar = () => {
    console.log("Editar reserva");
    // Podrías usar navigate para volver a la página anterior
  };

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const camposRequeridos = ["nombre", "apellido", "email", "telefono"];
    const mensajes = {
      nombre: "El nombre es requerido",
      apellido: "El apellido es requerido",
      email: "El email es requerido",
      telefono: "El teléfono es requerido",
    };

    const newErrors = {};

    camposRequeridos.forEach((campo) => {
      if (!formData[campo].trim()) {
        newErrors[campo] = mensajes[campo];
      }
    });

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Datos enviados:", formData);
    alert("Formulario enviado con éxito");

    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
    setErrors({});
  };

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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["nombre", "apellido", "email", "telefono"].map((campo) => (
                <div key={campo}>
                  <label className="block text-gray-700 capitalize">
                    {campo}
                  </label>
                  <input
                    type={campo === "email" ? "email" : "text"}
                    name={campo}
                    value={formData[campo]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  {errors[campo] && (
                    <p className="text-red-500 text-sm">{errors[campo]}</p>
                  )}
                </div>
              ))}
            </div>

            <div>
              <label className="block text-gray-700">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              ></textarea>
              {errors.mensaje && (
                <p className="text-red-500 text-sm">{errors.mensaje}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
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
