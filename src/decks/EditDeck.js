import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import { updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function EditDeck({ deckId }) {
  const [newDeck, setNewDeck] = useState({});
    deckId = 1;
  useEffect(() => {
    function loadDeck() {
      readDeck(deckId).then((loadedDeck) => setNewDeck(loadedDeck));
    }
    loadDeck();
  }, [deckId]);

  const submitHandler = ({ event }) => {
    // TODO Write a function in parent component that creates newDeck
    //TODO Write a function in parent component that edits deck
    event.preventDefault();
    updateDeck(newDeck).then(
    setNewDeck({}))
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">{newDeck.name}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <div>
        <DeckForm submitHandler={submitHandler} newDeck={newDeck} setNewDeck={setNewDeck}/>
      </div>
    </>
  );
}

export default EditDeck;
