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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-journal-bookmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
                  />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>{' '}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
          </div>
          <br />
          <h2>Cards</h2>
          <br />
          <div>
            <ul>
              {deckCards.map((card, index) => (
                <li style={{ listStyle: "none" }} key={index}>
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
