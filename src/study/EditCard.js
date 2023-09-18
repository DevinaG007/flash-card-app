import React, {useState, useEffect} from "react";
import CardForm from "./CardForm";
import { readDeck, readCard, updateCard } from "../utils/api";
import {useParams, NavLink, useHistory} from "react-router-dom";

function EditCard(){
    const {deckId, cardId} = useParams();
    const history = useHistory();
    const [deckData, setDeckData] = useState({});
    const [newCard, setNewCard] = useState({})

    useEffect(() => {
      function loadDeck() {
        readDeck(deckId).then((loadedDeck) => setDeckData(loadedDeck));
      }
      loadDeck();
    }, [deckId]);

    useEffect(() => {
        function loadCard() {
            readCard(cardId).then((loadedCard) => setNewCard(loadedCard));
        }
        loadCard();
    }, [cardId])

    

    const submitHandler = (event) => {
        event.preventDefault();
        updateCard(newCard).then(history.go(-1))
    }
if (deckData.id) return (
    <>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
    <li className="breadcrumb-item"><NavLink to="../../">{deckData.name}</NavLink></li>
    <li className="breadcrumb-item active" aria-current="page">{`Edit Card ${cardId}`}</li>
  </ol>
</nav>
<div>
    <CardForm submitHandler={submitHandler} newCard={newCard} setNewCard={setNewCard}/>
</div>
</>
); else {
    return "Loading..."
}

}

export default EditCard;