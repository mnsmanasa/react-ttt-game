import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      squareValue: "",
      isNextPlayer: true,
      winner: "",
      winnerPossibilities: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
    };
  }

  handleSquare = i => {
    if (!this.state.winner) {
      const squares = this.state.squares;
      squares[i] = this.state.isNextPlayer ? "X" : "O";
      this.setState({
        isNextPlayer: !this.state.isNextPlayer,
        squares: squares
      });
      event.target.classList.add("no-pointers");
      this.checkWinner();
    }
  };

  checkWinner() {
    this.state.winnerPossibilities.forEach(p => {
      const [a, b, c] = p;
      if(this.state.squares.filter(s => {
        return s === null;
      }).length === 0 && this.state.winner === null){
        this.setState({ winner: 'No winner. Please play again...' });
      }
      if (
        this.state.squares[a] === this.state.squares[b] &&
        this.state.squares[a] === this.state.squares[c]
      ) {
        this.setState({ winner: this.state.squares[a] });
      }
    });    
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <i>Next Player: </i>
          {this.state.isNextPlayer ? "X" : "O"}
        </div>
        <br />
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
        <br />
        <br />
        <br />
        <br />
        {this.state.winner && (
          <div>
            <i>Winner</i>: <b>{this.state.winner}</b>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Board;
