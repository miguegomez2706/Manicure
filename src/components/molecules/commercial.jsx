import Btn from "../atoms/Btn";
import img1 from "../../assets/image/semipermanente/semi6.jpeg";

const Commercial = () => {
  return (
    <div className="px-4 md:px-20 lg:px-44 pt-10">
      <div className="flex text-4xl md:text-5xl flex-col font m-10">
        <h1 className="flex items-center sm:mb-5">¡Aprovecha los precios</h1>
        <h1 className="flex items-center sm:mb-10">imperdibles!</h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
        <div className="order-1 md:order-2">
          <img
            src={img1}
            alt="Commercial Image"
            className="h-56 md:h-80 lg:h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-6 md:p-10 order-2">
          <p className="text-base md:text-2xl lg:text-3xl text-center pb-3 xl:pb-6">
            Mejores Precios
          </p>
          <div className="w-[50%]">
            <Btn
              to={"/turnos"}
              textHoverColor="text-white"
              text="Ver Precios"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
