import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.js';
import About from './components/About.js';
import PersonList from './components/PersonList.js';
import EditPerson from './components/EditPerson.js';
import Person from './components/Person.js';
import CaseList from './components/CaseList.js';
import Case from './components/Case.js';
import EditCase from './components/EditCase.js';
//import LoggedIn from './components/LoggedIn.js';
import Index from './components/Index.js';
import Login from './components/Login.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Index} />
      <Route path="/about" component={About} />
      <Route path="/users" component={PersonList} />
      <Route path="/cases" component={CaseList} />
      <Route path="/case/:caseId" component={Case} />
      <Route path="/case" component={EditCase} />
      <Route path="/case/:caseId/edit" component={EditCase} />
      <Route path="/person" component={Person} />
      <Route path="/person/new" component={EditPerson} />
      <Route path="/person/:personId/edit" component={EditPerson} />
    </Route>
    <Route path="*" component={App} />
  </Router>
), document.getElementById('app'));
