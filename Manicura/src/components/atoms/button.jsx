import PropTypes from "prop-types";

const Boton = ({ nameButton }) => {
  return <div>{nameButton}</div>;
};

Boton.propTypes = {
  nameButton: PropTypes.string.isRequired,
};

export default Boton;
