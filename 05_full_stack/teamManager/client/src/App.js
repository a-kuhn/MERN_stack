import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PlayerList from "./views/PlayerList";
import NavBar from "./components/NavBar";
import AddPlayer from "./views/AddPlayer";
import GameRoster from "./views/GameRoster";

import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <PlayerList path="/players/list" />
        <AddPlayer path="/players/addplayer" />
        <GameRoster path="/status/game/:gameNumber" />
      </Router>
    </div>
  );
}

export default App;
