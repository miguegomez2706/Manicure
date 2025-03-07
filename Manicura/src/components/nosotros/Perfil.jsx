import Btn from "../atoms/Btn";
import img1 from "../../assets/image/semipermanente/semi3.jpeg";

const Perfil = () => {
  return (
    <div className="grid grid-cols-1 gap-4 border border-gray-200 rounded-lg overflow-hidden shadow-lg ">
      <div className="sm:h-80 max-h-80">
        <img
          src={img1}
          alt="Commercial Image"
          className="max-h-80 h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-6 md:p-10">
        <p className="font-rale text-base md:text-2xl lg:text-3xl text-center pb-3 xl:pb-6">
          Mejores Precios
        </p>
        <Btn rounded={true} type={"primary"} buttonText={"Ver Precios!"} />
      </div>
    </div>
  );
};

export default Perfil;
