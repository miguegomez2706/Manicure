import img from "../../assets/image/semipermanente/semi6.jpeg";
import Btn from "../atoms/Btn";
const Curso = (props) => {
  return (
    <div className="w-80 rounded-md border overflow-hidden">
      <img
        src={img}
        className="h-56 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
        alt=""
      />
      <div className="px-5">
        <div className="font-semibold mt-5">{props.title}</div>
        <div className="py-5">{props.nameTeacher}</div>
        <div>{props.price}</div>
        <div className="flex justify-center mb-5">
          <Btn buttonText="Inscribete ahora!"></Btn>
        </div>
      </div>
    </div>
  );
};

export default Curso;
