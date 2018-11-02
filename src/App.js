import React, { Component } from "react";
import Routes from "./Routes";
import Navbar from "./common/Navbar";
import NavbarAuth from "./common/NavBarAuth";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: "",
      errors: { mail: false, password: false, names: false, all: false },
      loading: false,
      isAuthenticated: false,
      attachments: [1, 1, 2, 3],
      currentUser: { name: "User", role: 0 },
      userrole: 0,
      history: "",
      session: ""
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    await fetch("http://localhost:3010/session", {
      method: "GET"
    })
      .then(response => response.json())
      .then(
        a =>
          a.user ? this.setState({ isAuthenticated: true }) : console.log(false)
      )
      .catch(error => console.log(error));
  }

  // this.setState({ session: localStorage.getItem("session") });
  // fetch("http://localhost:8080/login");

  callbk = a => {
    this.setState({ isAuthenticated: a.status });
    // localStorage.setItem("isauth", a.status);
    // this.setState({ isAuthenticated: localStorage.getItem("isauth") });
  };
  logoutFn = a => {
    this.setState({ isAuthenticated: false });
  };

  render() {
    // console.log("App, isAuthenticated: ", this.state.isAuthenticated);
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      isAuth: this.callbk
    };
    return (
      <BrowserRouter>
        <React.Fragment>
          {this.state.isAuthenticated && (
            <header className="navbar" style={{ position: "fixed" }}>
              <NavbarAuth logout={this.logoutFn} />
            </header>
          )}
          {!this.state.isAuthenticated && (
            <header className="navbar" style={{ position: "fixed" }}>
              <Navbar />
            </header>
          )}
          <Routes childProps={childProps} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
