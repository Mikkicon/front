import React, { Component } from "react";
// import Header from "./comp/Header";
import Order from "./Order";
import RegForm from "./user/RegForm";
import LogInForm from "./user/LogInForm";
import AdminPage from "./common/AdminPage";
import Navbar from "./common/Navbar";
import PrivateRoute from "./common/PrivateRoute";
import Profile from "./user/Profile";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: "",
      errors: { mail: false, password: false, names: false, all: false },
      loading: false,
      isAuthenticated: false,
      attachments: [1, 1, 2, 3],
      currentUser: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    // fetch("http://localhost:8080/login");
  }
  callbk = a => {
    console.log("App, a: ", a.status);
    // fakeAuth.isAuthenticated = a.status;
    this.setState({ isAuthenticated: a.status });
    console.log(this.state.isAuthenticated);
  };
  f() {
    return this.state.isAuthenticated;
  }
  render() {
    // console.log("App, isAuthenticated: ", this.state.isAuthenticated);
    return (
      <BrowserRouter>
        <div>
          <header className="navbar" style={{ position: "fixed" }}>
            <Navbar />
          </header>

          <br />
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <br />
                <br />
                <br /> <h1>Home page</h1>
              </div>
            )}
          />
          <Route
            path="/login"
            render={() => <LogInForm isAuth={this.callbk} />}
          />
          <Route path="/registration" component={RegForm} />
          <PrivateRoute
            path="/admin"
            yesno={this.state.isAuthenticated}
            component={AdminPage}
          />
          <PrivateRoute
            path="/user"
            render={props => (
              <Profile
                isAuthenticated={this.state.isAuthenticated}
                user={this.state.currentUser}
                {...props}
              />
            )}
          />
          <PrivateRoute
            path="/order"
            component={Order}
            yesno={this.state.isAuthenticated}
            attachments={this.state.attachments}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
