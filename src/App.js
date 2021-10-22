import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddGame, GameInfo, Home, Signin } from "./pages";
import { PrivateRoute, PublicRoute } from "./hoc";
import "./App.css";

const App = () => {
  return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute path="/signin" component={Signin} />
          <PrivateRoute path="/game" component={GameInfo} />
          <PrivateRoute path="/add" component={AddGame} />
        </Switch>
      </Router>
  );
};

export default App;
