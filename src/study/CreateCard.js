import React, { useEffect, useState } from "react";
import { readDeck, createCard } from "../utils/api";
import CardForm from "./CardForm";
import { NavLink, useParams, useHistory } from "react-router-dom";

function CreateCard() {
    const {deckId} = useParams();
    const initialFormState = {
        front: "",
        back: "",
      };
      const history = useHistory();
  const [newCard, setNewCard] = useState(initialFormState);
  const [deckData, setDeckData] = useState({});

  useEffect(() => {
    function loadDeck() {
      readDeck(deckId).then((loadedDeck) => setDeckData(loadedDeck));
    }
    loadDeck();
  }, [deckId]);

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
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li class="breadcrumb-item">
              <NavLink to={`/decks/${deckId}`}>{deckData.name}</NavLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
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
