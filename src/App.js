import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AddGame, GameInfo, Home, Signin, EditGame } from "./pages";
import { PrivateRoute, PublicRoute } from "./hoc";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PublicRoute exact path="/signin" component={Signin} />
        <PrivateRoute exact path="/game/:id" component={GameInfo} />
        <PrivateRoute exact path="/add" component={AddGame} />
        <PrivateRoute exact path="/game/:id/edit" component={EditGame} />
      </Switch>
    </Router>
  );
};

export default App;
