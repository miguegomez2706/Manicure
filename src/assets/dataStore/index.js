// SWIPER

import swiper2 from "../image/swiper/swiper2.webp";
import swiper3 from "../image/swiper/swiper3.webp";
import swiper4 from "../image/swiper/swiper4.webp";
import swiper6 from "../image/swiper/swiper6.webp";
import swiper7 from "../image/swiper/swiper7.webp";

// SWIPER SOBRE NOSOTROS.
import aboutus1 from "../image/sobreNosotros/aboutus1.jpg";

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

const slidesAboutUs = [
  {
    imgSrc: aboutus1,
    alt: "Slide 1",
  },
  {
    imgSrc: aboutus1,
    alt: "Slide 1",
  },
  {
    imgSrc: aboutus1,
    alt: "Slide 1",
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
    id: 0,
    title: "React: Buscador de Canciones - Renderizado condicional de datos",
    nameTeacher: "Romina Gomez",
    price: 34000,
  },
  {
    id: 1,
    title: "React: Buscador de Canciones - Renderizado condicional de datos",
    nameTeacher: "Romina Gomez",
    price: 30000,
  },
  {
    id: 2,
    title: "Introducción a la ética empresarial",
    nameTeacher: "Romina Gomez",
    price: 21000,
  },
  {
    id: 3,
    title: "Curso gratuito de fotografía con smartphone",
    nameTeacher: "Romina Gomez",
    price: 14000,
  },
  {
    id: 4,
    title: "E-commerce para principiantes",
    nameTeacher: "Romina Gomez",
    price: 11000,
  },
  {
    id: 5,
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
  {
    nombre: "Manicura",
    descripcion: "Sistema Soft Gel.",
    subDescripcion:
      "Consiste en un método de extensión de uñas mediante tips que se adhieren directamente a la superficiae de la uñas natural",
    opciones: [
      { nombre: "Esmaltado Liso.", precio: 15000 },
      { nombre: "Diseño en 3 uñas", precio: 17000 },
      { nombre: "Diseño en las 10 uñas", precio: 19500 },
    ],
  },
  {
    nombre: "",
    descripcion: "Sistema De Esculpidas.",
    subDescripcion:
      "Son extensiones que se contruyen a partir de la uña natural con material acrigel o gel. Estas permiten restaurar y reconstruir uñas mordidas o simplemente, lucir uñas mas largas.",
    opciones: [
      { nombre: "Esmaltado Liso", precio: 18500 },
      { nombre: "Diseño hasta en 3 uñas", precio: 20500 },
      { nombre: "Diseño en las 10 uñas", precio: 25000 },
    ],
  },
  {
    nombre: "",
    descripcion: "Esmaltado Semipermanente.",
    subDescripcion:
      "Es un esmaltado de secado inmediato y de larga duracion que mantiene un resultado reluciente. Este efecto se consigue con la palicacion de esmaltes especificos y el secado de las uñas en una luz UV o LED.",
    opciones: [
      { nombre: "Esmaltado Liso", precio: 10000 },
      { nombre: "Diseño hasta en 3 uñas", precio: 12500 },
      { nombre: "Diseño en las 10 uñas", precio: 13500 },
    ],
  },
  {
    nombre: "",
    descripcion: "Sistema Kapping.",
    subDescripcion:
      "Consiste en aplicar una fina capa de acrigel o gel fortificador sobre la uña que actua como una barrera protectora.",
    opciones: [
      { nombre: "Esmaltado Liso", precio: 12500 },
      { nombre: "Diseño hasta en 3 uñas", precio: 15500 },
      { nombre: "Diseño en las 10 uñas", precio: 17500 },
    ],
  },
  {
    nombre: "Pedicura",
    descripcion: "Esmaltado Semipermanente en Pies.",
    subDescripcion:
      "Tecnica estetica de pedicura que consiste en restaurar y, seguidamente, embellecer las uñas",
    opciones: [
      { nombre: "Esmaltado Liso", precio: 13500 },
      { nombre: "Diseño en todas la uñas", precio: 15500 },
    ],
  },
  {
    nombre: "",
    descripcion: "Spa de Pies.",
    subDescripcion:
      "Es un tratamiento intensivo que cuida los pies de forma profunda y relajante.",
    opciones: [
      { nombre: "Spa de pies (Liso)", precio: 17000 },
      { nombre: "Diseño 1 o 2 uñas", precio: 1000 },
      { nombre: "Diseño en 10 uñas", precio: 2000 },
    ],
  },
];

export {
  imgs,
  imgsTotal,
  slidesData,
  perfiles,
  servicios,
  contenidoCursos,
  slidesAboutUs,
};
