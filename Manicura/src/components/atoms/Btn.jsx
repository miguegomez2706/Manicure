import PropTypes from "prop-types";

const Btn = ({ buttonText, type, rounded, onClick }) => {
  const baseStyles =
    "px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 w-32 h-16 hover:bg-slate-700 flex text-nowrap justify-center items-center";

  const style = {
    primary: " bg-black text-white",
    secondary: "bg-white ",
    tertiary: "",
  };
  const roundedStyle = rounded ? "rounded" : "";

  return (
    <button
      className={`${style[type]} ${roundedStyle} ${baseStyles}`}
      onClick={onClick}  // Agregado el onClick aquí
    >
      {buttonText}
    </button>
  );
};

Btn.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Btn;


