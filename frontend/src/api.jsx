import fetch from 'isomorphic-fetch'
import { CONNECTIONS_DATA, CASE_DATA } from "./mock-data"
import { TYPE_SUBJECT, TYPE_PERSON } from "./components/case/model/CaseGraph"

export const MOCK_BACKEND = true
let caseIndex = 299 //FIXME: move to mock-data
let personIndex = 55 //FIXME: move to mock-data
let relationshipIndex = 192 //FIXME: move to mock-data

var SERVICE_URL_BASE

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

const personFromConnection = (conn, personId) => {
  if ((conn.from || {}).id === personId) {
    return conn.from
  }
  if ((conn.to || {}).id === personId) {
    return conn.to
  }
  return null
}
const findPerson = (caseId, personId) => {
  const matchingConnection = CONNECTIONS_DATA[caseId]
    .find(c => personFromConnection(c, personId))
  return personFromConnection(matchingConnection, personId)
}
const getPerson = (caseId, personId) => {
  if (MOCK_BACKEND) {
    return new Promise((resolve, reject) => {
      const match = findPerson(caseId, personId)
      if (match) {
        resolve(match)
      } else {
        reject(new Error('Person not found'))
      }
    })
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases/${caseId}/people/${personId}`, 'GET')
  }
}

const getRelationships = (caseId) => {
  if (MOCK_BACKEND) {
    return Promise.resolve(CONNECTIONS_DATA[caseId] || [])
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases/${caseId}/connections`, 'GET');
  }
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
      const singleCase = CASE_DATA.filter(c => c.id == id)
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
  return new Promise((resolve, reject) => {
    getCase(id).then(oCase => {
      //HACK-athon-only: @id is bogus. It should be id, but /cases/{id}/connections gives empty array
      //on case.id, when we can finally fetch by case.id, we can Promise.all the requests simulatneously
      //instead of one after another
      const cid = oCase.id; // oCase["@id"];
      getRelationships(cid).then(connections => {
        const subjectId = oCase.subject.id;
        const otherPeople = {};
        for (const conn of connections) {
          otherPeople[conn.from.id] = conn.from;
          otherPeople[conn.to.id] = conn.to;
        }
        //Exclude subject
        delete otherPeople[subjectId];
        const otherNodes = Object.keys(otherPeople).map(k => ({ id: k, label: otherPeople[k].displayName, group: TYPE_PERSON }));

        const graph = {
          nodes: [
            { id: subjectId, label: oCase.subject.displayName, group: TYPE_SUBJECT },
            ...otherNodes
          ],
          edges: [
            ...connections.map(c => ({ from: c.from.id, to: c.to.id /*, label: c.notes */ }))
          ]
        };
        resolve(graph);
      }).catch(reject);
    }).catch(reject);
  });
};

const addCase = (caseDetails) => {
  if (MOCK_BACKEND) {
    caseIndex += 1
    caseDetails.id = caseIndex
    CASE_DATA.push(caseDetails)
    CONNECTIONS_DATA[caseIndex] = []
    return Promise.resolve({ id: caseDetails.id })
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases`, 'POST', caseDetails)
  }
}
const updateSubject = (caseId, subject) => {
  if (MOCK_BACKEND) {
    CASE_DATA.find(it => it.id == caseId).subject = subject
    return Promise.resolve({ id: subject.id })
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases/${caseId}/subject`, 'PUT')
  }
}
const updateCase = (caseDetails) => {
  if (MOCK_BACKEND) {
    return Promise.resolve(caseDetails)
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases`, 'PUT', caseDetails)
  }
}

const addPersonForCase = (caseId, person) => {
  if (MOCK_BACKEND) {
    personIndex += 1
    person.id = personIndex
    return Promise.resolve({ id: person.id })
  } else {
    return sendRequest(`${SERVICE_URL_BASE}/cases/${caseId}/people`, 'POST', person)
  }
}
const addRelationship = (caseId, from, to, relationType, notes) => {
  if (MOCK_BACKEND) {
    relationshipIndex += 1
    CONNECTIONS_DATA[caseId].push({ id: relationshipIndex, from, to })
    return Promise.resolve({ id: relationshipIndex })
  } else {
    return addCaseSubjectRelationship(caseId, from.id, to.id, relationType, notes)
  }
}

const addCaseSubjectRelationship = (caseId, from, to, relationType, notes) => {
  const params = [
    { k: 'fromId', v: from },
    { k: 'toId', v: to },
    { k: 'type', v: relationType },
    { k: 'notes', v: notes },
  ]
  const paramsString = params.map(kv => `${k}=${v}`).join('&')
  const path = `cases/${caseId}/connections`
  const url = `${SERVICE_URL_BASE}/${path}?${params}`
  return sendRequest(url, 'POST')
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
    updateSubject,
    updateCase,
    addPersonForCase,
    updatePersonForCase,
    linkPerson,
    addRelationship,
    addCaseSubjectRelationship, //FIXME: delete this o_O
    getCaseGraph
  }
}
