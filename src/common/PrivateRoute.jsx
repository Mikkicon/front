import React, { Component } from "react";

import { Route, Redirect } from "react-router-dom";
class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      auth: false
    };
  }

  render() {
    const { component: Component, ...props } = this.props;

    // console.log("Private route, auth: ", this.state.auth);

    // console.log("Private route, prop yesno: ", this.props.yesno);
    return (
      <Route
        {...props}
        render={props =>
          this.props.yesno ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
