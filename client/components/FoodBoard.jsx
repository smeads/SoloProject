import React, { Component } from 'react';
import ItemContainer from './ItemContainer.jsx';

class FoodBoard extends Component {
  render() {
    return (
      <div id="board">
        <ItemContainer />
      </div>
    )
  }
}

export default FoodBoard;
