import React, { Component } from "react";
import { Link } from "@reach/router";

// This is the menu. It links to different parts of the app, but does not itself have a Route.
class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/warcraft">Warcraft</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
