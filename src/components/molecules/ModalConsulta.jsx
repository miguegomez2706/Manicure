import Btn from "../atoms/Btn";
import NewInput from "../atoms/NewInput";
import NuevoModal from "../atoms/NuevoModal";
import TituloDeModal from "../atoms/TituloDeModal";
import { IoLogoWhatsapp } from "react-icons/io5";

const ModalConsulta = () => {
  return (
    <>
      <NuevoModal>
        <TituloDeModal>
          <h1>El Titulo Del Modal</h1>
        </TituloDeModal>
        <div className="">
          <div className="flex justify-between">
            <NewInput placeholder="Nombre" type="text" />
            <NewInput placeholder="Apellido" type="text" />
            <p> </p>
          </div>
          <div className="mt-5">
            <NewInput placeholder="Email" type="email" />
          </div>
          <div className="flex items-center mt-3">
            <IoLogoWhatsapp className="text-3xl" />
            <h1>Whats App</h1>
          </div>
          <div className="mt-3">
            <NewInput placeholder="Consulta" />
          </div>
          <div className="mt-5 flex justify-around">
            <NewInput placeholder="Cod. Area" />
            <NewInput placeholder="Numero" />
          </div>
        </div>
        <Btn text="Enviar Consulta" />
      </NuevoModal>
    </>
  );
};

export default ModalConsulta;
