import imgs from "../../assets/image/semipermanente/semi6.jpeg";

const AboutUs = () => {
  return (
    <section className="grid grid-col-1 lg:grid-cols-2 pt-10">
      <div className="flex flex-col pl-6 items-start justify-center order-2 pt-10">
        <h1 className="text-6xl font-medium mb-6">Sobre Nosotros</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          En Only Nails, nuestra historia se entrelaza con la belleza y la
          excelencia en el cuidado de uñas. Desde nuestros inicios en Monterrey,
          Nuevo León, nos hemos dedicado a proporcionar servicios de manicura y
          pedicura excepcionales en múltiples ubicaciones, incluyendo Plaza
          Fiesta San Agustín, Paseo San Pedro, Galerías Monterrey, Plaza
          Cumbres, Plaza Fiesta Anáhuac, Esfera City Center y nuestra filosofía
          se basa en que la formación es la clave del éxito.
        </p>
      </div>
      <div className="flex items-center justify-center order-1">
        <img
          src={imgs}
          alt=""
          className="md:h-120 rounded-md object-cover overflow-hidden shadow-xl"
        />
      </div>
    </section>
    //asdfasdfasdkfujhasdiufyhaiosudfyha
  );
};

export default AboutUs;
