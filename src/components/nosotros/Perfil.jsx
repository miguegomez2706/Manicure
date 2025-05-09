import PropTypes from "prop-types";
import img1 from "../../assets/image/semipermanente/semi3.jpeg";

const Perfil = ({ title, name }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 w-full max-w-80 gap-4 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
        <div className="order-1 ">
          <img
            src={img1}
            alt="Commercial Image"
            className="h-56 md:h-80 lg:h-full w-full object-cover transition-transform duration-300 hover:scale-105 max-h-72"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-6 md:p-10 order-2 ">
          <p className="font-rale text-2xl lg:text-3xl text-center pb-3 xl:pb-6">
            {name}
          </p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

Perfil.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

export default Perfil;
