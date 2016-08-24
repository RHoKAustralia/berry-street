import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.jsx';
import About from './components/About.jsx';
import PersonList from './components/PersonList.jsx';
import EditPerson from './components/EditPerson.jsx';
import Person from './components/Person.jsx';
import CaseList from './components/CaseList.jsx';
import Case from './components/Case.jsx';
import EditCase from './components/EditCase.jsx';
import Index from './components/Index.jsx';
import Login from './components/Login.jsx';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { caseReducer } from './reducers.jsx';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  cases: caseReducer,
  form: formReducer
});
const store = createStore(reducer);

// For testing -- until we bring in async redux actions
import { addCase, updateCase } from './actions.jsx'
store.dispatch(addCase({ caseId: "12346", staffName: "Jenny", childName: "Ben James", caseNumber: "234957" }))
store.dispatch(addCase({ caseId: "12347", staffName: "Jenny", childName: "Kate Smith", caseNumber: "234958" }))
store.dispatch(updateCase({ caseId: "12347", staffName: "Mia", childName: "Bob Smith", caseNumber: "234958" }))

ReactDOM.render((
  <div>
    <Provider store={store}>
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
    </Provider>
  </div>
), document.getElementById('app'));
