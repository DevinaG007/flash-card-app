import React, {useEffect, useState} from "react";
import { Route, Switch, useHistory, useRouteMatch, useParams } from "react-router-dom";
import DeckView from "./DeckView";
import Study from "../study/Study";
import EditDeck from "./EditDeck";
import CreateCard from "../study/CreateCard";
import EditCard from "../study/EditCard";
import { deleteCard, readDeck } from "../utils/api";

//main parent component that passes state and information down to child components
function Decks({ deleteHandler }) {
  const initialCardFormState = {
    front: "",
    back: "",
  };
  const history = useHistory();
  const { path } = useRouteMatch();
  const {deckId} = useParams(); //deckId is passed as a prop to necessary child components
  const [deckData, setDeckData] = useState({}); //deckData is passed down to child components
  const [newCard, setNewCard] = useState(initialCardFormState)
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
      deleteCard(cardId).then(history.push(`/decks/${deckId}`)).then(history.go(0))
    } else {
      history.go("0");
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
          <EditDeck deckId={deckId} deckData={deckData}/>
        </Route>
        <Route path={`${path}/study`}>
          <Study deckId={deckId} deckData={deckData}/>
        </Route>
        <Route path={`${path}/cards/new`}>
          <CreateCard deckId={deckId} deckData={deckData} newCard={newCard} setNewCard={setNewCard}/>
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
          <EditCard deckId={deckId} deckData={deckData}/>
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
