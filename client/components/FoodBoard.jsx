import React, { Component } from 'react';
import ItemContainer from './ItemContainer.jsx';

class FoodBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemsArr = this.props.itemsArr;
    const upVote = this.props.upVote;
    const downVote = this.props.downVote;
    const newItem = itemsArr.map((item, index) => {
      return <ItemContainer key={index} itemId={item.id} name={item.name} votes={item.votes} date={item.createdAt} upVote={upVote} downVote={downVote} />
    });
    return (
      <div id="board">
        {newItem}
      </div>
    );
  }
}

export default FoodBoard;
