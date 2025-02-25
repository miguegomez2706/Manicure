const Carousel = () => {
  return (
    <div className="carousel relative overflow-hidden w-full mx-auto">
      <div className="carousel-inner flex transition-transform duration-500">
        <div className="carousel-item w-ful">
          <img
            src="../../../img1.jpeg"
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
