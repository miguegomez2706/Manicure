// import PropTypes from "prop-types";

// const Btn = ({ buttonText, type, rounded, onClick, css }) => {
//   const baseStyles =
//     "px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 w-32 h-16 hover:bg-slate-700 flex text-nowrap justify-center items-center";

//   const style = {
//     primary: " bg-black text-white",
//     secondary: "bg-white ",
//     tertiary: "",
//   };
//   const roundedStyle = rounded ? "rounded" : "";

//   return (
//     <button
//       className={`${css}${style[type]} ${roundedStyle} ${baseStyles}`}
//       onClick={onClick}  // Agregado el onClick aquí
//     >
//       {buttonText}
//     </button>
//   );
// };

// Btn.propTypes = {
//   buttonText: PropTypes.string.isRequired,
// };

// export default Btn;

import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación

const Btn = ({
  onClick,
  text = "Botón",
  bgColor = "bg-gray-900",
  textColor = "text-white",
  hoverBorderColor = "hover:border-gray-700",
  borderColor = "border-gray-900",
  className = "",
  to = null, // Cambié la ruta por defecto a null
}) => {
  const navigate = useNavigate(); // Usamos useNavigate para manejar la navegación

  const handleClick = () => {
    if (onClick) onClick(); // Ejecutamos la función onClick si se pasa alguna
    if (to) {
      navigate(to); // Redirigimos solo si `to` está definido
    }
  };

  return (
    <button
      onClick={handleClick} // Usamos la función handleClick que maneja la acción y navegación
      className={`w-full px-7 py-3 ${bgColor} ${textColor} cursor-pointer text-xl mt-8 sm:mt-4 border-2 border-solid ${borderColor}  ${hoverBorderColor} hover:underline ${className}`}
    >
      {text} {/* Texto dinámico */}
    </button>
  );
};

export default Btn;
