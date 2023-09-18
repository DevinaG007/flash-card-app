import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

function StudyCards({deckCards}){
    const history = useHistory();
    const [currentCard, setCurrentCard] = useState(0)
    const [cardDisplay, setCardDisplay] = useState()
    useEffect(() => {

    }, [])
    const flipHandler = (event) => {
        
    }
    const nextCardHandler = (event) => {
        event.preventDefault()
        if (currentCard === deckCards.length - 1) {
          if (window.confirm("Restart cards? \n\nClick Cancel to return to the homepage.")){
            setCurrentCard(0)
          }
          else {history.push("/")}
        } else {
          setCurrentCard(currentCard + 1)
        }
      }
  const cardsToStudy = deckCards.map((card, index) => (
        <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{`Card ${index + 1} of ${deckCards.length}`}</h5>
          <p className="card-text">
              {card.front}
           {/*TODO Implement code that displays cards from deck, and add functionality to buttons*/}
          </p>
          <button type="button" className="btn btn-secondary mx-1" onClick={flipHandler}>
            Flip
          </button>
          <button type="button" className="btn btn-primary mx-1" onClick={nextCardHandler}>
            Next
          </button>
        </div>
      </div>
  ))
  //implement use state???
    return (  
       cardsToStudy[currentCard]
  )

}

export default StudyCards;