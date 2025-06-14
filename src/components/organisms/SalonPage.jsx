import Perfil from "../molecules/Perfil";
import AboutUs from "../atoms/AboutUs";
import OurLocal from "./OurLocal";
import { perfiles, slidesAboutUs } from "../../assets/dataStore";
import ReusableSwiper from "./ReusableSwiper";
import { useEffect, useState } from "react";

const SalonPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-100 p-10 2xl:px-44  animate-fade-in transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } `}
    >
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
        <div className="mt-10 mb-20 shadow-2xl rounded-lg overflow-hidden">
          <ReusableSwiper slide={slidesAboutUs} height="h-[550px]" />
        </div>
        <OurLocal />
      </section>
    </div>
  );
};

export default SalonPage;
