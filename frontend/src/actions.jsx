import fetch from 'isomorphic-fetch'

export const FETCH_PROFILE = 'FETCH_PROFILE'
export const SET_PROFILE = 'SET_PROFILE'

export const CASE_UPDATED = 'CASE_UPDATED'
export const CREATE_CASE = 'CREATE_CASE'
export const SELECT_CASE = 'SELECT_CASE'
export const UPDATE_CASE = 'UPDATE_CASE'
export const RECEIVE_CASES = 'RECEIVE_CASES'

export const ADD_PERSON = 'ADD_PERSON'
export const CREATE_PERSON = 'CREATE_PERSON'
export const FETCH_PERSON = 'FETCH_PERSON'
export const UPDATE_PERSON = 'UPDATE_PERSON'
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE'

export function receiveCases(json) {
  return { type: RECEIVE_CASES, cases: json }
}

export function selectCase(caseId) {
  return { type: SELECT_CASE, caseId }
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
        .then(json => { dispatch(receiveCases(json))})
  }
}

export function receivePeople(json) {
  return { type: RECEIVE_PEOPLE, people: json }
}

export function selectPerson(personId) {
  return { type: SELECT_PERSON, personId }
}

export function fetchPeople() {
  return dispatch => {
    var request = new Request('http://localhost:8080/people?depth=0', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    return fetch(request)
        .then(response => response.json())
        .then(json => { dispatch(receivePeople(json))})
  }
}

export function updateCase(caseDetails) {
  return dispatch => {
    var request = new Request('http://localhost:8080/cases/' + caseDetails.id, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(caseDetails)
    })
    return fetch(request)
        .then(response => dispatch(caseUpdated(caseDetails)))
  }
}

export function caseUpdated(caseDetails) {
  return { type: CASE_UPDATED, case: caseDetails }
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

export function createCase() {
  return { type: CREATE_CASE, case: {} }
}

export function fetchProfile(lock, token) {
  return (dispatch, getState) => {
    lock.getProfile(token, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        alert("Error loading the Profile");
      }
      dispatch({ type: SET_PROFILE, profile: profile });
    });
  }
}