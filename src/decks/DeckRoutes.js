import React from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import DeckView from "./DeckView";
import Study from "../study/Study";
import EditDeck from "./EditDeck";
import CreateCard from "../study/CreateCard";
import EditCard from "../study/EditCard";
import { deleteCard } from "../utils/api";

function DeckRoutes({deleteHandler}) {
  const history = useHistory();
  const { path } = useRouteMatch();
  function deleteCardHandler(cardId){
    if (window.confirm("Delete this card? \n You will not be able to recover it.")){
      deleteCard(cardId).then(history.go(0))
    } else {
      history.push(".")
    }
  }
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <DeckView deleteHandler={deleteHandler} deleteCardHandler={deleteCardHandler}/>
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck />
        </Route>
        <Route path={`${path}/study`}>
          <Study />
        </Route>
        <Route path={`${path}/cards/new`}>
            <CreateCard />
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
            <EditCard />
        </Route>
      </Switch>
    </>
  );
}

export default DeckRoutes;
