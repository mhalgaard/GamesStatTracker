import React, { Component } from "react";
import {Link} from "@reach/router";

class Warcraft extends Component {
    render() {
      return (
        <>
          <h1>This is the WoW subpage</h1>
          <Link to="/">Go back</Link>
        </>
      );
    }
  }


export default Warcraft;