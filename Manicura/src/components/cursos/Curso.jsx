import { useNavigate } from "react-router-dom";
import img from "../../assets/image/semipermanente/semi6.jpeg";
import Btn from "../atoms/Btn";
import { FaPlayCircle } from "react-icons/fa";

const Curso = (props) => {
  const navigate = useNavigate();
  return (
    <div className="w-80 rounded-md border overflow-hidden ">
      {/* Contenedor de la imagen */}
      <div className="relative group">
        <img
          src={img}
          className="h-56 w-full object-cover transition-all duration-700 ease-in-out group-hover:brightness-50"
          alt=""
        />
        {/* Ícono con transición */}
        <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <FaPlayCircle className="text-white text-6xl drop-shadow-lg transition-transform transform scale-90 group-hover:scale-110 duration-500 ease-in-out" />
        </div>
      </div>

      {/* Contenido del curso */}
      <div className="px-5">
        <div className="font-semibold mt-5">{props.title}</div>
        <div className="py-5">Profesora: {props.nameTeacher}</div>
        <div>
          Precio: <span className="font-numeros font-bold">${props.price}</span>
        </div>
        <div className="flex justify-center mb-5">
          <Btn text="Inscribete ahora!" to="/InfoCurso" />
        </div>
      </div>
    </div>
  );
};

export default Curso;
