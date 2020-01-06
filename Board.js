import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(){
    super();
    this.state = {
      value: '1'
    }
  }

  render(){
    return (
      <React.Fragment>
      <Square id="1"/>
      <Square id="2"/>
      <Square id="3"/>
      <br/>
      <Square id="4"/>
      <Square id="5"/>
      <Square id="6"/>
      <br/>
      <Square id="7"/>
      <Square id="8"/>
      <Square id="9"/>
      </React.Fragment>
    )
  }
}

export default Board