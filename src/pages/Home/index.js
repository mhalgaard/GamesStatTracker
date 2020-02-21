import React, { Component } from "react";
import { bgMove } from "../../scripts.js";

class Home extends Component {
  render() {
    return (
      <>
        <section id="background"></section>
        <div id="test">
          <ul>
            <li>test 1</li>
            <li>test 2</li>
            <li>test 3</li>
            <li>test 4</li>
            <li>test 5</li>
          </ul>
        </div>
        <section id="logo_section">
          <img id="logo" src="./images/test.png" alt="#" />
        </section>
      </>
    );
  }

  componentDidMount() {
    bgMove();
  }
}

export default Home;
