import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squareValue: props.id,
      gameStarter: 'X'
    };
  }

  handleSquare = () => {
    this.setState({gameStarter: this.state.gameStarter === 'X'? 'X': 'O'})
    this.setState({squareValue: this.state.gameStarter})
  };

  render() {
    return (
      <div className="square" data-squareId={this.props.id} onClick={this.handleSquare}>
        {this.state.squareValue}
      </div>
    );
  }
}

export default Square;
