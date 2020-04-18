import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import Nav from "./components/layout/Nav";
import Landing from "./components/layout/Landing";

function App() {
  return (
    <Router>
      <Fragment>
        <Nav />
        <Route exact path="/" component={Landing} />
      </Fragment>
    </Router>
  );
}

export default App;
