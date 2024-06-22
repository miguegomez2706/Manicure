import React from "react";
import Btn from "../atoms/Btn";
import img1 from "../../assets/image/semipermanente/semi6.jpeg";

const Commercial = () => {
  return (
    <div className="mx-44 my-4">
      <h3 className="text-7xl my-10">
        Hola que <br></br> haces{" "}
      </h3>
      <div className="flex flex-row border border-gray-400 rounded-lg overflow-hidden">
        <div className="flex-shrink-0 w-1/2 h- ">
          <img src={img1} alt="" className="h-120 w-full hover:opacity-80" />
        </div>
        <div className="flex-col flex-shrink-0 w-1/2 flex justify-center items-center">
          <p>Hola uqe hace</p>
          <div className="flex flex-col">
            <Btn
              bg={"w-32 h-16 bg-white rounded hover:bg-mycolor"}
              nameButton={"Lista Card"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
