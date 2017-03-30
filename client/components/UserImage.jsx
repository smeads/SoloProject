import React, { Component } from 'react';

class UserImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thumbnail">
        <img className="user-img" src="/client/assets/userimg.jpg" alt="user" />
      </div>
    );
  }
}

export default UserImage;
