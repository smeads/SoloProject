import React, { Component } from 'react';

class Vote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemId = this.props.itemId;
    const vote = this.props.vote;
    const upVote = this.props.upVote;
    const downVote = this.props.downVote;

    return (
      <div className="vote" id={itemId}>
        <div className="arrow-up" id={itemId} onClick={upVote}></div>
        <p className="vote-count" id={itemId}>{vote}</p>
        <div className="arrow-down" id={itemId} onClick={downVote}></div>
      </div>
    );
  }
}

export default Vote;
