import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import CardForm from "./CardForm";
import { createCard } from "../utils/api";

function CreateCard({ deckId }) {
    const initialFormState = {
        front: "",
        back: "",
      };
  const [newCard, setNewCard] = useState(initialFormState);
  const [deckData, setDeckData] = useState({});

  useEffect(() => {
    function loadDeck() {
      readDeck(deckId).then((loadedDeck) => setDeckData(loadedDeck));
    }
    loadDeck();
  }, [deckId]);

  deckId = 1;

  const submitHandler = ({ event }) => {
    // TODO Write a function in parent component that creates newCard
    //TODO Write a function in parent component that edits edit
    event.preventDefault();
    createCard(deckId, newCard); //Double check, might need to use then()
    setNewCard(initialFormState);
  };
  
  if (deckData.id)
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">{deckData.name}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
        <h3>{`${deckData.name}: Add Card`}</h3>
        <CardForm submitHandler={submitHandler} newCard={newCard} setNewCard={setNewCard}/>
      </>
    );
  else {
    return "Loading...";
  }
}

export default CreateCard;
