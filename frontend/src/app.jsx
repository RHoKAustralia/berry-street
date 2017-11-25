import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App.jsx'
import Index from './components/Index.jsx'
import CaseViewPage from './components/case/CaseViewPage.jsx'

import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { caseReducer, childReducer, selectedCaseReducer, personReducer, authReducer } from './reducers.jsx'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const reducer = combineReducers({
  cases: caseReducer,
  child: childReducer,
  auth: authReducer,
  selectedCase: selectedCaseReducer,
  form: formReducer,
  people: personReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers = composeEnhancers(applyMiddleware(thunkMiddleware, createLogger()))
const store = createStore(reducer, composedEnhancers)

ReactDOM.render((
    <div>
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={Index} />
            <Route path="/cases/new" component={CaseViewPage} />
            <Route path="/cases/:caseId" component={CaseViewPage} />
          </Route>
          <Route path="*" component={App} />
        </Router>
      </Provider>
    </div>
), document.getElementById('app'))
