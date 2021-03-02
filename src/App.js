import React from "react";
import { HashRouter, Route} from "react-router-dom";
import Home from "./pages/Home/index";
import Work from "./pages/Work/index";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./style.css";

function App() {
  return (
    <HashRouter>
      <div>
        <Nav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <NoMatch />
          </Route>
      </div>
    </HashRouter>
  );
}

export default App;
