import axios from 'axios';
import React, { Component } from 'react';
import FoodBoard from './FoodBoard.jsx';
import ItemForm from './ItemForm.jsx';

const url = 'http://localhost:3000/api/items';
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};
// get request to get entire item list
function getItems() {
  return axios.get(url);
}
// new item post request
function postItem(value) {
  return axios.post(url, { name: value, votes: 0 }, config);
}
// update item votes put request
function updateVotes(itemId, voteCount) {
  return axios.put(url, { id: itemId, votes: voteCount }, config)
}

let itemsList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemsList
    };
    this.handleClick = this.handleClick.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  // Get request to server for list of items
  componentDidMount() {
    getItems()
      .then((items) => {
        itemsList = items.data;
        this.setState(
          { items: itemsList }
        );
        // itemsList.sort((a, b) => (a.votes < b.votes));
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Event method for ItemForm submit
  handleClick(event, value) {
    event.preventDefault();
    postItem(value)
      .then((item) => {
        const newItem = {
          // id: item.data.id,
          name: item.data.name,
          votes: item.data.votes
        }
        itemsList.push(newItem);
        this.setState({ items: itemsList }, () => {
          document.getElementById('item-input').value = '';
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // Event method for up & downVoting
  upVote(event) {
    event.preventDefault();
    const itemId = Number(event.target.id);
    let voteCount;

    for (let i = 0; i < itemsList.length; i += 1) {
      if (itemsList[i].id === itemId) {
        itemsList[i].votes += 1;
        voteCount = itemsList[i].votes;
      }
    }

    updateVotes(itemId, voteCount)
      .then((item) => {
        const updatedVote = {
          items: itemsList
        }
        this.setState({ updatedVote }, () => {
          console.log(updatedVote.items);
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  // Event method for downVoting
  downVote(event) {
    event.preventDefault();
    const itemId = Number(event.target.id);
    let voteCount;

    for (let i = 0; i < itemsList.length; i += 1) {
      if (itemsList[i].id === itemId) {
        itemsList[i].votes -= 1;
        voteCount = itemsList[i].votes;
      }
    }

    updateVotes(itemId, voteCount)
      .then((item) => {
        const updatedVote = {
          items: itemsList
        }
        this.setState({ updatedVote }, () => {
          console.log(updatedVote.items);
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const handleClick = this.handleClick;
    const upVote = this.upVote;
    const downVote = this.downVote;
    const itemsArr = this.state.items.sort((a, b) => (b.votes - a.votes));
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
