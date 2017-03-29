import React, { Component } from 'react';
import Item from './Item.jsx';
import Vote from './Vote.jsx';

class ItemContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const upVote = this.props.upVote;
    const downVote = this.props.downVote;
    return (
      <div id="item-container">
        <Item item={this.props.item} />
        <Vote index={this.props.index} vote={this.props.votes} upVote={upVote} downVote={downVote} />
      </div>
    );
  }
}

export default ItemContainer;
