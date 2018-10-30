import React, { Component } from "react";
class Profile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        {this.props.user.map(u => (
          <li>u</li>
        ))}
      </React.Fragment>
    );
  }
}

export default Profile;
