import React, {useEffect, useState} from "react";
import { Route, Switch, useHistory, useRouteMatch, useParams } from "react-router-dom";
import DeckView from "./DeckView";
import Study from "../study/Study";
import EditDeck from "./EditDeck";
import CreateCard from "../study/CreateCard";
import EditCard from "../study/EditCard";
import { deleteCard, readDeck } from "../utils/api";

//main parent component
function Decks({ deleteHandler }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const {deckId} = useParams(); //deckId is passed as a prop to necessary child components
  const [deckData, setDeckData] = useState({}); //state that holds the data from the loaded card, passed to children components

  useEffect(() => {
    function loadDeck() {
      readDeck(deckId).then((loadedDeck) => setDeckData(loadedDeck));
    }
    loadDeck();
  }, [deckId]);
  function deleteCardHandler(cardId) {
    if (
      window.confirm("Delete this card? \n You will not be able to recover it.")
    ) {
      deleteCard(cardId).then(history.push(`/decks/${deckId}`));
    } else {
      history.push(".");
    }
  }
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <DeckView
            deleteHandler={deleteHandler}
            deleteCardHandler={deleteCardHandler}
            deckId={deckId}
            deckData={deckData}
          />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck deckId={deckId} />
        </Route>
        <Route path={`${path}/study`}>
          <Study deckId={deckId} deckData={deckData}/>
        </Route>
        <Route path={`${path}/cards/new`}>
          <CreateCard deckId={deckId} deckData={deckData}/>
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
          <EditCard deckId={deckId} deckData={deckData}/>
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
