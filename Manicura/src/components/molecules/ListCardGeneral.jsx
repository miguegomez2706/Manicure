import { useEffect, useState } from "react";
import { imgsTotal } from "../../assets/dataStore";
import RenderImg from "../atoms/RenderImg";
<<<<<<< HEAD
import ModalCard from "../atoms/ModalCard";
=======
import ModalReserva from "../services/ModalReserva";
>>>>>>> dev-brian

const ListCardGeneral = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImg(null);
  };

  useEffect(() => {
    isModalOpen
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [isModalOpen]);

  return (
    <div className="pt-6 sm:pt-10">
      <div className="px-4 sm:px-8 md:px-20 lg:px-44">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extralight my-4 sm:my-6 md:my-10 lg:my-14 leading-tight">
          Todos Nuestros
        </h1>
        <h4 className="text-3xl sm:text-4xl md:text-6xl font-extralight my-4 sm:my-6 md:my-10 lg:my-14 leading-tight">
          Trabajos!
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8 md:px-20 lg:px-44">
        {imgsTotal.map((img, index) => (
          <RenderImg
            key={index}
            imagen={img}
            texto={"Algo"}
            rounded={false}
            onClick={() => openModal(img.image)}
            modal={true}
          />
        ))}
      </div>

      {isModalOpen && <ModalCard imgSrc={selectedImg} onClose={closeModal} />}
    </div>
  );
};

export default ListCardGeneral;
