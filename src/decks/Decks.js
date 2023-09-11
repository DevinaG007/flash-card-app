import DeckList from "./DeckList";
import DeckView from "./DeckView";
import React from "react";
import { Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";

function Decks() {
  const { path } = useRouteMatch();
  const {deckId} = useParams();
  //TODO: Write function to delete and function to create deck
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <DeckList />
        </Route>
        <Route exact path={`${path}/:deckId`}>
            {/* TODO If deckId matches deckId param, view deck*/}
          <DeckView deckId={deckId}/>
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
