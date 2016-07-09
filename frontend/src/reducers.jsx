var update = require('react/lib/update')
import { ADD_CASE, CREATE_CASE, UPDATE_CASE, FETCH_CASE } from "./actions.jsx"

const initialState = {
  cases: []
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
    default:
      return state
  }
}
