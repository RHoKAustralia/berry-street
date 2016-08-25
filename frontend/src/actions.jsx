export const ADD_CASE = 'ADD_CASE'
export const CREATE_CASE = 'CREATE_CASE'
export const FETCH_CASE = 'FETCH_CASE'
export const UPDATE_CASE = 'UPDATE_CASE'

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