import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GameInfo, Home, Signin } from "./pages";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/game" component={GameInfo} />
      </Switch>
    </Router>
  );
};

export default App;
