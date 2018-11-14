import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "../public/pages/Home";
import Menu from "../public/pages/Menu";
import Main from "../public/pages/Main";
import Cook from "../public/pages/Cook";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main} exact />
          <Route path="/Home" component={Home} exact />
          <Route path="/Menu" component={Menu} exact />
          <Route path="/Cook" component={Cook} exact />
        </div>
      </Router>
    );
  }
}

export default App;
