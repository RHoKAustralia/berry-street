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

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { caseReducer, selectedCaseReducer, personReducer } from './reducers.jsx';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const reducer = combineReducers({
  cases: caseReducer,
  selectedCase: selectedCaseReducer,
  form: formReducer,
  people: personReducer
});
const store = createStore(reducer,
    applyMiddleware(thunkMiddleware, createLogger()));

// For testing -- until we bring in async redux actions
import { addPerson, updatePerson, fetchCases } from './actions.jsx'

store.dispatch(fetchCases())

store.dispatch(addPerson({ id: "12346", name: "Jenny", father: "Ben James", mother: "234957" }))
store.dispatch(addPerson({ id: "12347", name: "Jenny", father: "Kate Smith", mother: "234958" }))
store.dispatch(updatePerson({ id: "12347", name: "Mia", father: "Bob Smith", mother: "234958" }))

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
          <Route path="/personlist" component={PersonList} />
          <Route path="/person/:id" component={Person} />
          <Route path="/person" component={EditPerson} />
          <Route path="/person/:id/edit" component={EditPerson} />
        </Route>
        <Route path="*" component={App} />
      </Router>
    </Provider>
  </div>
), document.getElementById('app'));
