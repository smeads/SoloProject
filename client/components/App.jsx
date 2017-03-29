import React, { Component } from 'react';
import FoodBoard from './FoodBoard.jsx';
import ItemForm from './ItemForm.jsx';

const voteCount = document.getElementById('0');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }
  // Event method for ItemForm submit
  handleClick(event, value) {
    event.preventDefault();
    const newArr = this.state.items.slice();
    newArr.push({ name: value, votes: 0 });
    this.setState({ items: newArr }, () => {
      document.getElementById('item-input').value = '';
    });
  }
  // Event method for up & downVoting
  upVote(e) {
    const newState = this.state.items.slice();
    const id = e.target.id;
    let numVotes = newState[id].votes;
    numVotes += 1;
    newState[id].votes = numVotes;

    newState.sort((a, b) => (a.votes < b.votes));

    this.setState({ items: newState }, () => {
      console.log(this.state.items[id]);
    })
  }
  // Event method for downVoting
  downVote(e) {
    const newState = this.state.items.slice();
    const id = e.target.id;
    let numVotes = newState[id].votes;
    numVotes -= 1;
    newState[id].votes = numVotes;

    newState.sort((a, b) => (a.votes < b.votes));

    this.setState({ items: newState }, () => {
      console.log(this.state.items[id]);
    })
  }

  render() {
    const handleClick = this.handleClick;
    const upVote = this.upVote;
    const downVote = this.downVote;
    const itemsArr = this.state.items;
    return (
      <div id="app-container" style={{ textAlign: 'center' }}>
        <h1 className="header">Food Hunt</h1>
        <FoodBoard itemsArr={itemsArr} upVote={upVote} downVote={downVote} />
        <ItemForm handleClick={handleClick} />
      </div>
    );
  }
}

export default App;
