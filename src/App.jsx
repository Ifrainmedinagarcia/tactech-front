import React from "react";
import Home from "./components/PAGES/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./components/PAGES/characters/Characters";
import CharactersDetail from "./components/PAGES/charactersDetail/CharactersDetail";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route path="/character/:id">
            <CharactersDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
