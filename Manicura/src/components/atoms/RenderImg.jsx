import Card from "./Card";
// imagen {
//   image: img3,
//   info: "info3",
//   title: "titulos3",
// }
const RenderImg = ({ imagen, rounded }) => {
  const { image, title, info } = imagen;
  return (
    <div className="md:m-auto">
      <Card imgSrc={image} hasRoundedBorders={rounded}>
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {info && <p className="text-sm mt-1">{info}</p>}
      </Card>
    </div>
  );
};

export default RenderImg;
