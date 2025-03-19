// import { info } from "autoprefixer";
import img1 from "../image/semipermanente/semi1.jpeg";
import img2 from "../image/semipermanente/semi2.jpeg";
import img3 from "../image/semipermanente/semi3.jpeg";
import img4 from "../image/semipermanente/semi4.jpeg";
import img7 from "../image/semipermanente/semi7.jpeg";
import bluenailImage from "../../assets/image/swiper/bluenail.jpg";
import mixnailImage from "../../assets/image/swiper/mixnail.jpg";
import yellownailImage from "../../assets/image/swiper/yellownail.jpg";

const imgs = [
  {
    image: img1,
    info: "Las mejores uñas semipermanentes del universo",
    title: "Semipermanentes",
    cssClass: "font-semibold",
  },
  {
    image: img2,
    info: "El nivel de estas uñas estan a otro nivel la verdad una cosa de locos impresionante",
    title: "Esculpidas",
    cssClass: "font-semibold",
  },
  {
    image: img3,
    title: "Caping",
    info: "La verdad no tengo idea cual es la diferencia con las otras pero bueno es increible lo linda que es la verdad no teiene sentido en hermoso",
    cssClass: "font-semibold",
  },
];

const slidesData = [
  { imgSrc: bluenailImage, alt: "Slide 1" },
  { imgSrc: mixnailImage, alt: "Slide 2" },
  { imgSrc: yellownailImage, alt: "Slide 3" },
];

const imgsTotal = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img7,
  },
];

const perfiles = [
  { name: "Romina Gomez", title: "Manicurista" },
  { name: "Ceferina Petrona", title: "Pestañista" },
  { name: "Eufemia Hipólito", title: "Piecista" },
];
export { imgs, imgsTotal, slidesData, perfiles };
