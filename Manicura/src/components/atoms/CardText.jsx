import React from "react";

const CardText = ({ text, color }) => {
  return (
    <div className="">
      <div
        // className={`border border-gray-400 h-120 w-ancho flex justify-center items-center ${color}`}
        className={`grid grid-cols-1 xl:grid-cols-2 gap-4 border border-gray-200 rounded-lg overflow-hidden shadow-lg ${color}`}
      >
        <h4 className="text-7xl my-10 ml-10 font-serif">{text}</h4>
      </div>
    </div>
  );
};
export default CardText;
{
  /* SIRVE PÁRA PODER CENTRAR LA CARDTEXTO
  
  <div className="flex justify-center">
<div className="container border border-gray-400 h-120 w-52 flex justify-center ">
  hola que hace
</div>
</div> */
}
