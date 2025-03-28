import Curso from "../cursos/Curso";
import { contenidoCursos } from "../../assets/dataStore";
import { useEffect, useState } from "react";

const ListCurso = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1);
  }, []);
  return (
    <div
      className={` 2xl:px-44 animate-fade-in transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-4xl py-10 ml-5 sm:ml-10 ">Cursos</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 py-5 sm:p-5 gap-7 justify-center">
        {contenidoCursos.map((contenidoCurso, index) => (
          <div key={index} className="flex justify-center">
            <Curso
              nameTeacher={contenidoCurso.nameTeacher}
              title={contenidoCurso.title}
              price={contenidoCurso.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCurso;
