const SalonPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6">Acerca de Nuestro Salón</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        En Only Nails, ofrecemos una experiencia única en el cuidado de tus uñas.
        Con más de 30 años en la industria, nuestro equipo de expertos está
        comprometido con la calidad y el bienestar de nuestros clientes.
      </p>
      <button
        className="mt-6 px-6 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
        onClick={() => window.history.back()} // Para volver atrás
      >
        Volver
      </button>
    </div>
  );
};

export default SalonPage;
