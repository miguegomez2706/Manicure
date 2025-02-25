import { useState } from "react";
import icon from "../../../assets/image/icono/icono.ico";
// import Modal from "../../atoms/Modal";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const mostrarMenu = () => {
    setMenuVisible(!menuVisible);
    console.log("Esta Funcionando " + menuVisible);
  };

  return (
    <nav className="sticky top-0 bg-gray-200 w-[100%] z-50">
      <div className="md:px-20 lg:px-44 py-4 flex items-center -ml-3 md:-ml-6">
        <div className="flex flex-grow items-center ">
          <img src={icon} alt="" className="w-20 h-20" />
          <a href="" className="font-style: italic">
            Nails Art
          </a>
        </div>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 lg:hidden m-4 cursor-pointer"
            onClick={mostrarMenu}
            // onClick={<Modal />} // esto modificque que no anda
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          id="menu"
          className={`${
            menuVisible ? "block bg-white w-full " : "hidden"
          } left-0 flex-grow justify-between lg:w-auto lg:block lg:relative lg:top-0 top-20 py-5 px-11`}
        >
          <div className="flex flex-col lg:flex-row ">
            <a href="#" className="lg:mr-7">
              Início{" "}
            </a>
            <a href="#" className="lg:mr-7">
              Cursos
            </a>
            <a href="#" className="lg:mr-7">
              Sobre nosótros
            </a>
            <a href="#" className="lg:mr-7">
              Servícios
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
