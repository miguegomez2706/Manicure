import PropTypes from "prop-types";
import Card from "./Card";

const RenderImg = ({ imagen, rounded, onClick, modal }) => {
  const { image, title, info } = imagen;
  let styleBase = "md:m-auto ";
  let styleModal = modal
    ? "cursor-pointer transition-transform duration-300 hover:brightness-75"
    : "";
  return (
    <div className={`${styleBase} ${styleModal}`} onClick={onClick}>
      <Card imgSrc={image} hasRoundedBorders={rounded} modal={modal}>
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {info && <p className="text-sm mt-1">{info}</p>}
      </Card>
    </div>
  );
};

RenderImg.propTypes = {
  imagen: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    info: PropTypes.string,
  }),
  rounded: PropTypes.bool,
  modal: PropTypes.bool,
  onClick: PropTypes.func,
};

export default RenderImg;
