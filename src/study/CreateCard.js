import React, { useState } from "react";
import {  createCard } from "../utils/api";
import CardForm from "./CardForm";
import { NavLink, useHistory } from "react-router-dom";


//component to add a card to a deck
function CreateCard({deckId, deckData}) { 
    const initialFormState = {
        front: "",
        back: "",
      };
      const history = useHistory();
  const [newCard, setNewCard] = useState(initialFormState);

  const submitHandler =  async ( event ) => {
    event.preventDefault();
    createCard(deckId, newCard).then(
      history.push(`/decks/${deckId}`)
    ).then(
      history.go(0)
    )
  };
  
  if (deckData.id) 
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to={`/decks/${deckId}`}>{deckData.name}</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
        <h3>{`${deckData.name}: Add Card`}</h3>
        <CardForm submitHandler={submitHandler} newCard={newCard} setNewCard={setNewCard} deckId={deckId}/>
      </>
    );
  else {
    return "Loading...";
  }
}

export default CreateCard;
