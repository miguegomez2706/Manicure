const LocalDescription = () => {
  return (
    <div className="sm:p-14">
      <h1 className="text-5xl flex top-0">Resistencia</h1>
      <p className="mx-5 my-3">
        <span className="text-yellow-500 text-3xl">⭐⭐⭐⭐⭐</span>
      </p>
      <div className="my-10">
        <div className="flex mt-5">
          <p className="font-semibold">Teléfono:</p>
          <p className="ml-2">+54 362 494-0856</p>
        </div>
        <div className="flex mt-5 ">
          <p className="font-semibold">Horarios: </p>
          <p className="ml-2">11:00 AM - 8:00 PM Lunes a Sabado</p>
        </div>
        <div className="flex mt-5 ">
          <p className="font-semibold">Direccion: </p>
          <p className="ml-2">Necochea 307 OF 3, H3500 Resistencia</p>
        </div>
        <div className="flex mt-5 ">
          <p className="font-semibold">Email: </p>
          <p className="ml-2">Nails.Art@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default LocalDescription;
