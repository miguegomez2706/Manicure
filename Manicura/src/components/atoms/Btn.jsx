import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación

const Btn = ({
  onClick,
  text = "Botón",
  bgColor = "",
  textColor = "text-black",
  textHoverColor = "",
  hoverBorderColor = "",
  borderColor = "border-gray-900",
  className = "",
  to = "",
  hoverUnderline = false,
  disableHover = false,
  icon = null,
}) => {
  const navigate = useNavigate(); // Usamos useNavigate para manejar la navegación

  const handleClick = () => {
    if (onClick) onClick();
    if (to) {
      if (to.startsWith("http")) {
        window.open(to, "_blank"); // Si es un enlace externo, abrir en nueva pestaña
      } else {
        navigate(to); // Si es interno, navegar
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 w-full px-7 py-3 ${bgColor} ${textColor} cursor-pointer text-base ${
        disableHover ? "" : "hover:bg-[#fb7185]"
      } border-2 border-solid ${borderColor} ${hoverBorderColor} ${
        hoverUnderline ? "hover:underline" : ""
      } ${textHoverColor ? `hover:${textHoverColor}` : ""} ${className}`}
    >
      {icon && <span className="text-xl">{icon}</span>} {/* Icono si existe */}
      {text}
    </button>
  );
};

export default Btn;
