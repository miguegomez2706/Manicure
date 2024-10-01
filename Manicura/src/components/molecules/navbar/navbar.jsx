// import icon from "../../../assets/image/icono/icono.ico";
// const NavBar = () => {
//   const btnLink =
//     "block inline-block py-1  hover:text-gray-600 cursor-pointer mr-4";
//   return (
//     <>
//       <div className="body-font h-20">
//         <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
//           <img src={icon} alt="" className="w-20 h-20" />
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <svg
//               xmlns=""
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               className=""
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="font-style: italic">NailsArt</span>
//           </a>
//           <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-style: italic">
//             <a ala>Inicio</a>
//             <a className={btnLink}>Salon</a>
//             <a className={btnLink}>Servicios</a>
//             <a className={btnLink}>Cursos</a>
//             <a className={btnLink}>Sobre Nosotros</a>
//             <a href="#contacto" className={btnLink}>
//               Contactanos
//             </a>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import icon from "../../../assets/image/icono/icono.ico";

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
              Inicio{" "}
            </a>
            <a href="#" className="lg:mr-7">
              Sobre nosotros
            </a>
            <a href="#" className="lg:mr-7">
              Cursos
            </a>
            <a href="#" className="lg:mr-7">
              Servicios
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
