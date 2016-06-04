import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.js';
import About from './components/About.js';
import PersonList from './components/PersonList.js';
import CaseList from './components/CaseList.js';
import Case from './components/Case.js';
import NewCase from './components/NewCase.js';
import LoggedIn from './components/LoggedIn.js';
import Index from './components/Index.js';
import Home from './components/Home.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Index} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={PersonList} />
      <Route path="/cases" component={CaseList} />
      <Route path="/case/:caseId" component={Case} />
      <Route path="/case" component={NewCase} />
    </Route>
  </Router>
), document.getElementById('app'));
