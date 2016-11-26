import fetch from 'isomorphic-fetch'
import api from './api.jsx'

export const FETCH_PROFILE = 'FETCH_PROFILE'
export const SET_PROFILE = 'SET_PROFILE'
export const SET_ID_TOKEN = 'SET_ID_TOKEN'

export const CASE_UPDATED = 'CASE_UPDATED'
export const CREATE_CASE = 'CREATE_CASE'
export const SELECT_CASE = 'SELECT_CASE'
export const UPDATE_CASE = 'UPDATE_CASE'
export const RECEIVE_CASES = 'RECEIVE_CASES'

export const ADD_PERSON = 'ADD_PERSON'
export const CREATE_PERSON = 'CREATE_PERSON'
export const FETCH_PERSON = 'FETCH_PERSON'
export const UPDATE_PERSON = 'UPDATE_PERSON'

export function receiveCases(json) {
  return { type: RECEIVE_CASES, cases: json }
}

export function selectCase(caseId) {
  return { type: SELECT_CASE, caseId }
}

export function fetchCases() {
  return dispatch => {
    api.getCases().then(json => {
      dispatch(receiveCases(json));
    })
  };
}

export function addCase(caseDetails) {
  return dispatch => {
    api.addCase(caseDetails).then(r => {
      dispatch(fetchCases()); //Fetching everything again sounds like overkill
    });
  };
}

export function updateCase(caseDetails) {
  return dispatch => {
    api.updateCase(caseDetails).then(r => {
      dispatch(caseUpdated(caseDetails));
    })
  };
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

export function setIdToken(idToken) {
  return { type: SET_ID_TOKEN, idToken: idToken }
}

export function fetchProfile(lock, token) {
  return (dispatch, getState) => {
    lock.getProfile(token, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        alert("Error loading the Profile");
        
        //My observations thus far is that this is caused by token expiry, so clear everything
        localStorage.removeItem('userToken');
        localStorage.removeItem('refreshToken');
        dispatch(setIdToken(null));
      }
      dispatch({ type: SET_PROFILE, profile: profile });
    });
  }
}