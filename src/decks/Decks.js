import CreateDeck from "./CreateDeck";
import DeckList from "./DeckList";
import React, {useState, useEffect} from "react";
import { Switch, Route, useRouteMatch, useHistory} from "react-router-dom";
import DeckRoutes from "./DeckRoutes";
import { deleteDeck } from "../utils/api";

function Decks() {
  const { path } = useRouteMatch();
  const history = useHistory();
   const deleteHandler = (deckId) => {
    if (
      window.confirm("Delete this deck?\n You will not be able to recover it.")
    ) {
      deleteDeck(deckId).then(history.go(-1));
    } else {
      history.go(0)
    }
  };
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <DeckList deleteHandler={deleteHandler}/>
        </Route>
        <Route exact path={`/decks/new`}>
          <CreateDeck/>
        </Route>
        <Route path={`/decks/:deckId`}>
        <DeckRoutes deleteHandler={deleteHandler}/>
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
