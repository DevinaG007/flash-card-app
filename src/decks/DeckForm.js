import React, { useState } from "react";

function DeckForm() {
  const initialFormState = {
    name: "",
    description: "",
    cards: {},
  };
  const [newDeck, SetNewDeck] = useState({ initialFormState });

  const changeHandler = ({ target }) => {
    SetNewDeck({ ...newDeck, [target.name]: target.value });
  };
  const submitHandler = ({ event }) => {
    // TODO Write a function in parent component that creates newDeck
    //TODO Write a function in parent component that edits deck
    event.preventDefault();
    SetNewDeck(initialFormState);
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              name="name"
              value={newDeck.name}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              value={newDeck.description}
              placeholder="Brief description of the deck"
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <button type="button" className="btn btn-secondary"> {/*TODO implement button handlers to go home or create deck*/}
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default DeckForm;
