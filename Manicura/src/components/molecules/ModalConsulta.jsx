import NewInput from "../atoms/NewInput";
import NuevoModal from "../atoms/NuevoModal";
import TituloDeModal from "../atoms/TituloDeModal";

const ModalConsulta = () => {
  return (
    <>
      <NuevoModal>
        <TituloDeModal>
          <h1>El titulo del modal</h1>
        </TituloDeModal>
        <div className="w">
          <div className="flex justify-between">
            <NewInput name="Nombre" type="text" />
            <NewInput name="Numero Telefono" type="number" />
            <p> </p>
          </div>
          <div className="border">
            <NewInput name="Email" type="email" />
          </div>
        </div>
      </NuevoModal>
    </>
  );
};

export default ModalConsulta;
