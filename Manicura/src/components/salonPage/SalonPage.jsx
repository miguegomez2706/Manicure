// import { useNavigate } from "react-router-dom";
import imgs from "../../assets/image/semipermanente/semi6.jpeg";
// import imgs from "../../assets/image/comunes/imagenLocal.jpeg";
import Mapa from "../map/Mapa";
const SalonPage = () => {
  // const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-10">
      <section className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6">Sobre Nostros</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            En Only Nails, ofrecemos una experiencia única en el cuidado de tus
            uñas. Con más de 30 años en la industria, nuestro equipo de expertos
            está comprometido con la calidad y el bienestar de nuestros
            clientes.
          </p>
          <button
            className="mt-6 px-6 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
            onClick={() => window.history.back()} // Para volver atrás
          >
            Volver
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={imgs}
            alt=""
            className="h-120 rounded-md object-contain overflow-hidden shadow-xl"
          />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 p-4">
          <div>
            <h1 className="flex text-2xl font-bold justify-center mb-4">
              Ubicación del Local
            </h1>
            <div className="">
              <Mapa />
            </div>
          </div>
          <div className="flex items-center justify-center font-semibold ">
            Datos: Necochea 307 OF 3, H3500 Resistencia, Chaco agregar mas datos
          </div>
        </div>
      </section>
    </div>

    // <section className="min-h-screen">
    //   <div className="flex ">
    //     <div>
    //       <h1 className="text-4xl font-bold mb-6">Acerca de Nuestro Salón</h1>
    //       <p className="text-lg text-gray-700 max-w-2xl text-center">
    //         En Only Nails, ofrecemos una experiencia única en el cuidado de tus
    //         uñas. Con más de 30 años en la industria, nuestro equipo de expertos
    //         está comprometido con la calidad y el bienestar de nuestros
    //         clientes.
    //       </p>
    //       <button
    //         className="mt-6 px-6 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
    //         onClick={() => navigate("/")} // Para volver atrás
    //       >
    //         Volver
    //       </button>
    //     </div>
    //     <div>
    //       <img src={imgs} alt="" className="object-cover w-full p-10 h-150" />
    //     </div>
    //   </div>
    // </section>
  );
};

export default SalonPage;
// const posicion = [-27.45129898657986, -58.99163777380161]; // Local de Romi
