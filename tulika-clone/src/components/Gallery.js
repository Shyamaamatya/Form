import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TulikaClone } from "./components/TulikaClone";
import { Exhibition } from "./components/Exhibition";
import { Exclusive } from "./components/Exclusive";
import { Studios } from "./components/Studios";
import { Feed } from "./components/Feed";
import { Login } from "./components/Login";

export const Gallery = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/tulikaClone" component={TulikaClone} />
          <Route exact path="/exhibition" component={Exhibition} />
          <Route exact path="/" component={Gallery} />
          <Route exact path="/exclusive" component={Exclusive} />
          <Route exact path="/studios" component={Studios} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};
