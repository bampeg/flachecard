import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Main from "./Main";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Main} />
      </Switch>
    </HashRouter>
  );
}
