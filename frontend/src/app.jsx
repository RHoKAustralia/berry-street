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

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { caseReducer, selectedCaseReducer, personReducer, authReducer } from './reducers.jsx';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const reducer = combineReducers({
  cases: caseReducer,
  auth: authReducer,
  selectedCase: selectedCaseReducer,
  form: formReducer,
  people: personReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(applyMiddleware(thunkMiddleware, createLogger()));
const store = createStore(reducer, composedEnhancers);

// For testing -- until we bring in async redux actions
import { addPerson, updatePerson, fetchCases, fetchPeople } from './actions.jsx'

store.dispatch(fetchCases())
store.dispatch(fetchPeople())


// store.dispatch(addPerson({ id: "12346", name: "Jenny", father: "Ben James", mother: "234957" }))
// store.dispatch(addPerson({ id: "12347", name: "Jenny", father: "Kate Smith", mother: "234958" }))
// store.dispatch(updatePerson({ id: "12347", name: "Mia", father: "Bob Smith", mother: "234958" }))

ReactDOM.render((
    <div>
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={Index} />
            <Route path="/about" component={About} />
            <Route path="/users" component={PersonList} />
            <Route path="/cases" component={CaseList} />
            <Route path="/cases/new" component={EditCase} />
            <Route path="/cases/:caseId" component={Case} />
            <Route path="/cases/:caseId/edit" component={EditCase} />
            <Route path="/people" component={PersonList} />
            <Route path="/people/new" component={EditPerson} />
            <Route path="/people/:id" component={Person} />
            <Route path="/people/:id/edit" component={EditPerson} />
          </Route>
          <Route path="*" component={App} />
        </Router>
      </Provider>
    </div>
), document.getElementById('app'));

store.dispatch(updatePerson({ id: "12347", name: "Mia", father: "Bob Smith", mother: "234958" }))
