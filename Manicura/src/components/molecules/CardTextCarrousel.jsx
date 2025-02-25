import { useEffect, useState } from "react";
import CardText from "../atoms/CardText";

const CardTextCarrousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    { id: 1, content: "Card 1 Content" },
    { id: 2, content: "Card 2 Content" },
    { id: 3, content: "Card 3 Content" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div>
      <div className="flex flex-row bg">
        <CardText text={cards[currentCard].content} color={"bg-white"} />
      </div>
    </div>
  );
};

export default CardTextCarrousel;
