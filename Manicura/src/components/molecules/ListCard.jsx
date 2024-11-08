import React from "react";
import Btn from "../atoms/Btn";
import RenderImg from "../atoms/RenderImg";
import { imgs } from "../../assets/dataStore";

const ListCard = () => {
  return (
    <div className="flex flex-col bg-mycolor h-full items-center">
      <div className="flex justify-around w-3/4 mt-10">
        {imgs.map((img) => (
          <RenderImg imagen={img} texto={"Algo"} rounded={true} modal={false} />
        ))}
      </div>
      <div className="flex justify-center items-center pb-10">
        {/* <Btn rounded={true} type={"primary"} buttonText={"Reservar Turno"} /> */}
      </div>
    </div>
  );
};

export default ListCard;
