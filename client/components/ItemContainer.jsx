import React, { Component } from 'react';
import Item from './Item.jsx';

class ItemContainer extends Component {
  render() {
    return (
      <div id="item-container">
        <Item />
      </div>
    );
  }
}

export default ItemContainer;
