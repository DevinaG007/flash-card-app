import React from "react";

import { NavLink, Link} from "react-router-dom";
import StudyCards from "./StudyCards";

//Component to display the study page for a deck
function Study({deckId, deckData}) {
  
  const deckCards = deckData.cards;
    if (deckData.id) {
      
    return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deckData.name}</Link>
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
      ) : <StudyCards deckCards={deckCards}/>
      }
       
    </>
  )} else { return "...Loading"}
}

export default Study;
