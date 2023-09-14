import React, {useEffect, useState} from "react";
import { readDeck } from "../utils/api";


function Study({ deckId }) {
    const [deckData, setDeckData] = useState({});
  deckId = 1

  useEffect(() => {
    function loadDeck() {
      readDeck(deckId).then((loadedDeck) => setDeckData(loadedDeck));
    }
    loadDeck();
  }, [deckId]);

  const deckCards = deckData.cards;
    //add a state where the default display for a card is the front, but the back is shown when flipped is pressed
    //add a function handler to move to next card in the array when next is clicked (try useHistory goForward/go back?)
 
    const studyCards = deckCards.map((card, index) => (
        <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{`Card ${index + 1} of ${deckCards.length}`}</h5>
          <p className="card-text">
              {card.front}
           {/*TODO Implement code that displays cards from deck, and add functionality to buttons*/}
          </p>
          <button type="button" className="btn btn-secondary mx-1">
            Flip
          </button>
          <button type="button" className="btn btn-primary mx-1">
            Next
          </button>
        </div>
      </div>
));
    if (deckData.id) return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">{deckData.name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <br />
      <h1>{`${deckData.name}: Study`}</h1>
       {studyCards[0]}
    </>
  ); else { return "...Loading"}
}

export default Study;
