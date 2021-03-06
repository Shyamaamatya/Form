import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Navmob from "./components/Navmob";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TulikaClone } from "./components/TulikaClone";
import { Exhibition } from "./components/Exhibition";
import { Gallery } from "./components/Gallery";
import { Exclusive } from "./components/Exclusive";
import { Studios } from "./components/Studios";
import { Feed } from "./components/Feed";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import { Footer1 } from "./components/Footer1";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Navmob />
        <Switch>
          <Route exact path="/" component={TulikaClone} />
          <Route exact path="/exhibition" component={Exhibition} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/exclusive" component={Exclusive} />
          <Route exact path="/studios" component={Studios} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
        <Footer1 />
      </Router>
    </>
  );
}

export default App;
