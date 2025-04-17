import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación

const Btn = ({
  onClick,
  text = "Botón",
  bgColor = "bg-gray-800",
  textColor = "text-white",
  hoverBorderColor = "hover:border-gray-700",
  borderColor = "border-gray-900",
  className = "",
  to = "",
  hoverUnderline = false,
  disableHover = false,
  trasparent = false,
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
      className={`w-full px-7 py-3 ${bgColor} ${textColor} cursor-pointer text-base ${
        disableHover ? "" : "hover:bg-gray-600"
      } mt-8 sm:mt-4   ${borderColor} ${hoverBorderColor} ${
        hoverUnderline ? "hover:underline" : ""
      } ${className} ${trasparent ? "bg-transparent" : ""}`}
    >
      {text} {/* Texto dinámico */}
    </button>
  );
};

export default Btn;
