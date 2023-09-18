import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Switch, Route, useHistory} from "react-router-dom";
import DeckList from "../decks/DeckList";
import CreateDeck from "../decks/CreateDeck";
import DeckRoutes from "../decks/DeckRoutes";
import { deleteDeck } from "../utils/api";

function Layout() {
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
      <Header />
      <div className="container">
        <Switch>
        <Route exact path="/">
          <DeckList deleteHandler={deleteHandler}/>
        </Route>
        <Route exact path={`/decks/new`}>
          <CreateDeck/>
        </Route>
        <Route path={`/decks`}>
        <DeckRoutes deleteHandler={deleteHandler}/>
        </Route>
        {/* TODO: Implement the screen starting here */}
        <Route>
          <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
