import React from "react";
import Btn from "../atoms/Btn";
import RenderImg from "../atoms/RenderImg";
import { imgs } from "../../assets/dataStore";

const ListCard = () => {
  return (
    <div className="flex flex-col bg-mycolor h-full items-center pt-6">
      <div className="justify-between items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-3/4">
        {imgs.map((img) => (
          <RenderImg imagen={img} texto={"Algo"} rounded={true} modal={false} />
        ))}
      </div>
      <div className="flex justify-center items-center pb-10">
        <Btn rounded={true} type={"primary"} buttonText={"Ver Curso!"} />
      </div>
    </div>
  );
};

export default ListCard;
