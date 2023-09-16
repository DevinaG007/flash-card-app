import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function DeckForm({newDeck, setNewDeck, submitHandler}) {
  const history = useHistory();
  const clickHandler = (event) => {
    event.preventDefault();
    history.go("0")
  }

  const changeHandler = ({ target }) => {
    setNewDeck({ ...newDeck, [target.name]: target.value });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="name" className="form-label mb-3">
            Name
            <input
            style={{width:"210%"}}
              className="form-control"
              id="name"
              type="text"
              name="name"
              value={newDeck.name}
              onChange={changeHandler}
              placeholder="Deck Name"
            />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="form-label mb-3">
            Description
            <textarea
              style={{width:"200%"}}
              className="form-control"
              id="description"
              name="description"
              value={newDeck.description}
              placeholder="Brief description of the deck"
              onChange={changeHandler}
            />
          </label>
        </div>
        <div>
          <button type="button" className="btn btn-secondary mx-1" onClick={clickHandler}> {/*TODO implement button handlers to go home or create deck*/}
            Cancel
          </button>
          <button type="submit" className="btn btn-primary mx-1">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default DeckForm;
