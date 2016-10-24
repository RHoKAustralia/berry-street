import fetch from 'isomorphic-fetch'

export const ADD_CASE = 'ADD_CASE'
export const CREATE_CASE = 'CREATE_CASE'
export const FETCH_CASE = 'FETCH_CASE'
export const UPDATE_CASE = 'UPDATE_CASE'
export const REQUEST_CASES = 'REQUEST_CASES'
export const RECEIVE_CASES = 'RECEIVE_CASES'

export const ADD_PERSON = 'ADD_PERSON'
export const CREATE_PERSON = 'CREATE_PERSON'
export const FETCH_PERSON = 'FETCH_PERSON'
export const UPDATE_PERSON = 'UPDATE_PERSON'

export function addCase(caseDetails) {
  return { type: ADD_CASE, case: caseDetails }
}

export function createCase() {
  return { type: CREATE_CASE }
}

export function fetchCase(caseId) {
  return { type: FETCH_CASE, caseId: caseId }
}

export function updateCase(caseDetails) {
  return { type: UPDATE_CASE, case: caseDetails }
}

export function addPerson(personDetails) {
  return { type: ADD_PERSON, person: personDetails }
}

export function createPerson() {
  return { type: CREATE_PERSON }
}

export function fetchPerson(personId) {
  return { type: FETCH_PERSON, personId: personId }
}

export function updatePerson(personDetails) {
  return { type: UPDATE_PERSON, person: personDetails }
}

export function requestCases() {
  return { type: REQUEST_CASES }
}

export function receiveCases(json) {
  return { type: RECEIVE_CASES, cases: json }
}

export function fetchCases() {
  return dispatch => {
    var request = new Request('http://localhost:8080/cases', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    return fetch(request)
        .then(response => response.json())
        .then(json => {console.log('got response', json); dispatch(receiveCases(json))})
  }
}
