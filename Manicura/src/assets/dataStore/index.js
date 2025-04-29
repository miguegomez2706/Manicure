// SWIPER

import swiper2 from "../image/swiper/swiper2.webp";
import swiper3 from "../image/swiper/swiper3.webp";
import swiper4 from "../image/swiper/swiper4.webp";
import swiper6 from "../image/swiper/swiper6.webp";
import swiper7 from "../image/swiper/swiper7.webp";

// import { info } from "autoprefixer";
import img1 from "../image/semipermanente/semi1.jpeg";
import img2 from "../image/semipermanente/semi2.jpeg";
import img3 from "../image/semipermanente/semi3.jpeg";
import img4 from "../image/semipermanente/semi4.jpeg";
import img7 from "../image/semipermanente/semi7.jpeg";

const slidesData = [
  {
    imgSrc: swiper6,
    alt: "Slide 1",
  },
  {
    imgSrc: swiper7,
    alt: "Slide 2",
  },
  {
    imgSrc: swiper2,
    alt: "Slide 3",
  },
  {
    imgSrc: swiper4,
    alt: "Slide 4",
  },
];

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

const contenidoCursos = [
  {
    title: "React: Buscador de Canciones - Renderizado condicional de datos",
    nameTeacher: "Romina Gomez",
    price: 34000,
  },
  {
    title: "React: Buscador de Canciones - Renderizado condicional de datos",
    nameTeacher: "Romina Gomez",
    price: 30000,
  },
  {
    title: "Introducción a la ética empresarial",
    nameTeacher: "Romina Gomez",
    price: 21000,
  },
  {
    title: "Curso gratuito de fotografía con smartphone",
    nameTeacher: "Romina Gomez",
    price: 14000,
  },
  {
    title: "E-commerce para principiantes",
    nameTeacher: "Romina Gomez",
    price: 11000,
  },
  {
    title: "Fotografía para Instagram",
    nameTeacher: "Romina Gomez",
    price: 20000,
  },
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

// Arreglo con los datos de los servicios
const servicios = [
  { nombre: "Corte de Cabello", descripcion: "Corte básico.", precio: 15000 },
  { nombre: "Manicura", descripcion: "Manicura básica.", precio: 15000 },
  { nombre: "Pedicura", descripcion: "Pedicura clásica.", precio: 20000 },
  { nombre: "Masaje Facial", descripcion: "Masaje relajante.", precio: 10000 },
  {
    nombre: "Tinte de Cabello",
    descripcion: "Cambio de color.",
    precio: 40000,
  },
];

export { imgs, imgsTotal, slidesData, perfiles, servicios, contenidoCursos };
