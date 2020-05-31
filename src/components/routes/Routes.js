import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
