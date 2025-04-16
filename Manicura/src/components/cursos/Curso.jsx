import img from "../../assets/image/semipermanente/semi6.jpeg";
import Btn from "../atoms/Btn";
import { FaPlayCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const Curso = ({ title, nameTeacher, price }) => {
  return (
    <div className="w-80 rounded-md border overflow-hidden ">
      <div className="relative group">
        <img
          src={img}
          className="h-56 w-full object-cover transition-all duration-700 ease-in-out group-hover:brightness-50"
          alt=""
        />

        <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <FaPlayCircle className="text-white text-6xl drop-shadow-lg transition-transform transform scale-90 group-hover:scale-110 duration-500 ease-in-out" />
        </div>
      </div>

      <div className="px-5">
        <div className="font-semibold mt-5">{title}</div>
        <div className="py-5">Profesora: {nameTeacher}</div>
        <div>
          Precio: <span className="font-numeros font-bold">${price}</span>
        </div>
        <div className="flex justify-center mb-5">
          <Btn text="Inscribete ahora!" to="/InfoCurso" />
        </div>
      </div>
    </div>
  );
};

Curso.propTypes = {
  title: PropTypes.string.isRequired,
  nameTeacher: PropTypes.string,
  price: PropTypes.number,
};

export default Curso;
