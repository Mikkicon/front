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

          <a className=" btn  btn-outline-default" href="/admin">
            Admin
          </a>

          <a className=" btn  btn-outline-primary" href="/order">
            Order
          </a>
          <a
            className=" btn  btn-outline-danger"
            onClick={() => {
              window.confirm("Do you want to log out?")
                ? fetch("http://localhost:3010/logout", { method: "GET" })
                    .then(() => this.props.logout())
                    .catch(e => console.log(e))
                : console.log("Canceled");
            }}
          >
            {" "}
            Logout
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
