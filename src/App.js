import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Work from "./pages/Work/index";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./style.css";

function App() {
  return (
    <Router >
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
