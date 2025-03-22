import Curso from "../cursos/Curso";

const contenidoCursos = [
  {
    title: "React: Buscador de Canciones - Renderizado condicional de datos",
    nameTeacher: "Romina Gomez",
    price: 34000,
  },
  {
    title: "React: Buscador de Canciones - Renderizado condicional de datos",
    nameTeacher: "Romina Gomez",
    price: 34000,
  },
  {
    title: "Introducción a la ética empresarial",
    nameTeacher: "Romina Gomez",
    price: 34000,
  },
  {
    title: "Curso gratuito de fotografía con smartphone",
    nameTeacher: "Romina Gomez",
    price: 34000,
  },
  {
    title: "E-commerce para principiantes",
    nameTeacher: "Romina Gomez",
    price: 34000,
  },
  {
    title: "Fotografía para Instagram",
    nameTeacher: "Romina Gomez",
    price: 34000,
  },
];
const ListCurso = () => {
  return (
    <div className=" 2xl:px-44 pt-5">
      <h1 className="text-4xl py-10 ml-5 sm:ml-10 ">Cursos</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 py-5 sm:p-5 gap-7 justify-center">
        {contenidoCursos.map((contenidoCurso, index) => (
          <Curso
            key={index}
            nameTeacher={contenidoCurso.nameTeacher}
            title={contenidoCurso.title}
            price={contenidoCurso.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ListCurso;
