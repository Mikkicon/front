import React, { Component } from "react";
import RegForm from "./RegForm";
import LogInForm from "./LogInForm";
import "../App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    const Login = () => (
      <LogInForm
        s={this.props.state}
        MCh={this.props.MCh}
        PCh={this.props.PCh}
        PCCh={this.props.PCCh}
        NCh={this.props.NCh}
      />
    );
    const Registration = () => (
      <RegForm
        s={this.props.state}
        MCh={this.props.MCh}
        PCh={this.props.PCh}
        PCCh={this.props.PCCh}
        NCh={this.props.NCh}
      />
    );
    const Home = () => <h1>Home</h1>;
    return (
      <BrowserRouter>
        <div>
          <div className=".flex-container">
            <Link to="/"> Home </Link>
            <Link to="/Login"> Login </Link>
            <Link to="/Registration"> Registration </Link>
          </div>

          <Route path="/Login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/Registration" component={Registration} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Header;
