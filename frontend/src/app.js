import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.js';
import About from './components/About.js';
import PersonList from './components/PersonList.js';
import Home from './components/Home.js';
import CaseList from './components/CaseList.js';
import Case from './components/Case.js';
import EditCase from './components/EditCase.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={PersonList} />
      <Route path="/cases" component={CaseList} />
      <Route path="/case/:caseId" component={Case} />
      <Route path="/case" component={EditCase} />
      <Route path="/case/:caseId/edit" component={EditCase} />
     </Route>
  </Router>
), document.getElementById('app'));
