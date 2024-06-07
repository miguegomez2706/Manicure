import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/image/semipermanente/semi5.jpeg";
import img2 from "../../assets/image/semipermanente/semi6.jpeg";
import img3 from "../../assets/image/capping/img3.jpeg";

const CarouselComponent = () => {
  return (
    <div className="container mx-auto my-4 bg-white w-full">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop
        useKeyboardArrows={false}
        autoPlay>
        <div className="h-150">
          <img className="h-150 object-contain" src={img1} alt="Slide 1" />
        </div>
        <div className="h-150">
          <img
            className="object-contain w-full h-full"
            src={img2}
            alt="Slide 2"
          />
        </div>
        <div className="h-150">
          <img
            className="object-contain w-full h-full"
            src={img3}
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
