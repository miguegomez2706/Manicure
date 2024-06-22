import React from "react";
import Card from "../atoms/Card";
import img1 from "../../assets/image/semipermanente/semi1.jpeg";
import img2 from "../../assets/image/semipermanente/semi2.jpeg";
import img3 from "../../assets/image/semipermanente/semi3.jpeg";
import Btn from "../atoms/Btn";

const ListCard = () => {
  return (
    <div className="flex flex-col bg-mycolor h-full mx-44 ">
      <div className="flex justify-around p-14 container mx-auto my-4">
        <Card imgSrc={img1}>
          <h3>algo</h3>
          <p>algo1</p>
        </Card>
        <Card imgSrc={img2}>
          <h3>algo2</h3>
          <p>algo2</p>
        </Card>
        <Card imgSrc={img3}>
          <h3>algo3</h3>
          <p>algo3</p>
        </Card>
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
