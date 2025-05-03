import { FaPlayCircle } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdOutlineWifi, MdOutlineWatchLater } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { GoDeviceCameraVideo } from "react-icons/go";
import BgWhiteCard from "../atoms/BgWhiteCard";
import { useParams } from "react-router-dom";
// import Btn from "../atoms/Btn";

const InfoCurso = () => {
  const { id } = useParams();

  // Ejemplo de datos (puedes obtenerlos de una API o estado)
  const cursos = [
    {
      id: 1,
      nombre: "Curso de React",
      descripcion: "Aprende React desde cero",
      detalles: "Un curso completo sobre React JS.",
    },
    {
      id: 2,
      nombre: "Curso de Tailwind",
      descripcion: "Domina Tailwind CSS",
      detalles: "Apr  aprender Tailwind desde cero.",
    },
    {
      id: 3,
      nombre: "Curso de Tailwind",
      descripcion: "Domina Tailwind CSS",
      detalles: "Apr  aprender Tailwind desde cero.",
    },
    {
      id: 4,
      nombre: "Curso de Tailwind",
      descripcion: "Domina Tailwind CSS",
      detalles: "Apr  aprender Tailwind desde cero.",
    },
    {
      id: 5,
      nombre: "Curso de Tailwind",
      descripcion: "Domina Tailwind CSS",
      detalles: "Apr  aprender Tailwind desde cero.",
    },
  ];

  const curso = cursos.find((curso) => curso.id === parseInt(id));

  if (!curso) {
    return <div className="text-center text-red-500">Curso no encontrado</div>;
  }
  return (
    <div className="min-h-screen">
      <div className="bg-gray-500 h-72 text-white flex items-center justify-center px-5">
        <h1 className="text-3xl text-center max-w-4xl">
          {/*aca va el titulo*/}
          {curso.nombre}
        </h1>
      </div>
      <div className="mx-5 md:mx-44 grid grid-cols-1 lg:grid-cols-4 text-black mt-10 lg:gap-10">
        <div className="md:col-span-3 lg:pr-14 order-2">
          <div className="my-10">
            <h3 className="text-3xl mb-10">Presentación</h3>
            <p>
              {/*aca va la presentacion*/}
              {curso.descripcion}
            </p>
          </div>
          <div>
            <h1 className="text-3xl mb-10">Modalidad a Distancia</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="border rounded-md shadow-md min-w-80">
                <div className="flex items-center">
                  <FaPlayCircle className="text-gray-700 text-4xl m-10 min-w-10" />
                  <h3 className="text-2xl">
                    En vivo o acceso a las grabaciones
                  </h3>
                </div>
              </div>
              <div className="border rounded-md shadow-md min-w-80">
                <div className="flex items-center">
                  <HiOutlineNewspaper className="text-gray-700 text-4xl m-10 min-w-10" />
                  <h3 className="text-2xl">Recursos Multimedia</h3>
                </div>
              </div>
              <div className="border rounded-md shadow-md min-w-80">
                <div className="flex items-center">
                  <MdOutlineWifi className="text-gray-700 text-4xl m-10 min-w-10" />
                  <h3 className="text-2xl">100% a distancia</h3>
                </div>
              </div>
              <div className="border rounded-md shadow-md min-w-80">
                <div className="flex items-center">
                  <RiUserVoiceFill className="text-gray-700 text-4xl m-10 min-w-10" />
                  <h3 className="text-2xl">Acompañamiento de tutores</h3>
                </div>
              </div>
            </div>
            <div className="my-10">
              <h1 className="text-3xl mb-5">Objetivos generales</h1>
              <p>{curso.detalles}</p>
            </div>
            <div className="my-10">
              <h1 className="text-3xl mb-5">Equipo docente</h1>
              <h2 className="text-lg">Profesor </h2>
              <h2 className="font-semibold text-lg py-2">
                Nicolas Matias Lopez Martinez
              </h2>
              <p>
                Mi nombre es Nicolás López Martínez, farmacéutico graduado (y
                desempeñado en el rubro hospitalario) desde el 2015. Participo
                en tareas docentes desde el 2012, dictando actualmente 3
                cátedras en la Universidad Maimónides (carrera de farmacia y
                bioquímica). Me encuentro por finalizar una maestría en la
                gestión de sistemas de salud y siendo director técnico de una
                distribuidora de productos médicos.
              </p>
            </div>
          </div>
        </div>
        <div className="md:ml-5 md:col-span-1 order-1 lg:order-2">
          <div className="flex flex-col sm:gap-10">
            <BgWhiteCard customStyle="min-w-80">
              <div className="flex items-center m-3 justify-between">
                <div className="flex items-center">
                  <CiCalendar className="text-2xl" />
                  <h1 className="ml-2">Inicio de Cursada</h1>
                </div>
                <h1 className="font-semibold">31/01/2025</h1>
              </div>
              <div className="border m-3 p-2 rounded-md flex items-center justify-between">
                <MdOutlineWatchLater className="text-2xl" />
                <h1>Duración:</h1>
                <span className="font-bold">14 Semanas</span>
              </div>
              <div className="border m-3 p-2 rounded-md">
                <div className="flex items-center">
                  <GoDeviceCameraVideo className="text-2xl" />
                  <h1 className="ml-3">Clases en vivo</h1>
                </div>
                <h1>Lunes de 19:00 a 21:30hs</h1>
              </div>
            </BgWhiteCard>
            <BgWhiteCard customStyle="mt-28 min-w-80">
              <div className="flex flex-col justify-between p-5 gap-5">
                <p>Valor</p>
                <p>65.3900 $</p>
                <div className="border rounded-sm border-green-500 text-green-500 w-fit px-1">
                  <p>Efectivo</p>
                </div>
              </div>
            </BgWhiteCard>
            {/* <BgWhiteCard customStyle="p-5 min-w-80">
              <div className="px-5">
                <Btn
                  textColor="text-black"
                  bgColor="bg-white hover:text-white"
                  text="Inscribirse Ahora"
                />
                <Btn
                  to="/Modal"
                  text="Realizar una Consulta"
                  bgColor="trashover:bg-buttonHover hover:border-gray-900 bg-gray-900 hover:bg-transparent hover:text-black"
                />
              </div>
            </BgWhiteCard> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCurso;
