import React from 'react';

class Board extends React.Component {
  constructor(){
    super();
    this.state = {
      value: '1'
    }
  }

  render(){
    return (
      <div className='square'>{this.state.value}</div>
    )
  }
}

export default Board