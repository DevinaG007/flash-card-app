import React, { useState, useEffect } from "react";
import Deck from "./Deck";
import { listDecks } from "../utils/api";
import { Link} from "react-router-dom";

function DeckList({ deleteHandler }) {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    function loadDecks() {
      listDecks().then((loadDeckList) => setDecks(loadDeckList));
    }
    loadDecks();
  }, []);

  return (
    <>
      <Link to={`/decks/new`}>
        <button type="button" className="btn btn-secondary my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>{" "}
          Create Deck
        </button>
      </Link>
      <br />
      <div>
        <ul>
          {decks.map((deck, index) => (
            <li key={index} style={{ listStyle: "none" }}>
              <Deck deck={deck} deleteHandler={deleteHandler} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DeckList;
