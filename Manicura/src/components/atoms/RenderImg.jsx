import Card from "./Card";
// imagen {
//   image: img3,
//   info: "info3",
//   title: "titulos3",
// }
const RenderImg = ({ imagen }) => {
  const { image, title, info } = imagen;
  return (
    <div className="md:m-auto">
      <Card imgSrc={image}>
        <h3>{title}</h3>
        <p>{info}</p>
      </Card>
    </div>
  );
};

export default RenderImg;
