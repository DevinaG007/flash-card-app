import React, {useState} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Switch, Route, useHistory} from "react-router-dom";
import DeckList from "../decks/DeckList";
import CreateDeck from "../decks/CreateDeck";
import Decks from "../decks/Decks";
import { deleteDeck } from "../utils/api";

function Layout() {
  const initialFormState = {
    name: "",
    description: "",
    cards: [],
  };
  const history = useHistory();
  const [newDeck, setNewDeck] = useState(initialFormState);
  //function to delete cards when delete button is clicked
  const deleteHandler = (deckId) => {
   if (
     window.confirm("Delete this deck?\n You will not be able to recover it.")
   ) {
     deleteDeck(deckId).then(history.push("/")).then(history.go(0))
   } else {
     history.go(0)
   }
 };

 //parent component routes to children components
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
        <Route exact path="/">
          <DeckList deleteHandler={deleteHandler}/>
        </Route>
        <Route exact path={`/decks/new`}>
          <CreateDeck newDeck={newDeck} setNewDeck={setNewDeck}/>
        </Route>
        <Route path={`/decks/:deckId`}>
        <Decks deleteHandler={deleteHandler} newDeck={newDeck} setNewDeck={{setNewDeck}}/>
        </Route>
        <Route>
          <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
