import Perfil from "../nosotros/Perfil";
import AboutUs from "../atoms/AboutUs";
import OurLocal from "../organisms/OurLocal";
import { perfiles } from "../../assets/dataStore";
import ReusableSwiper from "../organisms/ReusableSwiper";

const SalonPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-10 2xl:px-44">
      <AboutUs />
      <section className="lg:pt-32 py-10 flex flex-col">
        <h1 className="text-5xl font-normal items-center justify-center mb-4">
          Nuestro Equipo
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-12 gap-10">
          {perfiles.map((perfil, index) => (
            <Perfil key={index} name={perfil.name} title={perfil.title} />
          ))}
        </div>
      </section>
      <section className="mt-16 sm:mt-28">
        <h1 className="flex text-5xl font-normal items-center justify-center mb-4">
          ¡Descubre Nuestra Sucursal!
        </h1>
        <div className="h-[70vh] overflow-hidden">
          <ReusableSwiper />
        </div>
        <OurLocal />
      </section>
    </div>
  );
};

export default SalonPage;
