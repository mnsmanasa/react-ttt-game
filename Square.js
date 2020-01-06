import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      squareValue: "",
      xIsNext: true
    };
  }

  handleSquare = id => {
    const squares = this.state.squares.slice();
    squares[id] = this.state.xIsNext ? "X" : "O";
    this.setState({
      xIsNext: !this.state.xIsNext,
      squares: squares,
      squareValue: this.state.xIsNext ? "X" : "O"
    });
  };

  render() {
    return (
      <div className="square" onClick={() => this.handleSquare(this.props.id)}>
        {this.state.squareValue}
      </div>
    );
  }
}

export default Square;
