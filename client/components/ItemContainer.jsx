import React, { Component } from 'react';
import UserImage from './UserImage.jsx';
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
        <UserImage />
        <Item item={this.props.name} date={this.props.date} />
        <Vote itemId={this.props.itemId} vote={this.props.votes} upVote={upVote} downVote={downVote} />
      </div>
    );
  }
}

export default ItemContainer;
