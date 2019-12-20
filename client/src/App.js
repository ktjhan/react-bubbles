import React, { useState } from "react";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Bubbles from './components/Bubbles';
import ColorList from './components/ColorList';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/BubblePage" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
