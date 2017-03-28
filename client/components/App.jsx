import React, { Component } from 'react';
import FoodBoard from './FoodBoard.jsx';
import ItemForm from './ItemForm.jsx';

class App extends Component {
  render() {
    return (
      <div id="app-container" style={{ textAlign: 'center' }}>
        <h1 className="header">Food Hunt</h1>
        <FoodBoard />
        <ItemForm />
      </div>
    );
  }
}

export default App;
