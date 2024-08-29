import React from "react";
import { imgsTotal } from "../../assets/dataStore";
import RenderImg from "../atoms/RenderImg";
const ListCardGeneral = () => {
  return (
    <div className="">
      <div className="flex flex-col  mx-44">
        <h1>hola</h1>
        <h4>que haces</h4>
        <div className="flex-row justify-between items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {imgsTotal.map((img) => (
            <RenderImg imagen={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCardGeneral;
