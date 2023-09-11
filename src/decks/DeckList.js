import React, { useState, useEffect } from "react";
import Deck from "./Deck";
import { listDecks } from "../utils/api";

function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    function loadDecks() {
      listDecks().then((loadDeckList) => setDecks(loadDeckList));
    }
    loadDecks();
  }, []);

  return (
    <>
    <div>
      <button type="button" className="btn btn-secondary">
        Create Deck
      </button>
      </div>
      <br />
      <div>
        <ul>
        {decks.map((deck) => (
            <li style={{listStyle:"none"}}>
              <Deck deck={deck} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DeckList;
