var update = require('react/lib/update')
import { ADD_CASE, CASE_UPDATED, CREATE_CASE, UPDATE_CASE, RECEIVE_CASES, SELECT_CASE } from "./actions.jsx"
import { ADD_PERSON, CREATE_PERSON, UPDATE_PERSON, FETCH_PERSON } from "./actions.jsx"

export function selectedCaseReducer (state = {}, action) {
  switch (action.type) {
    case SELECT_CASE:
      return parseInt(action.caseId)
    default:
      return state
  }
}

export function caseReducer (state = [], action) {
  switch (action.type) {

    case CASE_UPDATED:
      // TODO: there must be a better way
      var index = state.map(function(c) { return c.id; }).indexOf(action.case.id)
      return update(state, {
        [index]: {$set: action.case }
      })
      return state
    case RECEIVE_CASES:
      return action.cases
    default:
      return state
  }
}

export function selectCaseById(state, caseId) {
    return state.cases ? state.cases.find(function(c) { return c.id == caseId; }) : []
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
