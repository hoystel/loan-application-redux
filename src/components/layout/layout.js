import React, { Component } from 'react';
import './layout.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IndexView from './../indexview/indexview';
import NewLoanApplication from './../newloanapplication/newloanapplication';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="main-container">
            <h3>Applications for credit test</h3>
            <Switch>
              <Route path="/" exact component={IndexView} />
              <Route path="/new-loan-application" component={NewLoanApplication} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
