import React from "react";
import Btn from "../atoms/Btn";
import RenderImg from "../atoms/RenderImg";
import { imgs } from "../../assets/dataStore";

const ListCard = () => {
  return (
    <div className="flex flex-col bg-mycolor h-full mx-44 ">
      <div className="flex justify-around p-14 container mx-auto my-4">
        {imgs.map((img) => (
          <RenderImg imagen={img} />
        ))}
      </div>
      <div className="flex justify-center items-center pb-10">
        <Btn
          bg={"w-32 h-16 bg-white rounded hover:bg-mycolor"}
          nameButton={"Lista Card"}
        />
      </div>
    </div>
  );
};

export default ListCard;
