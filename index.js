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

  reRender = () => {
    window.location.reload()
  }

  render() {
    return (
      <div>
        <h3>Tic Tac Toe</h3>
        <div className="play-again" onClick={this.reRender}><i>Play again</i></div>
        <Board />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
