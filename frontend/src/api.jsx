import { MOCK_BACKEND, PEOPLE_DATA, CASE_SUMMARY_DATA, CASE_DATA } from "./mock-data"

var SERVICE_URL_BASE

import fetch from 'isomorphic-fetch'

function sendRequest (url, method, data) {
  const requestOpts = {
    method: method,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  if (data) {
    requestOpts.body = JSON.stringify(data)
  }
  const request = new Request(url, requestOpts)
  return fetch(request).then(r => {
    if (r.ok) {
      return r.json()
    }
  })
}

const getPerson = (caseId, personId) => {
  if (MOCK_BACKEND) {
    return new Promise((resolve, reject) => {
      const matches = PEOPLE_DATA.filter(p => p.id === personId)
      if (matches.length === 1) {
        resolve(matches[0])
      } else {
        reject(new Error('Person not found'))
      }
    })
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases/${caseId}/people/${personId}`, 'GET')
  }
}

const getRelationships = (caseId) => {
  return sendRequest(`${SERVICE_URL_BASE}/cases/${caseId}/connections`, 'GET')
}

const getRelationship = (caseId, personId, relationId) => {
  return this.getPerson(caseId, personId).then(r => {
    const family = r.family
    const friends = r.friends

    let matches = family.filter(f => f.id === relationId)
    if (matches.length === 1) {
      return Promise.resolve(matches[0])
    }
    matches = friends.filter(f => f.id === relationId)
    if (matches.length === 1) {
      return Promise.resolve(matches[0])
    }
    return Promise.reject(new Error('No such relationship'))
  })
}

const getCaseStatuses = () => {
  return Promise.resolve(['Open', 'Closed'])
}

const getPhases = () => {
  return Promise.resolve(['Referred', 'Searching'])
}

const getPlacementTypes = () => {
  return Promise.resolve(['With Parents', 'With Mother', 'With Father', 'Kinship Care', 'Kith', 'Foster Care', 'Residential Care', 'Lead Tenant', 'Other'])
}

const getUsers = () => {
  return new Promise((resolve, reject) => {
    // This should actually be a fetch AJAX request
    setTimeout(() => {
      resolve(['Shaun', 'LJ', 'Yael'])
    }, 2000)
  })
}

const getCases = () => {
  if (MOCK_BACKEND) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(CASE_DATA)
      }, 2000)
    })
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases`, 'GET')
  }
}

const getArchivedCases = () => {
  if (MOCK_BACKEND) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(CASE_DATA)
      }, 2000)
    })
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases`, 'GET')
  }
}

const getCase = (id) => {
  if (MOCK_BACKEND) {
    return new Promise((resolve, reject) => {
      const singleCase = CASE_SUMMARY_DATA.filter(c => c.case_id === id)
      if (singleCase.length === 1) {
        resolve(singleCase[0])
      } else {
        reject(new Error('Case not found'))
      }
    })
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases/${id}`, 'GET')
  }
}

const getCaseGraph = (id) => {
  return sendRequest(`${SERVICE_URL_BASE}/cases/${id}/vis`, 'GET')
}

const addCase = (caseDetails) => {
  if (MOCK_BACKEND) {
    CASE_DETAILS_DATA.push(caseDetails)
    CASE_SUMMARY_DATA.push({ staffName: caseDetails.staffName, familyName: caseDetails.familyName, givenNames: caseDetails.givenNames, caseNumber: caseDetails.caseNumber, phase: 'New' })
    return Promise.resolve(true)
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases`, 'POST', caseDetails)
  }
}
const addSubjectToCase = (theCase, subject) => {
  return sendRequest(`${SERVICE_URL_BASE}/cases/${theCase.id}/subject/${subject.id}`, 'PUT')
}
const updateCase = (caseDetails) => {
  if (MOCK_BACKEND) {
    return Promise.resolve(caseDetails)
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases`, 'PUT', caseDetails)
  }
}
const addPersonForCase = (caseId, person) => {
  return sendRequest(`${SERVICE_URL_BASE}/cases/${caseId}/people`, 'POST', person)
}

const addCaseSubjectRelationship = (caseId, from, to, relationType) => {
  return sendRequest(`${SERVICE_URL_BASE}/cases/${caseId}/connections?fromId=${from}&toId=${to}&type=${relationType}&notes=${relationType}`, 'POST')
}

const updatePersonForCase = (caseId, person) => {
  return sendRequest(`${SERVICE_URL_BASE}/cases/${caseId}/people/${person.id}`, 'PUT', person)
}
const linkPerson = (caseSubjectId, relatedPersonId, relationship) => {
  let requestParams = '?' + 'toId=' + relatedPersonId +
    '&relationship=' + encodeURIComponent(relationship.relationship) +
    '&notes=' + encodeURIComponent(relationship.notes)

  return sendRequest(`${SERVICE_URL_BASE}/connections/${caseSubjectId}/connections/${requestParams}`, 'PUT')
}

export default (baseUrl) => {
  SERVICE_URL_BASE = baseUrl || 'http://localhost:8080'
  return {
    getPerson,
    getRelationships,
    getRelationship,
    getCaseStatuses,
    getPhases,
    getPlacementTypes,
    getUsers,
    getCases,
    getArchivedCases,
    getCase,
    addCase,
    addSubjectToCase,
    updateCase,
    addPersonForCase,
    updatePersonForCase,
    linkPerson,
    addCaseSubjectRelationship,
    getCaseGraph
  }
}
