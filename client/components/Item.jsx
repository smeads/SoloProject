import React, { Component } from 'react';
import CreatedAt from './CreatedAt.jsx';
import moment from 'moment';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = moment(this.props.date).format("M/DD/YYYY");
    console.log(date);
    return (
      <div className="item-div">
        <p className="item">{this.props.item}</p>
        <CreatedAt date={date} />
      </div>
    );
  }
}

export default Item;
