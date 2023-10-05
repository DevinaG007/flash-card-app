import React from "react";
import DeckForm from "./DeckForm";
import { createDeck } from "../utils/api";
import { NavLink, useHistory } from "react-router-dom";

function CreateDeck({newDeck, setNewDeck}) {
 const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();
    createDeck(newDeck).then(history.push("/")).then(history.go(0));
  };

  document.title = "Create Deck";

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1 className="my-3">{document.title}</h1>
      <div>
        <DeckForm
          submitHandler={submitHandler}
          newDeck={newDeck}
          setNewDeck={setNewDeck}
        />
      </div>
    </>
  );
}

export default CreateDeck;
