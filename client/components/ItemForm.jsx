import React, { Component } from 'react';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleClick(event, this.state.value);
  }

  render() {
    return (
      <form id="food-form" onSubmit={this.handleSubmit}>
        <input id="item-input" type="text" value={this.state.value} onChange={this.handleChange} />
        <button id="submit-btn" type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default ItemForm;
