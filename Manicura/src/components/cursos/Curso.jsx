import img from "../../assets/image/semipermanente/semi6.jpeg";
import Btn from "../atoms/Btn";
const Curso = () => {
  return (
    <div className="w-80 rounded-md border border-slate-900">
      <img src={img} className="h-56" alt="" />
      <div className="font-semibold">titulo del curso</div>
      <div>nombre de Profesora</div>
      <div>Precio de Curso</div>
      <div className="flex justify-center">
        <Btn buttonText="Compralo"></Btn>
      </div>
    </div>
  );
};

export default Curso;
