import React, { createContext, useState } from "react";

// Creamos el Context
export const ServiciosContext = createContext();

// Creamos el Provider del Context
export const ServiciosProvider = ({ children }) => {
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);

  // Función para agregar un servicio
  const agregarServicio = (servicio) => {
    setServiciosSeleccionados((prevServicios) => {
      // Verificar si el servicio ya existe para evitar duplicados (opcional, según tu lógica)
      const existe = prevServicios.find((s) => s.id === servicio.id);
      if (existe) {
        return prevServicios;
      }
      return [...prevServicios, servicio];
    });
  };

  // Función para eliminar un servicio por su ID
  const eliminarServicio = (id) => {
    setServiciosSeleccionados((prevServicios) =>
      prevServicios.filter((servicio) => servicio.id !== id)
    );
  };

  // Función para limpiar todos los servicios seleccionados (para una nueva reserva)
  const limpiarServicios = () => {
    setServiciosSeleccionados([]);
  };

  return (
    <ServiciosContext.Provider
      value={{
        serviciosSeleccionados,
        agregarServicio,
        eliminarServicio,
        limpiarServicios,
      }}
    >
      {children}
    </ServiciosContext.Provider>
  );
};
