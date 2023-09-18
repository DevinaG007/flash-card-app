import React, {useEffect, useState} from "react";
import { readDeck } from "../utils/api";
import { useParams, NavLink, Link, useRouteMatch} from "react-router-dom";
import StudyCards from "./StudyCards";


function Study() {
    const [deckData, setDeckData] = useState({});
    const { deckId } = useParams();
    const {url} = useRouteMatch();
   

  useEffect(() => {
    function loadDeck() {
      readDeck(deckId).then((loadedDeck) => setDeckData(loadedDeck));
    }
    loadDeck();
  }, [deckId]);

  const deckCards = deckData.cards;
 
    //add a state where the default display for a card is the front, but the back is shown when flipped is pressed
    //add a function handler to move to next card in the array when next is clicked (try useHistory goForward/go back?)
  
   
    if (deckData.id) {
      
    return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to=".">{deckData.name}</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <br />
      <h1>{`${deckData.name}: Study`}</h1>
      { deckCards.length <= 2 ? (
        <>
        <h3>Not enough cards.</h3>
        <p>You need at least 3 cards to study. There are {deckCards.length} cards in this deck.</p>
        <Link to="./cards/new">
        <button className="btn btn-primary">Add Cards +</button></Link>
        </>
      ) : (<StudyCards deckCards={deckCards}/>)
      }
       
    </>
  )} else { return "...Loading"}
}

export default Study;
