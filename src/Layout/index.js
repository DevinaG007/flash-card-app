import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Switch, Route, Link} from "react-router-dom";
import DeckList from "../decks/DeckList";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
        {/* <Route>
        <DeckList path="/"/>
        </Route> */}
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
