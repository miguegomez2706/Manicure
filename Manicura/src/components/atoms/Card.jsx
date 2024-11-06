const Card = ({ children, imgSrc, hasRoundedBorders }) => {
  return (
    <div
      className={`m-4 relative overflow-hidden shadow-lg group ${
        hasRoundedBorders ? "rounded-2xl" : ""
      }`}
    >
      <img
        src={imgSrc}
        alt=""
        className="group-hover:scale-110 duration-200 h-56 md:h-80 lg:h-full w-full object-cover transition-transform hover:brightness-50 hover:scale-105"
      />
      {children && (
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <div className="p-4 text-white">{children}</div>
        </div>
      )}
    </div>
  );
};
export default Card;
