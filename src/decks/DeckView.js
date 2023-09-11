import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import Card from "../study/Card";

function DeckView({ deckId }) {

  const [deckData, setDeckData] = useState({});
  
  useEffect(() => {
    function loadDeck() {
      readDeck(deckId).then((loadedDeck) => setDeckData(loadedDeck));
    }
    loadDeck();
  }, [deckId]);
  const deckCards = deckData.cards;
   if (deckData.id) return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deckData.name}
          </li>
        </ol>
      </nav>
        <div>
          <h3>{deckData.name}</h3>
          <p>{deckData.description}</p>
          <div>
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" className="btn btn-primary">Study</button>
            <button type="button" className="btn btn-primary">Add Cards +</button>
            <button type="button" className="btn btn-danger"> Delete</button>
          </div>
          <br />
          <h2>Cards</h2>
          <br />
          <div>
            <ul>
              {deckCards.map((card) => (
                <li style={{listStyle:"none"}}>
                <Card cardId={card.id}/>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </>
  ); else {return "...Loading"}
}
export default DeckView;
