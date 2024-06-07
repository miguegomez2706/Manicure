import PropTypes from "prop-types";

const Btn = ({ nameButton, bg }) => {
  return <button className={bg}>{nameButton}</button>;
};

Btn.propTypes = {
  nameButton: PropTypes.string.isRequired,
};

export default Btn;
