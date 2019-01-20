import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Main from "./Main";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import CreateNewAccount from "./components/Login/CreateNewAccount";

export default function App() {
  return (
    <HashRouter>
      <React.Fragment>
        <Menu color="orange" />
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={CreateNewAccount} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  );
}
