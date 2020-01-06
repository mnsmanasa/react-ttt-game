import React from "react";
import Square from "./Square";

function Square(props) {
  return (
    <div className="square" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      squareValue: "",
      isNextPlayer: true
    };
  }

  handleSquare = i => {
    const squares = this.state.squares;
    squares[i] = this.state.isNextPlayer ? "X" : "O";
    this.setState({
      isNextPlayer: !this.state.isNextPlayer,
      squares: squares
    });
    this.checkWinner()
  };

  checkWinner() {
    console.log('winner')
  }

  render() {
    return (
      <React.Fragment>
        <Square
          id="0"
          value={this.state.squares[0]}
          onClick={() => this.handleSquare(0)}
        />
        <Square
          id="1"
          value={this.state.squares[1]}
          onClick={() => this.handleSquare(1)}
        />
        <Square
          id="2"
          value={this.state.squares[2]}
          onClick={() => this.handleSquare(2)}
        />
        <div className="clearfix" />
        <Square
          id="3"
          value={this.state.squares[3]}
          onClick={() => this.handleSquare(3)}
        />
        <Square
          id="4"
          value={this.state.squares[4]}
          onClick={() => this.handleSquare(4)}
        />
        <Square
          id="5"
          value={this.state.squares[5]}
          onClick={() => this.handleSquare(5)}
        />
        <div className="clearfix" />
        <Square
          id="6"
          value={this.state.squares[6]}
          onClick={() => this.handleSquare(6)}
        />
        <Square
          id="7"
          value={this.state.squares[7]}
          onClick={() => this.handleSquare(7)}
        />
        <Square
          id="8"
          value={this.state.squares[8]}
          onClick={() => this.handleSquare(8)}
        />
      </React.Fragment>
    );
  }
}

export default Board;
