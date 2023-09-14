import React, { useState, useEffect } from "react";
import DeckForm from "./DeckForm";
import { createDeck } from "../utils/api";

function CreateDeck() {
  const initialFormState = {
    name: "",
    description: "",
    cards: {},
  };
  const [newDeck, setNewDeck] = useState({ initialFormState });
  
  const submitHandler = ({ event }) => {
    // TODO Write a function in parent component that creates newDeck
    //TODO Write a function in parent component that edits deck
    event.preventDefault();
    createDeck(newDeck).then(
    setNewDeck(initialFormState))
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1 className="my-3">Create Deck</h1>
      <div>
        <DeckForm submitHandler={submitHandler} newDeck={newDeck} setNewDeck={setNewDeck}/>
      </div>
    </>
  );
}

export default CreateDeck;
