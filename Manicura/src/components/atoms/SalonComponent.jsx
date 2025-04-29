import imgLocal from "../../assets/image/comunes/imagenLocal.jpeg";
import Btn from "../atoms/Btn";

const SalonComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:pt-16">
      <div className="order-2 flex flex-col items justify-center items-center">
        <h2 className="mb-10 text-4xl md:text-5xl font-extralight pl-5 lg:pl-0">
          Más que un Salón de Uñas:
        </h2>
        <p className="text-lg mb-6 sm:w-1/2">
          En Only Nails, nos enorgullece ofrecer más que servicios de manicura y
          pedicura. Con 30 años de experiencia en la industria, hemos
          perfeccionado el arte de embellecer tus manos y pies con pasión y
          profesionalismo.
        </p>
        <div className=" w-[60%]">
          <Btn text="¡Conócenos!" textHoverColor="text-white" to="salon" />
        </div>
      </div>
      <div className="relative order-1">
        <div className="overflow-hidden flex items-center justify-center">
          <img
            src={imgLocal}
            alt="Salon Image"
            className="object-cover p-10 h-[1000px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SalonComponent;
