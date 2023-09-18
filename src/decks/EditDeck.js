import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import { updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";
import { useParams, NavLink, useHistory,  } from "react-router-dom";

function EditDeck() {
  const history = useHistory();
  const [newDeck, setNewDeck] = useState({});
  const [currentDeck, setCurrentDeck] = useState({});
  const { deckId } = useParams();

  useEffect(() => {
    function loadDeck() {
      readDeck(deckId)
        .then((loadedDeck) => {
          setNewDeck(loadedDeck)
          setCurrentDeck(loadedDeck)
        })
        
    }
    loadDeck();
  }, [deckId]);

  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck(newDeck).then(
      history.push(`/decks/${deckId}`)
    ).then(history.go(0))
  }

  if (newDeck.name) {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to={`/decks/${deckId}`}>{currentDeck.name}</NavLink>
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
