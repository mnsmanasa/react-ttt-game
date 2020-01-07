import React, { Component } from "react";
import { render } from "react-dom";
import Board from "./Board";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <h3>Tic Tac Toe</h3>
        <div className="play-again"><i>Play again</i></div>
        <Board />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
