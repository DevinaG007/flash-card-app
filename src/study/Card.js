import React, { useEffect, useState } from "react";
import { readCard } from "../utils/api";
import { Link, useParams } from "react-router-dom";

function Card({ card, deckId, deleteCardHandler}) {
  const cardId = card.id
//TODO - add condition to decklist where if there are no cards, display a message to user to add a card
  return (
    <div className="card w-50">
      <div className="card-body">
        <p className="card-text">{card.front}</p>
        <p className="card-text">{card.back}</p>
        <Link to={`/decks/${deckId}/cards/${cardId}/edit`}className="btn btn-secondary mx-1">
          Edit
        </Link>
        <button className="btn btn-danger mx-1" onClick={() => deleteCardHandler(cardId)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
