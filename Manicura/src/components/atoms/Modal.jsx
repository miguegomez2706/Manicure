import React from "react";

const Modal = ({ imgSrc, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="max-w-3xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imgSrc}
          alt="Imagen ampliada"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
