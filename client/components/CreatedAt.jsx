import React, { Component } from 'react';

class CreatedAt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="date-created">{this.props.date}</p>
      </div>
    );
  }
}

export default CreatedAt;
