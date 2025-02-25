import CardText from "../atoms/CardText";
import CardTextCarrousel from "./CardTextCarrousel";
const ListCardText = () => {
  const cards = [
    { id: 1, content: "List Card 1 Content" },
    { id: 2, content: "List Card 2 Content" },
  ];

  return (
    <div className="grid bg-[#E5DCBC] gap-x-4 gap-y-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full py-24 my-24 px-4 md:px-20 lg:px-44">
      {cards.map((card) => (
        <div key={card.id} className="w-full h-60 md:h-80 lg:h-120">
          <CardText text={card.content} color={"bg-white"} />
        </div>
      ))}
      <CardTextCarrousel />
    </div>
  );
};
export default ListCardText;
// import React from "react";
// import CardText from "../atoms/CardText";
// import CardTextCarrousel from "./CardTextCarrousel";

// const cards = [
//   { id: 1, text: "El mejor en el Mundo", color: "bg-white" },
//   { id: 2, text: "Card Contenido 2", color: "bg-mycolor text-beige p-2" },
// ];

// const ListCardText = () => {
//   return (
//     <div className="bg-beige py-24 my-24 ">
//       <div className="grid grid-cols-1 xm sm:grid-cols-2 lg:grid-cols-3 gap-11 mx-44">
//         {cards.map((t1) => (
//           <CardText text={t1.text} color={t1.color} />
//         ))}
//         <CardTextCarrousel />
//       </div>
//     </div>
//   );
// };

// export default ListCardText;
