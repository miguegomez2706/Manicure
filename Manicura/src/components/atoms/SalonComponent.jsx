import { useNavigate } from "react-router-dom";
import imgLocal from "../../assets/image/comunes/imagenLocal.jpeg";

const SalonComponent = () => {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="order-1">
        <h2 className="mb-10 text-5xl font-extralight">
          Más que un Salón de Uñas:
        </h2>
        <p className="text-lg mb-6 w-1/2">
          En Only Nails, nos enorgullece ofrecer más que servicios de manicura y
          pedicura. Con 30 años de experiencia en la industria, hemos
          perfeccionado el arte de embellecer tus manos y pies con pasión y
          profesionalismo.
        </p>
        <button
          className="px-6 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
          onClick={() => navigate("/salon")}
        >
          ¡Conócenos!
        </button>
      </div>
      <div className="relative w-1/2 h-1/2 order-2">
        <div className="overflow-hidden">
          <img
            src={imgLocal}
            alt="Salon Image"
            className="object-cover w-full h-4/6"
          />
        </div>
      </div>
    </div>
  );
};

export default SalonComponent;
