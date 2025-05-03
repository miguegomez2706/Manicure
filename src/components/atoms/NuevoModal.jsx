import PropTypes from "prop-types";

const NuevoModal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col gap-6 min-w-80 ">
        {children}
      </div>
    </div>
  );
};

NuevoModal.propTypes = {
  children: PropTypes.node,
};

export default NuevoModal;
