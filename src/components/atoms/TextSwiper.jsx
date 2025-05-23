import { useNavigate } from "react-router-dom";
import Btn from "./Btn";

const TextSwiper = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center mt-5  mb-10 sm:items-start sm:absolute sm:top-[15%] sm:left-[70%] sm:transform sm:-translate-x-1/2 sm:w-[20%] sm:z-10 sm:text-center p-4 sm:p-0 md:mt-50">
      <h1 className="font-rale text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-title sm:text-white text-shadow-custom">
        ¿Estás lista
        <br />
        para tu
        <br />
        mejor
        <br />
        versión?
      </h1>
      <div className="mt-0 sm:mt-8 flex justify-center w-full">
        <Btn
          text="Reserva una cita"
          bgColor="bg-button"
          textColor="text-black"
          textHoverColor="text-white"
          onClick={() => navigate("/turnos")}
          className="px-7 w-3/4 py-3 cursor-pointer text-xl mt-8 sm:mt-4 border-2 border-solid"
        />
      </div>
    </div>
  );
};

export default TextSwiper;
