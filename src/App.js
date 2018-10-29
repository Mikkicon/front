import React, { Component } from "react";
// import Header from "./comp/Header";
import Order from "./comp/Order";
import RegForm from "./comp/RegForm";
import LogInForm from "./comp/LogInForm";
import AdminPage from "./comp/AdminPage";
import Navbar from "./comp/Navbar";
// import PrivateRoute from "./PrivateRoute";
import "./App.css";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  }
};
const PrivateRoute = ({ component: Component, yesno: a, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: "",
      errors: { mail: false, password: false, names: false, all: false },
      loading: false,
      callback: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    // fetch("http://localhost:8080/login");
  }
  callbk = a => {
    // fakeAuth.isAuthenticated = a.status;
    this.setState({ callback: a.status });
  };
  f() {
    return this.state.callback;
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <br />
          <Route
            path="/login"
            render={() => <LogInForm isAuth={this.callbk} />}
          />
          <Route path="/registration" component={RegForm} />
          <PrivateRoute exact path="/admin" component={AdminPage} />
          <PrivateRoute
            path="/order"
            component={Order}
            yesno={this.state.callback}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
