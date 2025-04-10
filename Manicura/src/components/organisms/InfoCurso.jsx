import { FaPlayCircle } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdOutlineWifi } from "react-icons/md";
import { RiUserVoiceFill } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import BgWhiteCard from "../atoms/BgWhiteCard";
import Btn from "../atoms/Btn";
const InfoCurso = () => {
  return (
    <div className="h-screen ">
      <div className="bg-slate-400 h-72 text-white ">
        <div className="mx-44 grid grid-cols-4">
          <div className="col-span-3 pr-14">
            <div className=" h-72 flex items-center justify-center">
              <h1 className="text-3xl">
                Curso de Elaboración de preparados magistrales en farmacias -
                Conocimientos básicos
              </h1>
            </div>
            <div className="text-black">
              <div>
                <div className="my-10">
                  <h3 className="text-3xl mb-10">Presentacion</h3>
                  <p>
                    Los preparados en las farmacias son aquellos elaborados en
                    los laboratorios de las farmacias comunitarias y
                    hospitalarias. Dentro de estos preparados, contamos con
                    diferentes opciones: magistrales y oficinales, los cuales
                    comparten características en común pero también presentan
                    diferencias. En este curso, aprenderás un breve recorrido
                    histórico y una introducción a los puntos más importantes,
                    para seguir por la legislación y las diferentes opciones de
                    preparados. Luego conocerás las características edilicias,
                    equipamiento y de materias primas además de los tipos de
                    formas farmacéuticas a fabricar: estériles y no estériles.
                    Por último, mediante la explicación del circuito de los
                    preparados magistrales, comprenderás qué sucede desde que el
                    paciente acude con la receta, hasta que va a buscar su
                    preparado. Si bien no es obligatoria la presencia de este
                    tipo de laboratorios en las farmacias comunitarias, es útil
                    para los auxiliares de farmacia tener una primera
                    aproximación a las características generales de estos
                    preparados, dado que las farmacias de todo el país pueden
                    tener este tipo de laboratorios y los auxiliares pueden
                    ayudar en algunas tareas al farmacéutico.
                  </p>
                </div>
                <div>
                  <h1 className="text-3xl mb-10">Modalidad a Distancia</h1>
                  <div className="grid grid-cols-2 gap-5 h-20">
                    <div className="border rounded-md shadow-md">
                      <div className="flex items-center">
                        <FaPlayCircle className="text-gray-700 text-4xl m-10 min-w-10" />
                        <h3 className="text-2xl">
                          En vivo o acceso a las grabaciones
                        </h3>
                      </div>
                    </div>
                    <div className="border rounded-md shadow-md">
                      <div className="flex items-center">
                        <HiOutlineNewspaper className="text-gray-700 text-4xl m-10 min-w-10" />
                        <h3 className="text-2xl">Recursos Multimedia</h3>
                      </div>
                    </div>
                    <div className="border rounded-md shadow-md">
                      <div className="flex items-center">
                        <MdOutlineWifi className="text-gray-700 text-4xl m-10 min-w-10" />
                        <h3 className="text-2xl">100% a distancia</h3>
                      </div>
                    </div>
                    <div className="border rounded-md shadow-md">
                      <div className="flex items-center">
                        <RiUserVoiceFill className="text-gray-700 text-4xl m-10 min-w-10" />
                        <h3 className="text-2xl">Acompañamiento de tutores</h3>
                      </div>
                    </div>
                  </div>
                  {/* <h3 className="text-3xl">Objetivo general</h3> */}
                </div>
                <div>
                  <video src=""></video>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 col-span-1">
            <div className="text-black flex flex-col gap-10">
              <BgWhiteCard customStyle="">
                {/* componente inicio de cursada */}
                <div className="flex items-center m-3 justify-between">
                  <div className="flex items-center">
                    <CiCalendar className="text-2xl" />
                    <h1>Inicio de Cursada</h1>
                  </div>
                  <h1 className="font-semibold">31/01/2025</h1>
                </div>
                <div className="border m-3 p-2 rounded-md flex items-center justify-between">
                  <MdOutlineWatchLater className="text-2xl" />
                  <h1>duracion:</h1>
                  <span className="font-bold"> 14 Semanas</span>
                </div>
                <div className="border m-3 p-2 rounded-md">
                  <div className="flex items-center">
                    <GoDeviceCameraVideo className="text-2xl" />
                    <h1 className="ml-3">Clases en vivo</h1>
                  </div>
                  <h1>Lunes de 19:00 a 21:30hs</h1>
                </div>
              </BgWhiteCard>
              <div>
                <BgWhiteCard customStyle="mt-28">
                  <div className="flex flex-col justify-between p-5 gap-5 ">
                    <p>Valor</p>
                    <p>65.3900 $</p>
                    <div className="border rounded-sm border-green-500 text-green-500 w-fit px-1">
                      <p>Efectivo</p>
                    </div>
                  </div>
                </BgWhiteCard>
                <BgWhiteCard customStyle="p-5">
                  <div className="px-5">
                    <Btn
                      textColor="text-black"
                      bgColor="bg-white hover:text-white"
                      text="Inscribirse Ahora"
                    />
                    <Btn
                      text="Realizar una Consulta"
                      bgColor="trashover:bg-buttonHover hover:border-gray-900 bg-gray-900 hover:bg-transparent hover:text-black"
                    />
                  </div>
                </BgWhiteCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCurso;
