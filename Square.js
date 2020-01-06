import React from 'react';

class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      squareValue: props.id
    }
  }

  handleSquare(){
  }

  render(){
    return (<div className='square' onClick={this.handleSquare}>{this.state.squareValue}</div>)
  }
}

export default Square
