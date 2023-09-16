import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import { updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";
import { useParams, NavLink , useRouteMatch} from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditDeck() {

  const history = useHistory();
  const [newDeck, setNewDeck] = useState({});
  const { deckId } = useParams();
  
  useEffect(() => {
    function loadDeck() {
      readDeck(deckId).then((loadedDeck) => setNewDeck(loadedDeck));
    }
    loadDeck();
  }, [deckId]);

  const submitHandler = ( event ) => {
    event.preventDefault();
    updateDeck(newDeck).then(
      history.push(`/decks/${deckId}`)
    )
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li class="breadcrumb-item">
            <NavLink to=".">{newDeck.name}</NavLink>
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
