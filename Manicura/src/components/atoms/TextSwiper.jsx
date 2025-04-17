import { useNavigate } from "react-router-dom";
import Btn from "./Btn";

const TextSwiper = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center sm:items-start sm:absolute sm:top-[15%] sm:left-[70%] sm:transform sm:-translate-x-1/2 sm:w-[20%] sm:z-10 sm:text-center p-4 sm:p-0 md:mt-50">
      <h1 className="font-rale text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black sm:text-white text-shadow-custom">
        ¿Estás lista
        <br />
        para tu
        <br />
        mejor
        <br />
        versión?
      </h1>
      <div className="mt-5 sm:mt-8 flex justify-center w-full">
        <Btn
          text="Reserva una cita"
          onClick={() => navigate("/turnos")}
          className="px-7 py-3  text-white cursor-pointer text-xl mt-8 sm:mt-4 border-2 border-solid border-gray-900 hover:bg-buttonHover hover:border-gray-900 bg-gray-900 hover:bg-transparent"
        />
      </div>
    </div>
  );
};

export default TextSwiper;
