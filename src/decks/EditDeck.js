import React, { useEffect, useState } from "react";
import { updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";
import {NavLink, useHistory,  } from "react-router-dom";

//Edits existing deck
function EditDeck({deckId, deckData}) {
  const history = useHistory();
  const [newDeck, setNewDeck] = useState({})
  
  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck(newDeck).then(
      history.push(`/decks/${deckId}`)
    ).then(history.go(0))
  }

  useEffect(() => {
    setNewDeck(deckData)
  }, [deckData])

  if (newDeck.name) {
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
              Edit Deck
            </li>
          </ol>
        </nav>
        <div>
          <DeckForm
            submitHandler={submitHandler}
            newDeck={newDeck}
            setNewDeck={setNewDeck}
          />
        </div>
      </>
    );
  } else {
    return "Loading...";
  }
}

export default EditDeck;
