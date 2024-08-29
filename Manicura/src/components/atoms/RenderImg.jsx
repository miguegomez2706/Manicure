import Card from "./Card";
// imagen {
//   image: img3,
//   info: "info3",
//   title: "titulos3",
// }
const RenderImg = ({ imagen }) => {
  const { image, title, info, cssClass } = imagen;
  return (
    <div>
      <Card imgSrc={image}>
        <h3 className={cssClass}>{title}</h3>
        <p>{info}</p>
      </Card>
    </div>
  );
};

export default RenderImg;
