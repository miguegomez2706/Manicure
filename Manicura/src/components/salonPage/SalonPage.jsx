// import { useNavigate } from "react-router-dom";
import imgs from "../../assets/image/semipermanente/semi6.jpeg";
// import imgs from "../../assets/image/comunes/imagenLocal.jpeg";
import Mapa from "../map/Mapa";
import Perfil from "../nosotros/Perfil";
const SalonPage = () => {
  // const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-10 md:px-44">
      <section className="grid grid-cols-2">
        <div className="flex flex-col pl-6 items-start justify-center order-2">
          <h1 className="text-6xl font-medium mb-6">Sobre Nostros</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            {/* En Only Nails, ofrecemos una experiencia única en el cuidado de tus
            uñas. Con más de 30 años en la industria, nuestro equipo de expertos
            está comprometido con la calidad y el bienestar de nuestros
            clientes. */}
            En Only Nails, nuestra historia se entrelaza con la belleza y la
            excelencia en el cuidado de uñas. Desde nuestros inicios en
            Monterrey, Nuevo León, nos hemos dedicado a proporcionar servicios
            de manicura y pedicura excepcionales en múltiples ubicaciones,
            incluyendo Plaza Fiesta San Agustín, Paseo San Pedro, Galerías
            Monterrey, Plaza Cumbres, Plaza Fiesta Anáhuac, Esfera City Center y
            nuestra filosofía se basa en que la formación es la clave del éxito.
          </p>
          <button
            className="mt-6 px-6 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
            onClick={() => window.history.back()} // Para volver atrás
          >
            Volver
          </button>
        </div>
        <div className="flex items-center justify-center order-1">
          <img
            src={imgs}
            alt=""
            className="h-120 rounded-md object-cover overflow-hidden shadow-xl"
          />
        </div>
      </section>
      <section className="mt-40">
        <h1 className="flex text-5xl font-normal items-center justify-center mb-4">
          ¡Descubre Nuestra Sucursal!
        </h1>
        <div className="grid grid-cols-2">
          <div className="order-2">
            <div className="">
              <Mapa />
            </div>
          </div>
          <div className="flex order-1">
            <div className="p-14">
              <h1 className="text-5xl flex top-0">Resistencia</h1>
              <p className="mx-5 my-3">
                <span className="text-yellow-500 text-3xl">⭐</span>
                <span className="text-yellow-500 text-3xl">⭐</span>
                <span className="text-yellow-500 text-3xl">⭐</span>
                <span className="text-yellow-500 text-3xl">⭐</span>
                <span className="text-yellow-500 text-3xl">⭐</span>
              </p>
              <div className="my-10">
                <div className="flex mt-5">
                  <p className="font-semibold">Teléfono:</p>
                  <p className="ml-2">+54 362 494-0856</p>
                </div>
                <div className="flex mt-5 ">
                  <p className="font-semibold">Horarios: </p>
                  <p className="ml-2">11:00 AM - 8:00 PM Lunes a Sabado</p>
                </div>
                <div className="flex mt-5 ">
                  <p className="font-semibold">Direccion: </p>
                  <p className="ml-2">Necochea 307 OF 3, H3500 Resistencia</p>
                </div>
                <div className="flex mt-5 ">
                  <p className="font-semibold">Email: </p>
                  <p className="ml-2">Nails.Art@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:grid-cols-3 px-4 md:px-20 pt-20 py-10  grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <Perfil />
        </div>
        <div>
          <Perfil />
        </div>
        <div>
          <Perfil />
        </div>
      </section>
    </div>
  );
};

export default SalonPage;
// const posicion = [-27.45129898657986, -58.99163777380161]; // Local de Romi
