// import React from "react";
// import Btn from "../atoms/Btn";
// import img1 from "../../assets/image/semipermanente/semi6.jpeg";

// const Commercial = () => {
//   return (
//     <div className="mx-44 my-4">
//       <h3 className="text-7xl my-10 font-rale font-extralight">
//         Hola que <br></br> haces{" "}
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-950 rounded-lg overflow-hidden">
//         <div>
//           <img
//             src={img1}
//             alt=""
//             className="h-120 w-full hover:brightness-50 transition duration-300"
//           />
//         </div>
//         <div className="flex flex-col justify-center items-center gap-5">
//           <p className="font-rale">Mejores Precios</p>
//           <Btn
//             bg={"w-32 h-16 text-white rounded bg-mycolor"}
//             nameButton={"Lista Card"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Commercial;
import React from "react";
import Btn from "../atoms/Btn";
import img1 from "../../assets/image/semipermanente/semi6.jpeg";

const Commercial = () => {
  return (
    <div className="px-4 md:px-20 lg:px-44 py-4">
      <h3 className="text-4xl md:text-6xl my-6 md:my-10 lg:my-14 font-rale font-extralight leading-tight">
        Hola que haces
      </h3>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
        <div className="">
          <img
            src={img1}
            alt="Commercial Image"
            className="h-56 md:h-80 lg:h-full w-full object-cover transition-transform duration-300 hover:brightness-50 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-6 md:p-10">
          <p className="font-rale text-base md:text-2xl lg:text-3xl text-center pb-3 xl:pb-6">
            Mejores Precios
          </p>
          <Btn
            bg={
              "px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-white rounded bg-mycolor hover:bg-mycolor-dark"
            }
            nameButton={"Lista Card"}
          />
        </div>
      </div>
    </div>
  );
};

export default Commercial;
