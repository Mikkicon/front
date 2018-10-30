import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <a href="/">
            <h2 style={{ color: "white" }}>Navbar</h2>
          </a>
          <div className=" btn btn-outline-default" />
          <a className=" btn  btn-outline-default" href="/login">
            Login
          </a>
          <a className=" btn  btn-outline-success" href="/registration">
            Register
          </a>
          <a className=" btn  btn-outline-danger" href="/admin">
            Admin
          </a>
          <a className=" btn  btn-outline-primary" href="/order">
            Order
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
