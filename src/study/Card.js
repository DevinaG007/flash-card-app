import React from "react";
import { Link } from "react-router-dom";

function Card({ card, deckId, deleteCardHandler}) {
  const cardId = card.id
//TODO - add condition to decklist where if there are no cards, display a message to user to add a card
  return (
    <div className="card w-50">
      <div className="card-body">
        <div className="my-2">
        <p className="card-text">{card.front}</p>
        <p className="card-text">{card.back}</p>
        </div>
        <Link to={`/decks/${deckId}/cards/${cardId}/edit`}className="btn btn-secondary mx-1">
          Edit
        </Link>
        <button className="btn btn-danger mx-1" onClick={() => deleteCardHandler(cardId)}>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
