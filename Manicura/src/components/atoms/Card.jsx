const Card = ({ children, imgSrc }) => {
  return (
    <div className="m-4 relative overflow-hidden rounded-2xl shadow-lg group">
      <img
        src={imgSrc}
        alt=""
        className="roup-hover:scale-110 duration-200 h-56 md:h-80 lg:h-full  w-full object-cover transition-transform hover:brightness-50 hover:scale-105 group-hover:scale-110" //El problema esta aca pero no se cual es!
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-white ">{children}</div>
      </div>
    </div>
  );
};
export default Card;
// const Card = ({ children, imgSrc, ...props }) => {
//   return (
//     <div
//       {...props}
//       className="m-4 md:px-20 lg:px-44 relative overflow-hidden rounded-2xl shadow-lg group"
//     >
//       <img
//         src={imgSrc}
//         alt=""
//         className="group-hover:scale-110 duration-200 h-56 md:h-80 lg:h-full w-full object-cover transition-transform hover:brightness-50 hover:scale-105"
//       />
//       <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
//         <div className="p-4 text-white ">{children}</div>
//       </div>
//     </div>
//   );
// };
// export default Card;
