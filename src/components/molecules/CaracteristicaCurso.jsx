import { HiOutlineNewspaper } from "react-icons/hi2";

const CaracteristicaCurso = ({ text, children }) => {
  return (
    <div className="border rounded-md shadow-md min-w-80">
      <div className="flex items-center">
        <HiOutlineNewspaper className="text-gray-700 text-4xl m-10 min-w-10" />
        {children}
        <h3 className="text-2xl">{text}</h3>
      </div>
    </div>
  );
};

export default CaracteristicaCurso;

// terminar este componente
