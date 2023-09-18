import React from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import DeckView from "./DeckView";
import Study from "../study/Study";
import EditDeck from "./EditDeck";
import CreateCard from "../study/CreateCard";
import EditCard from "../study/EditCard";
import DeckList from "./DeckList";
import { deleteCard } from "../utils/api";

function Decks({ deleteHandler }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const deckPath = `${path}/:deckId`
  function deleteCardHandler(cardId) {
    if (
      window.confirm("Delete this card? \n You will not be able to recover it.")
    ) {
      deleteCard(cardId).then(history.go(0));
    } else {
      history.push(".");
    }
  }
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <DeckList />
        </Route>
        <Route exact path={deckPath}>
          <DeckView
            deleteHandler={deleteHandler}
            deleteCardHandler={deleteCardHandler}
          />
        </Route>
        <Route path={`${deckPath}/edit`}>
          <EditDeck />
        </Route>
        <Route path={`${deckPath}/study`}>
          <Study />
        </Route>
        <Route path={`${deckPath}/cards/new`}>
          <CreateCard />
        </Route>
        <Route path={`${deckPath}/cards/:cardId/edit`}>
          <EditCard />
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
