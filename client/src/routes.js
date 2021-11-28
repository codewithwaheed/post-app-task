import React from "react";
import { Route, Switch } from "react-router-dom";
import mainView from "./views/MainView/MainView";

export default function routes() {
  return (
    <Switch>
      <Route path="/" component={mainView} />
    </Switch>
  );
}
