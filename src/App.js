import React, { Component } from "react";
import { Router } from "@reach/router";
import "./styles/main.scss";

// Routings
import Home from "./pages/Home/index.js";
import Warcraft from "./pages/Warcraft/index.js";
import Nav from "./components/Nav.js";

class App extends Component {

  render() {
    return (
      <>
        <header>
          <Nav />
        </header>
        <Router>
          <Home path="/" />
          <Warcraft path="warcraft" />
        </Router>
      </>
    );
  }
}

export default App;
