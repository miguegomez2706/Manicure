//Esto esta funcionando
//import React from "react";
// import { imgsTotal } from "../../assets/dataStore";
// import RenderImg from "../atoms/RenderImg";
// const ListCardGeneral = () => {
//   return (
//     <div className="">
//       <div className="px-4 md:px-20 lg:px-44 ">
//         <h1 className="font-extralight text-4xl md:text-6xl my-6 md:my-10 lg:my-14 leading-tight">
//           Todos Nuestros
//         </h1>
//         <h4 className="font-extralight text-4xl md:text-6xl my-6 md:my-10 lg:my-14 leading-tight">
//           Trabajos!
//         </h4>
//       </div>
//       <div className="">
//         <div className="flex-row justify-between w-full items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {imgsTotal.map((img) => (
//             <RenderImg imagen={img} texto={"Algo"} rounded={false} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListCardGeneral;

import { useState } from "react";
import { imgsTotal } from "../../assets/dataStore";
import RenderImg from "../atoms/RenderImg";
import Modal from "../atoms/Modal";

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

  return (
    <div className="">
      <div className="px-4 md:px-20 lg:px-44 ">
        <h1 className="font-extralight text-4xl md:text-6xl my-6 md:my-10 lg:my-14 leading-tight">
          Todos Nuestros
        </h1>
        <h4 className="font-extralight text-4xl md:text-6xl my-6 md:my-10 lg:my-14 leading-tight">
          Trabajos!
        </h4>
      </div>
      <div className="flex-row justify-between w-full items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {imgsTotal.map((img) => (
          <RenderImg
            key={img.image}
            imagen={img}
            texto={"Algo"}
            rounded={false}
            onClick={() => openModal(img.image)}
            modal={true}
          />
        ))}
      </div>

      {isModalOpen && <Modal imgSrc={selectedImg} onClose={closeModal} />}
    </div>
  );
};

export default ListCardGeneral;
