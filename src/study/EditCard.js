import React, {useEffect, useState} from "react";
import CardForm from "./CardForm";
import { readCard, updateCard } from "../utils/api";
import {useParams, NavLink, useHistory} from "react-router-dom";


//component edits existing card in a deck
function EditCard({deckId, deckData}){
    const {cardId} = useParams();
    const history = useHistory();
    const [newCard, setNewCard] = useState({});
    useEffect(() => {
        function loadCard() {
            readCard(cardId).then((loadedCard) => setNewCard(loadedCard));
        }
        loadCard();
    }, [cardId]);

    

    const submitHandler = (event) => {
        event.preventDefault();
        updateCard(newCard).then(history.push(`/decks/${deckId}`)).then(history.go(0))
    }
if (deckData.id) return (
    <>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
    <li className="breadcrumb-item"><NavLink to={`/decks/${deckId}`}>{deckData.name}</NavLink></li>
    <li className="breadcrumb-item active" aria-current="page">{`Edit Card ${cardId}`}</li>
  </ol>
</nav>
<div>
    <CardForm submitHandler={submitHandler} newCard={newCard} setNewCard={setNewCard} deckId={deckId}/>
</div>
</>
); else {
    return "Loading..."
}

}

export default EditCard;