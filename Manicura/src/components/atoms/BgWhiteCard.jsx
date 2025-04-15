import PropTypes from "prop-types";
const BgWhiteCard = ({ children, customStyle }) => {
  return (
    <div
      className={`border border-x-gray-400 mt-8 bg-white rounded-md  flex flex-col justify-around ${customStyle} shadow-2xl`}
    >
      {children}
    </div>
  );
};

BgWhiteCard.propTypes = {
  children: PropTypes.node,
  customStyle: PropTypes.string,
};
export default BgWhiteCard;
