import React from "react";

function CardForm({ submitHandler, newCard, setNewCard }) {
  //   const initialFormState = {
  //     front: "",
  //     back: "",
  //   };

  //   const [newCard, setNewCard] = useState(initialFormState);

  const changeHandler = ({ target }) => {
    setNewCard({
      ...newCard,
      [target.name]: target.value,
    });
  };
  //   const submitHandler = (event) => {
  //     event.preventDefault();
  //     setNewCard(initialFormState);
  //   };

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
          <buton type="button" className="btn btn-secondary mx-1">
            Done
          </buton>
        </div>
      </form>
    </>
  );
}

export default CardForm;
