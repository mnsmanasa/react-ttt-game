import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squareValue: ""
    };
  }

  handleSquare = () => {
    this.setState({squareValue: 'X'})
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
