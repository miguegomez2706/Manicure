// // useState se usa para manejar el estado local dentro del componente.
// // useEffect se usa para realizar efectos secundarios, como actualizaciones de estado o ejecución de código cuando cambian ciertas dependencias.

// import React, { useState, useEffect } from "react";
// import Btn from "./Btn";
// import servicios from "../turns/servicios"; // Asegúrate de importar la lista de servicios

// const ModalReserva = ({ isOpen, servicio, onClose, onConfirm }) => {
//   //   isAddingService: Controla si el modal está en modo de agregar un nuevo servicio o en modo de resumen de la cita.
//   //   updatedServices: Guarda la lista de servicios que el usuario ha seleccionado para agregar a su cita.
//   const [isAddingService, setIsAddingService] = useState(false);
//   const [updatedServices, setUpdatedServices] = useState([]);

//   //  Cada vez que el modal se abre con un nuevo servicio, lo agregamos a la lista
//   //   Este useEffect se activa cuando el prop servicio cambia.
//   //   Si hay un servicio disponible (es decir, si se pasa un servicio al modal), se agrega a la lista updatedServices. Si no hay servicio, la lista se limpia.
//   //   Dependencia de servicio: El useEffect se vuelve a ejecutar cada vez que el prop servicio cambia.
//   useEffect(() => {
//     if (servicio) {
//       setUpdatedServices([servicio]);
//     } else {
//       setUpdatedServices([]); // Limpiamos al cerrar
//     }
//   }, [servicio]);

//   if (!isOpen) return null;

//   //   Si el servicio no está ya en la lista (updatedServices), lo agrega.
//   // Después de agregar un servicio, cambia el estado isAddingService a false, lo que hace que el modal vuelva al estado de "Resumen de la cita" en lugar de "Agregar servicio".
//   // handleRemoveService: Función para eliminar un servicio de la lista de servicios seleccionados.
//   const handleAddService = (nuevoServicio) => {
//     if (!updatedServices.find((s) => s.nombre === nuevoServicio.nombre)) {
//       setUpdatedServices([...updatedServices, nuevoServicio]);
//       setIsAddingService(false); // 🔄 Volver al resumen automáticamente
//     }
//   };

//   // Se usa filter para crear una nueva lista que excluye el servicio en el índice index y luego se actualiza el estado de updatedServices.
//   const handleRemoveService = (index) => {
//     const updatedList = updatedServices.filter((_, i) => i !== index);
//     setUpdatedServices(updatedList);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col gap-6 h-screen">
//         {/* Encabezado */}
//         <div className="flex justify-between items-center border-b pb-3">
//           <h1 className="text-3xl text-gray-900">
//             {isAddingService
//               ? "Selecciona otro servicio"
//               : "Resumen de la Cita"}
//           </h1>
//           <button
//             className="text-gray-600 hover:text-gray-900 text-2xl"
//             onClick={onClose}
//           >
//             ✖
//           </button>
//         </div>

//         {/* Contenido con scroll */}
//         {/*
//         Si no se está agregando un servicio (!isAddingService), muestra un resumen de los servicios seleccionados hasta ahora.
//         Si isAddingService es true, muestra la lista de servicios disponibles para agregar (estos servicios se obtienen de la importación servicios). */}
//         <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
//           {/* Resumen de los servicios agregados */}
//           {!isAddingService && (
//             <div className="space-y-4">
//               {/* updatedServices.length > 0: Si hay al menos un servicio agregado, se recorre el array updatedServices y se muestra un resumen para cada servicio.
//               updatedServices.map((s, index) => {...}): Esto itera sobre los servicios almacenados en updatedServices y renderiza una sección con el nombre, descripción y precio de cada servicio. */}
//               {updatedServices.length > 0 ? (
//                 updatedServices.map((s, index) => (
//                   <div
//                     key={index}
//                     className="border border-gray-300 p-4 rounded-lg space-y-4"
//                   >
//                     <h2 className="text-xl font-semibold text-gray-800">
//                       {s.nombre}
//                     </h2>
//                     <p className="text-gray-700">{s.descripcion}</p>
//                     <p className="text-gray-900 font-bold">
//                       <p className="text-gray-600 mb-4">
//                         📍 Necochea 307 OF 3, H3500 Resistencia
//                       </p>
//                       Precio: ${s.precio.toLocaleString("es-ES")}
//                     </p>

//                     <button
//                       className="text-red-600 hover:text-red-800 mt-2"
//                       onClick={() => handleRemoveService(index)}
//                     >
//                       Eliminar
//                     </button>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-700">No hay servicios seleccionados</p>
//               )}
//               <p className="text-center text-gray-700 pb-2 mt-4">
//                 ¿Quieres agregar otro servicio a esta cita?
//               </p>
//               {/* Botón de agregar servicio dentro del resumen */}
//               <Btn
//                 text="＋ Agregar otro servicio"
//                 onClick={() => setIsAddingService(true)}
//                 className="bg-transparent border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100 w-full"
//                 textColor="text-black"
//               />
//             </div>
//           )}

//           {/* Listado de servicios para agregar */}
//           {/* {isAddingService && (...)} */}
//           {/* Este condicional verifica si isAddingService es true. Si es así, muestra el contenido dentro de los paréntesis {} (el listado de servicios).
//             Si isAddingService es false, este bloque de código no se ejecuta y no muestra nada. */}
//           {isAddingService && (
//             <div className="space-y-4">
//               {/* Array.isArray(servicios) && servicios.length > 0 ? (...) : (...)
//                 Esto se usa para verificar si servicios es un arreglo y si tiene elementos (servicios.length > 0).
//                 Si es un arreglo no vacío, entra en el bloque map para mostrar los servicios.
//                 Si no, muestra un mensaje que dice "No hay servicios disponibles". */}
//               {Array.isArray(servicios) && servicios.length > 0 ? (
//                 // map es un método de los arreglos en JavaScript que recorre todos los elementos del arreglo servicios.
//                 // Por cada elemento en servicios, ejecuta la función interna donde servicio es el objeto actual y index es el índice de ese servicio en el arreglo.
//                 // Dentro de esta función, se muestra la información de cada servicio (nombre, descripción, precio, etc.).
//                 servicios.map((servicio, index) => (
//                   <div
//                     key={index}
//                     className="border border-gray-300 p-4 rounded-lg flex justify-between cursor-pointer hover:bg-gray-100"
//                     onClick={() => handleAddService(servicio)}
//                   >
//                     <div className="space-y-2">
//                       <h2 className="text-xl font-semibold text-gray-800">
//                         {servicio.nombre}
//                       </h2>
//                       <p className="text-gray-700">{servicio.descripcion}</p>
//                       <p className="text-gray-900 font-bold">
//                         Precio: ${servicio.precio.toLocaleString("es-ES")}
//                       </p>
//                     </div>
//                     <button
//                       className="bg-button text-white px-4 py-2 rounded hover:bg-buttonHover"
//                       onClick={(e) => {
//                         // e.stopPropagation() previene que el evento de clic en el botón se propague a los elementos padres.
//                         // Sin esto, si el usuario hace clic en el botón "Agregar", podría accidentalmente ejecutar eventos de clic en el contenedor principal del servicio o en otras áreas del modal, como cerrar el modal.
//                         // Es una forma de asegurarse de que el clic en el botón "Agregar" solo ejecute la acción deseada (handleAddService(servicio)) sin interferir con otros comportamientos del modal.
//                         e.stopPropagation(); // Evita que el clic en el botón cierre el modal
//                         handleAddService(servicio);
//                       }}
//                     >
//                       Agregar
//                     </button>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-700">No hay servicios disponibles</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Sección de botones finales */}
//         <div className="flex flex-col gap-4">
//           {isAddingService && (
//             <Btn
//               text="Volver al resumen" // Texto del botón
//               onClick={() => setIsAddingService(false)} // Acción para volver al resumen
//               className="bg-transparent border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100 w-full"
//               textColor="text-gray-900" // Color del texto
//             />
//           )}
//           <Btn text="Confirmar Reserva" onClick={onConfirm} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalReserva;

import React, { useState, useEffect } from "react";
import Btn from "./Btn";
import servicios from "../turns/servicios";

const ModalReserva = ({ isOpen, servicio, onClose, onConfirm }) => {
  const [isAddingService, setIsAddingService] = useState(false);
  const [updatedServices, setUpdatedServices] = useState([]);
  const [showExitAlert, setShowExitAlert] = useState(false);

  useEffect(() => {
    if (servicio) {
      setUpdatedServices([servicio]);
    } else {
      setUpdatedServices([]);
    }
  }, [servicio]);

  if (!isOpen) return null;

  const handleAddService = (nuevoServicio) => {
    if (!updatedServices.find((s) => s.nombre === nuevoServicio.nombre)) {
      setUpdatedServices([...updatedServices, nuevoServicio]);
      setIsAddingService(false);
    }
  };

  const handleRemoveService = (index) => {
    const updatedList = updatedServices.filter((_, i) => i !== index);
    setUpdatedServices(updatedList);
  };

  const handleClose = () => {
    if (updatedServices.length > 0) {
      setShowExitAlert(true);
    } else {
      onClose();
    }
  };

  const handleExitWithoutBooking = () => {
    setShowExitAlert(false);
    onClose();
  };

  const handleContinueBooking = () => {
    setShowExitAlert(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col gap-6 h-screen">
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-3xl text-gray-900">
            {isAddingService
              ? "Selecciona otro servicio"
              : "Resumen de la Cita"}
          </h1>
          <button
            className="text-gray-600 hover:text-gray-900 text-2xl"
            onClick={handleClose}
          >
            ✖
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
          {!isAddingService && (
            <div className="space-y-4">
              {updatedServices.length > 0 ? (
                updatedServices.map((s, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 p-4 rounded-lg space-y-4"
                  >
                    <h2 className="text-xl font-semibold text-gray-800">
                      {s.nombre}
                    </h2>
                    <p className="text-gray-700">{s.descripcion}</p>
                    <p className="text-gray-900 font-bold">
                      <p className="text-gray-600 mb-4">
                        📍 Necochea 307 OF 3, H3500 Resistencia
                      </p>
                      Precio: ${s.precio.toLocaleString("es-ES")}
                    </p>

                    <button
                      className="text-red-600 hover:text-red-800 mt-2"
                      onClick={() => handleRemoveService(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No hay servicios seleccionados</p>
              )}
              <p className="text-center text-gray-700 pb-2 mt-4">
                ¿Quieres agregar otro servicio a esta cita?
              </p>
              <Btn
                text="＋ Agregar otro servicio"
                onClick={() => setIsAddingService(true)}
                className="bg-transparent border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100 w-full"
                textColor="text-black"
              />
            </div>
          )}

          {isAddingService && (
            <div className="space-y-4">
              {Array.isArray(servicios) && servicios.length > 0 ? (
                servicios.map((servicio, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 p-4 rounded-lg flex justify-between cursor-pointer hover:bg-gray-100"
                    onClick={() => handleAddService(servicio)}
                  >
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {servicio.nombre}
                      </h2>
                      <p className="text-gray-700">{servicio.descripcion}</p>
                      <p className="text-gray-900 font-bold">
                        Precio: ${servicio.precio.toLocaleString("es-ES")}
                      </p>
                    </div>
                    <button
                      className="bg-button text-white px-4 py-2 rounded hover:bg-buttonHover"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddService(servicio);
                      }}
                    >
                      Agregar
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No hay servicios disponibles</p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {isAddingService && (
            <Btn
              text="Volver al resumen"
              onClick={() => setIsAddingService(false)}
              className="bg-transparent border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100 w-full"
              textColor="text-gray-900"
            />
          )}
          <Btn text="Confirmar Reserva" onClick={onConfirm} />
        </div>
      </div>

      {showExitAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-90 h-96 flex flex-col gap-4 relative">
            {/* X en la esquina superior izquierda */}
            <button
              className="absolute top-4 right-5 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setShowExitAlert(false)}
            >
              ✖
            </button>

            <h2 className="text-center text-4xl text-gray-900 mt-20">
              ¿Salir sin reservar?
            </h2>
            <p className="text-center text-gray-900 mt-3">
              Si te vas ahora, tu cita no se guardará.
            </p>
            <div className="flex gap-4 mt-auto">
              <Btn
                text="No reservar"
                onClick={handleExitWithoutBooking}
                className=" !text-black bg-transparent px-4 !py-1 w-full text-sm"
              />
              <Btn
                text="Seguir reservando"
                onClick={handleContinueBooking}
                className=" text-white px-4 !py-1  w-full text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalReserva;
