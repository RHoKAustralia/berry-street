export const ADD_CASE = 'ADD_CASE'
export const CREATE_CASE = 'CREATE_CASE'
export const FETCH_CASE = 'FETCH_CASE'
export const UPDATE_CASE = 'UPDATE_CASE'

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
