import Btn from "../atoms/Btn";
import RenderImg from "../atoms/RenderImg";
import { imgs } from "../../assets/dataStore";

const ListCard = () => {
  return (
    <div className="flex flex-col bg-mycolor h-full pt-6 mt-12">
      <div className="flex items-end justify-center text-4xl md:text-5xl m-10">
        <div className="mr-10 text-white">
          <h1>¡Convertite en una profesional!</h1>
          {/* <h1> Una profesional</h1> */}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="justify-between items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-3/4">
          {imgs.map((img, index) => (
            <RenderImg
              key={index}
              imagen={img}
              texto={"Algo"}
              rounded={true}
              modal={false}
              show={true}
            />
          ))}
        </div>
        <div className="flex justify-center items-center pb-10 w-[50%]">
          <Btn text={"Ver Curso!"} to="/cursos" />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
