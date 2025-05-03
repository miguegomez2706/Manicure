import PropTypes from "prop-types";

const Card = ({ children, imgSrc, hasRoundedBorders, modal, show = false }) => {
  return (
    <div
      className={`m-4 relative overflow-hidden shadow-lg group ${
        hasRoundedBorders ? "rounded-2xl" : ""
      }`}
    >
      <img
        src={imgSrc}
        alt=""
        className="brightness-90 duration-200 h-56 md:h-80 lg:h-full  w-full object-cover transition-transform group-hover:scale-105"
      />
      {modal && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-14 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      )}
      {/*aca esta el problema el listCardGeneral que para cel se ve mal*/}
      {children && show && (
        <div className="md:absolute inset-0 flex items-end object-cover bg-gradient-to-t from-black/60 to-transparent">
          <div className="p-4 text-white">{children}</div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  imgSrc: PropTypes.string.isRequired,
  hasRoundedBorders: PropTypes.bool,
  modal: PropTypes.bool,
};
export default Card;
