const ModalCard = ({ imgSrc, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75 overflow-hidden px-10 md:p-28"
      onClick={onClose}
    >
      <div
        className="max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()} // evita que se cierre al hacer clic en la imagen
      >
        <img
          src={imgSrc}
          alt="Imagen ampliada"
          className="w-full h-auto max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};
export default ModalCard;
