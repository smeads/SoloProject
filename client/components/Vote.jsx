import React, { Component } from 'react';

class Vote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = this.props.index;
    return (
      <div className="vote" id={id}>
        <div className="arrow-up" id={id} onClick={this.props.upVote}></div>
        <p className="vote-count" id={id}>{this.props.vote}</p>
        <div className="arrow-down" id={id} onClick={this.props.downVote}></div>
      </div>
    );
  }
}

export default Vote;
