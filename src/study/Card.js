import React, {useEffect, useState} from "react";
import { readCard } from "../utils/api";


function Card({cardId}) {

  const [cardData, setCardData] = useState({});

  useEffect(() => {
    function loadCards() {
      readCard(cardId).then(loadedCard => {
        setCardData(loadedCard)
        console.log(loadedCard)
  })
      
    }
    loadCards();
  }, [cardId]);

  return (
    <div className="card w-50 mb-3">
      <div className="card-body">
        <p className="card-text">
        {cardData.front}
        </p>
        <p className="card-text">
            {cardData.back}
            </p>
        <a href="#" className="btn btn-primary">
          Button
        </a>
        <a href="#" className="btn btn-danger">Delete</a>
      </div>
    </div>
  );
}

export default Card;
