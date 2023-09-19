import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//component for functionality of Study page
function StudyCards({ deckCards }) {
  const history = useHistory();
  const [currentCard, setCurrentCard] = useState(0);
  const [cardDisplay, setCardDisplay] = useState(""); //state that holds current card display
  useEffect(() => {
    setCardDisplay(cardsToStudyFront[currentCard]);
  }, [currentCard]);

  const flipFrontHandler = (event) => {
    event.preventDefault();
    setCardDisplay(cardsToStudyBack[currentCard]); //handlers for Flip buttons
  };
  const flipBackHandler = (event) => {
    event.preventDefault();
    setCardDisplay(cardsToStudyFront[currentCard]);
  };

  const nextCardHandler = (event) => { //handler for next button
    event.preventDefault();
    if (currentCard === deckCards.length - 1) {
      if (
        window.confirm(
          "Restart cards? \n\nClick Cancel to return to the homepage."
        )
      ) {
        setCurrentCard(0);
      } else {
        history.push("/");
      }
    } else {
      setCurrentCard(currentCard + 1);
    }
  };

  const cardsToStudyFront = deckCards.map((card, index) => ( //maps the display for the front of cards
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{`Card ${index + 1} of ${
          deckCards.length
        }`}</h5>
        <p className="card-text">
          {card.front}
        </p>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={flipFrontHandler}
        >
          Flip
        </button>
      </div>
    </div>
  ));
  const cardsToStudyBack = deckCards.map((card, index) => ( //maps the display for back of cards. Adds next button
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{`Card ${index + 1} of ${
          deckCards.length
        }`}</h5>
        <p className="card-text">
          {card.back}
        </p>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={flipBackHandler}
        >
          Flip
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={nextCardHandler}
        >
          Next
        </button>
      </div>
    </div>
  ));
  return cardDisplay;
}

export default StudyCards;
