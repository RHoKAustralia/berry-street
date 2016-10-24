var update = require('react/lib/update')
import { ADD_CASE, CREATE_CASE, UPDATE_CASE, FETCH_CASE, RECEIVE_CASES } from "./actions.jsx"
import { ADD_PERSON, CREATE_PERSON, UPDATE_PERSON, FETCH_PERSON } from "./actions.jsx"

const initialState = {
  cases: [],
  people: []
}

export function caseReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_CASE:
      return Object.assign({}, state, {
        cases: [
          ...state.cases,
          action.case
        ]
      })
    case UPDATE_CASE:
      // TODO: there must be a better way
      var index = state.cases.map(function(c) { return c.caseId; }).indexOf(action.case.caseId)
      return update(state, {
        cases: {
          [index]: {$set: action.case }
        }
      })
    case CREATE_CASE:
      return Object.assign({}, state, {selectedCase: {}})
    case FETCH_CASE:
      return Object.assign({}, state, {
        selectedCase: state.cases.find(function(c) { return c.caseId == action.caseId; })
      })
    case RECEIVE_CASES:
      return Object.assign({}, state, {
        cases: action.cases
      })
    default:
      return state
  }
}
  
  export function personReducer (state = initialState, action) {
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

