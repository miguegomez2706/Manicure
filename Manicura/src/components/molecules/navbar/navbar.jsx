import { useState } from "react";
import icon from "../../../assets/image/icono/icono.ico";
import { useNavigate } from "react-router-dom";
import Btn from "../../atoms/Btn";
import { FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const mostrarMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md w-full z-50">
      <div className="flex items-center justify-between px-6 py-4 sm:py-6 sm:px-10 lg:px-32">
        {/* Logo y Nombre */}
        <div className="flex flex-col items-center gap-0 sm:flex-row sm:gap-3 cursor-pointer order-2 sm:order-none">
          <img
            src={icon}
            alt="Logo"
            className="w-16 h-16"
            onClick={() => navigate("/")}
          />
          <a
            onClick={() => navigate("/")}
            className="text-lg font-semibold italic "
          >
            Nails Art
          </a>
        </div>

        {/* Icono Menú (Móvil) */}
        <div className="lg:hidden order-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-7 h-7 cursor-pointer hover:text-gray-700"
            onClick={mostrarMenu}
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Menú */}
        <div
          className={`absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ${
            menuVisible ? "block" : "hidden"
          } lg:block`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 py-4 lg:py-0 px-6 lg:px-0">
            <a
              onClick={() => {
                navigate("/");
                setMenuVisible(false);
              }}
              className="nav-link cursor-pointer hover:text-textHover"
            >
              Inicio
            </a>
            <a
              onClick={() => {
                navigate("/cursos");
                setMenuVisible(false);
              }}
              className="nav-link cursor-pointer hover:text-textHover"
            >
              Cursos
            </a>
            <a
              onClick={() => {
                navigate("/salon");
                setMenuVisible(false);
              }}
              className="nav-link cursor-pointer hover:text-textHover"
            >
              Sobre Nosotros
            </a>
            <a
              onClick={() => {
                navigate("/Turnos");
                setMenuVisible(false);
              }}
              className="nav-link cursor-pointer hover:text-textHover"
            >
              Servicios
            </a>
          </div>
        </div>

        {/* Botón Número de teléfono */}
        <div className="flex flex-col items-end sm:items-center justify-end order-2 font-numeros h-full">
          <Btn
            icon={<FaWhatsapp />}
            bgColor="bg-button"
            text="362 494-0856"
            textColor="text-black"
            textHoverColor="text-white"
            className="rounded-md px-2 sm:px-7"
            to="https://wa.me/+543624940856"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
