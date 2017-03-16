var update = require('react/lib/update')
import { ADD_CASE, CASE_SAVED, CREATE_CASE, UPDATE_CASE, RECEIVE_CASES, SELECT_CASE } from "./actions.jsx"
import { ADD_PERSON, CREATE_PERSON, UPDATE_PERSON, FETCH_PERSON, CHILD_ADDED } from "./actions.jsx"
import { SET_PROFILE, SET_ID_TOKEN } from './actions.jsx'

export function authReducer (state = {}, action) {
  switch (action.type) {
    case SET_PROFILE:
      return Object.assign({}, state, { profile: action.profile })
    case SET_ID_TOKEN:
      return Object.assign({}, state, {
        login: {
          idToken: action.idToken
        }
      })
    default:
      return state
  }
}

export function selectedCaseReducer (state = {}, action) {
  switch (action.type) {
    case SELECT_CASE:
      return parseInt(action.caseId)
    default:
      return state
  }
}

export function childReducer (state = {}, action) {
  switch (action.type) {
    case CHILD_ADDED:
      return {childToAdd: action.child}
    default:
      return state
  }
}

export function caseReducer (state = [], action) {
  switch (action.type) {
    case CASE_SAVED:
      // TODO: there must be a better way
      var index = state.map(function(c) { return c.id }).indexOf(action.case.id)
      return update(state, {
        [index]: {$set: action.case }
      })
    case RECEIVE_CASES:
      return action.cases
    default:
      return state
  }
}

export function selectCaseById(state, caseId) {
  return state.cases ? state.cases.find(function(c) { return c.id === caseId }) : []
}

export function personReducer (state = {people:[]}, action) {
  switch (action.type) {
    case ADD_PERSON:
      return Object.assign({}, state, {
        people: [
          ...state.people,
          action.person
        ]
      })
    case UPDATE_PERSON:
      // TODO: there must be a better way
      var index = state.people.map(function(c) { return c.id; }).indexOf(action.person.id)
      return update(state, {
        people: {
          [index]: {$set: action.person }
        }
      })
    case CREATE_PERSON:
      return Object.assign({}, state, {selectedPerson: {}})
    case FETCH_PERSON:
      return Object.assign({}, state, {
        selectedPerson: state.people.find(function(c) { return c.id == action.personId; })
      })
    default:
      return state
  }
}
