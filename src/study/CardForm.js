import React from "react";
import {Link} from "react-router-dom";
//form used by CreateCard and EditCard components
function CardForm(props) {
  const { submitHandler, newCard, setNewCard, deckId } = props; //newCard is the state that holds the value for inputs
  const changeHandler = ({ target }) => {
    setNewCard({
      ...newCard,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="front" className="mx-1 form-label">
            Front
            <textarea
            style={{width:"200%"}}
              className="form-control"
              id="front"
              name="front"
              value={newCard.front}
              placeholder="Front side of card"
              onChange={changeHandler}
              rows={2}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="back" className="form-label">
            Back
            <textarea
              className="form-control"
              style={{width:"200%"}}
              id="back"
              name="back"
              value={newCard.back}
              placeholder="Back side of card"
              onChange={changeHandler}
              rows={2}
            />
          </label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mx-1">
            Save
          </button>
          <Link to={`/decks/${deckId}`}>
          <button type="button" className="btn btn-secondary mx-1">
            Done
          </button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default CardForm;
