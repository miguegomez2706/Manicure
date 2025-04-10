const BgWhiteCard = ({ children, customStyle }) => {
  return (
    <div
      className={`border border-x-gray-400 mt-8 bg-white rounded-md  flex flex-col justify-around ${customStyle} shadow-2xl`}
    >
      {children}
    </div>
  );
};

export default BgWhiteCard;
