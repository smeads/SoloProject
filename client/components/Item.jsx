import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <p className="item">{this.props.item}</p>
      </div>
    );
  }
}

export default Item;
