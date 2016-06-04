import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.js';
import About from './components/About.js';
import PersonList from './components/PersonList.js';
import Home from './components/Home.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={PersonList} />
    </Route>
  </Router>
), document.getElementById('app'));
