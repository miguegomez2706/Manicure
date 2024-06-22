import React from "react";
import CardText from "../atoms/CardText";
import CardTextCarrousel from "./CardTextCarrousel";

const cards = [
  { id: 1, text: "El mejor en el Mundo", color: "bg-red-500" },
  { id: 2, text: "Card Contenido 2", color: "bg-green-500" },
];

const ListCardText = () => {
  return (
    <div className="flex flex-col bg-yellow-200 py-24 my-24 ">
      <div className="flex justify-evenly mx-44">
        {cards.map((t1) => (
          <CardText text={t1.text} color={t1.color} />
        ))}
        <CardTextCarrousel />
      </div>
    </div>
  );
};

export default ListCardText;
