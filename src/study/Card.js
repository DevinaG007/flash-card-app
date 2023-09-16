import React, { useEffect, useState } from "react";
import { readCard } from "../utils/api";
import { Link, useParams } from "react-router-dom";

function Card({ cardId, deckId, deleteCardHandler}) {
  const [cardData, setCardData] = useState({});
  
  useEffect(() => {
    function loadCards() {
      readCard(cardId).then((loadedCard) => {
        setCardData(loadedCard);
      });
    }
    loadCards();
  }, [cardId]);
//TODO - add condition to decklist where if there are no cards, display a message to user to add a card
  return (
    <div className="card w-50">
      <div className="card-body">
        <p className="card-text">{cardData.front}</p>
        <p className="card-text">{cardData.back}</p>
        <Link to={`/decks/${deckId}/cards/${cardId}/edit`}className="btn btn-secondary mx-1">
          Edit
        </Link>
        <a href="#" className="btn btn-danger mx-1" onClick={() => deleteCardHandler(cardId)}>
          Delete
        </a>
      </div>
    </div>
  );
}

export default Card;
