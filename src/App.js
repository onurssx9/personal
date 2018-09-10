import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import About from "./components/about";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Navbar />
            <Route path="/" component={Welcome} exact />
            <Route path="/about" component={About} />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
