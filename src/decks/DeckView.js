import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import Card from "../study/Card";
import { useParams, Link, useRouteMatch, NavLink } from "react-router-dom";

function DeckView({ deleteHandler, deleteCardHandler }) {
  const { deckId } = useParams();
  const { url } = useRouteMatch();
  const [deckData, setDeckData] = useState({});

  useEffect(() => {
    function loadDeck() {
      readDeck(deckId).then((loadedDeck) => setDeckData(loadedDeck));
    }
    loadDeck();
  }, [deckId]);
  const deckCards = deckData.cards;
  if (deckData.id)
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
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
            <Link to={`${url}/edit`}>
              <button type="button" className="btn btn-secondary mx-1">
                Edit
              </button>
            </Link>
            <Link to={`${url}/study`}>
              <button type="button" className="btn btn-primary mx-1">
                Study
              </button>
            </Link>
            <Link to={`${url}/cards/new`}>
              <button type="button" className="btn btn-primary mx-1">
                Add Cards +
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={() => deleteHandler(deckId)}
            >
              Delete
            </button>
          </div>
          <br />
          <h2>Cards</h2>
          <br />
          <div>
            <ul>
              {deckCards.map((card) => (
                <li style={{ listStyle: "none" }}>
                  <Card
                  card={card}
                    deckId={deckId}
                    deleteCardHandler={deleteCardHandler}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    ); 
  else {
    return "...Loading";
  }
}
export default DeckView;
