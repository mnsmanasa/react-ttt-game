import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "1",
      squares: Array(9).fill(null)
    };
  }

  render() {
    return (
      <React.Fragment>
        <Square id={this.state.squares[0]} />
        <Square id={this.state.squares[1]} />
        <Square id={this.state.squares[2]} />
        <div className="clearfix" />
        <Square id={this.state.squares[3]} />
        <Square id={this.state.squares[4]} />
        <Square id={this.state.squares[5]} />
        <div className="clearfix" />
        <Square id={this.state.squares[6]} />
        <Square id={this.state.squares[7]} />
        <Square id={this.state.squares[8]} />
      </React.Fragment>
    );
  }
}

export default Board;
