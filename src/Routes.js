import React from "react";
import PrivateRoute from "./common/PrivateRoute";
import { Route, Switch } from "react-router-dom";
import Order from "./user/Order";
import Home from "./common/Home";
import RegForm from "./user/RegForm";
import LogInForm from "./user/LogInForm";
import AdminPage from "./common/AdminPage";
import NotFound from "./common/NotFound";
import AuthenticatedRoute from "./common/AuthenticatedRoute";
import UnAuthenticatedRoute from "./common/UnAuthenticatedRoute";

export default ({ childProps }) => (
  <Switch>
    <PrivateRoute path="/" exact component={Home} props={childProps} />
    <UnAuthenticatedRoute
      path="/login"
      exact
      component={LogInForm}
      props={childProps}
    />
    <UnAuthenticatedRoute
      path="/registration"
      exact
      component={RegForm}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/admin"
      exact
      component={AdminPage}
      props={childProps}
    />

    <AuthenticatedRoute
      path="/order"
      exact
      component={Order}
      props={childProps}
    />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
