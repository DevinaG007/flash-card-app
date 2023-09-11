import React from "react";

function Deck({deck}){

return (
    <li>
    <div class="card w-75 mb-3">
    <div class="card-body">
     <div className="row">
      <h5 class="card-title col">{deck.name}</h5>
      <p className="card-text text-right col">{`${deck.cards.length} cards`}</p>
      </div>
      <p class="card-text">
       {deck.description}
      </p>
      <button type="button" href="#" class="btn btn-primary">View</button>
      <button type="button" className="btn btn-secondary">Study</button>
      <button type="button" className="btn btn-danger">Delete</button>
    </div>
  </div>
  </li>
)
}

export default Deck;