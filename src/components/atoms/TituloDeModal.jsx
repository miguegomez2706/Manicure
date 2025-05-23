import PropTypes from "prop-types";

const TituloDeModal = ({ children }) => {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      {children}
    </div>
  );
};

TituloDeModal.propTypes = {
  children: PropTypes.node,
};

export default TituloDeModal;
