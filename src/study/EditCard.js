import React, {useState, useEffect} from "react";
import CardForm from "./CardForm";
import { readDeck } from "../utils/api";
import { readCard } from "../utils/api";
import { updateCard } from "../utils/api";

function EditCard({deckId, cardId}){
    deckId = 1;
    cardId = 1;
    // const initialFormState = {
    //     front:`${updatedCard.front}`,
    //     back:`${updatedCard.back}`,
    //     id:`${updatedCard.id}`
    // }
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
        updateCard(newCard);
        setNewCard({})
    }
if (deckData.id) return (
    <>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">{deckData.name}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{`Edit Card ${cardId}`}</li>
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