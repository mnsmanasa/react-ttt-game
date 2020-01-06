import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="square" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
