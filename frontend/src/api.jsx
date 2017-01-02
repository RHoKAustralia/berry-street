const CASE_DATA = [
  {
    "@id": "1",
    "id": 191,
    "familyFinderStaffName": "Dolores",
    "caseManager": "Jen",
    "status": "Open",
    "dateOpened": "2016-08-05",
    "dateClosed": null,
    "caseObjective": "test Neo4J",
    "phaseOfInvolvement": "Referred",
    "subjects": [
      {
        "@id": "2",
        "id": 255,
        "person": {
          "@id": "3",
          "id": 182,
          "name": "Bart Simpson",
          "dateOfBirth": "1987-04-19",
          "family": [],
          "friends": [],
	  "givenNames": "Bart",
	  "familyName": "Simpson"
        },
        "aCase": {
          "@ref": "1"
        },
        "date": "2016-08-05"
      }
    ]
  }
];
const PEOPLE_DATA = [
  {
    "@id": "1",
    "id": 180,
    "name": "Maggie Simpson",
    "dateOfBirth": "1987-04-19",
    "family": [],
    "friends": [],
    "givenNames": "Maggie",
    "familyName": "Simpson"
  },
  {
    "@id": "2",
    "id": 189,
    "name": "Patty Bouvier",
    "dateOfBirth": "1987-04-19",
    "givenNames": "Patty",
    "familyName": "Bouvier",
    "family": [
      {
        "@id": "3",
        "id": 248,
        "kin": {
          "@ref": "2"
        },
        "person": {
          "@id": "4",
          "id": 181,
          "name": "Lisa Simpson",
          "dateOfBirth": "1987-04-19",
          "family": [],
          "friends": [],
	  "givenNames": "Lisa",
	  "familyName": "Simpson"
        },
        "relationship": "aunt"
      },
      {
        "@id": "5",
        "id": 247,
        "kin": {
          "@ref": "2"
        },
        "person": {
          "@ref": "1"
        },
        "relationship": "aunt"
      },
      {
        "@id": "6",
        "id": 249,
        "kin": {
          "@ref": "2"
        },
        "person": {
          "@id": "7",
          "id": 182,
          "name": "Bart Simpson",
          "dateOfBirth": "1987-04-19",
          "family": [],
          "friends": [],
          "givenNames": "Bart",
          "familyName": "Simpson"
        },
        "relationship": "aunt"
      }
    ],
    "friends": []
  },
  {
    "@id": "8",
    "id": 183,
    "name": "Marge Simpson",
    "dateOfBirth": "1987-04-19",
    "givenNames": "Marge",
    "familyName": "Simpson",
    "family": [
      {
        "@id": "9",
        "id": 244,
        "kin": {
          "@ref": "8"
        },
        "person": {
          "@ref": "4"
        },
        "relationship": "parent"
      },
      {
        "@id": "10",
        "id": 243,
        "kin": {
          "@ref": "8"
        },
        "person": {
          "@ref": "1"
        },
        "relationship": "parent"
      },
      {
        "@id": "11",
        "id": 245,
        "kin": {
          "@ref": "8"
        },
        "person": {
          "@ref": "7"
        },
        "relationship": "parent"
      }
    ],
    "friends": []
  },
  {
    "@id": "12",
    "id": 184,
    "name": "Homer Simpson",
    "dateOfBirth": "1987-04-19",
    "givenNames": "Homer",
    "familyName": "Simpson",
    "family": [
      {
        "@id": "13",
        "id": 241,
        "kin": {
          "@ref": "12"
        },
        "person": {
          "@ref": "4"
        },
        "relationship": "parent"
      },
      {
        "@id": "14",
        "id": 240,
        "kin": {
          "@ref": "12"
        },
        "person": {
          "@ref": "1"
        },
        "relationship": "parent"
      },
      {
        "@id": "15",
        "id": 242,
        "kin": {
          "@ref": "12"
        },
        "person": {
          "@ref": "7"
        },
        "relationship": "parent"
      },
      {
        "@id": "16",
        "id": 246,
        "kin": {
          "@ref": "12"
        },
        "person": {
          "@ref": "8"
        },
        "relationship": "partner"
      }
    ],
    "friends": []
  },
  {
    "@ref": "4"
  },
  {
    "@id": "17",
    "id": 186,
    "name": "Ralph Wiggum",
    "dateOfBirth": "1987-04-19",
    "family": [],
    "friends": [
      {
        "@id": "18",
        "id": 251,
        "kith": {
          "@ref": "17"
        },
        "person": {
          "@ref": "4"
        },
        "relationship": "friend"
      }
    ],
    "givenNames": "Ralph",
    "familyName": "Wiggum"
  },
  {
    "@ref": "7"
  },
  {
    "@id": "19",
    "id": 187,
    "name": "Groundskeeper Willie",
    "dateOfBirth": "1987-04-19",
    "family": [],
    "friends": [
      {
        "@id": "20",
        "id": 252,
        "kith": {
          "@ref": "19"
        },
        "person": {
          "@ref": "7"
        },
        "relationship": "grounskeeper"
      }
    ],
    "givenNames": "Groundskeeper",
    "familyName": "Willie"
  },
  {
    "@id": "21",
    "id": 188,
    "name": "Nelson Muntz",
    "dateOfBirth": "1987-04-19",
    "family": [],
    "friends": [
      {
        "@id": "22",
        "id": 253,
        "kith": {
          "@ref": "21"
        },
        "person": {
          "@ref": "7"
        },
        "relationship": "friend"
      }
    ],
    "givenNames": "Nelson",
    "familyName": "Muntz"
  },
  {
    "@id": "23",
    "id": 185,
    "name": "Milhouse Van Houten",
    "dateOfBirth": "1987-04-19",
    "family": [],
    "friends": [
      {
        "@id": "24",
        "id": 250,
        "kith": {
          "@ref": "23"
        },
        "person": {
          "@ref": "7"
        },
        "relationship": "friend"
      }
    ],
    "givenNames": "Milhouse",
    "familyName": "Van Houten"
  },
  {
    "@id": "25",
    "id": 190,
    "name": "Ned Flanders",
    "dateOfBirth": "1987-04-19",
    "family": [],
    "friends": [
      {
        "@id": "26",
        "id": 254,
        "kith": {
          "@ref": "25"
        },
        "person": {
          "@ref": "12"
        },
        "relationship": "neighbour"
      }
    ],
    "givenNames": "Ned",
    "familyName": "Flanders"
  }
];

const RELATIONSHIPS = [

];

const CASE_DETAILS_DATA = [
  { id: 1, "familyFinderStaffName": "Dolores", "caseManager": "Jen", "status": "Open", "dateOpened": "2016-08-05", "dateClosed": null, "caseObjective": "test Neo4J", "phaseOfInvolvement": "Referred", subjects: [] },
  { id: 2, "familyFinderStaffName": "Dolores", "caseManager": "Jen", "status": "Open", "dateOpened": "2016-08-05", "dateClosed": null, "caseObjective": "test Neo4J", "phaseOfInvolvement": "Referred", subjects: [] },
  { id: 3, "familyFinderStaffName": "Dolores", "caseManager": "Jen", "status": "Open", "dateOpened": "2016-08-05", "dateClosed": null, "caseObjective": "test Neo4J", "phaseOfInvolvement": "Referred", subjects: [] },
  { id: 4, "familyFinderStaffName": "Dolores", "caseManager": "Jen", "status": "Open", "dateOpened": "2016-08-05", "dateClosed": null, "caseObjective": "test Neo4J", "phaseOfInvolvement": "Referred", subjects: [] },
  { id: 5, "familyFinderStaffName": "Dolores", "caseManager": "Jen", "status": "Open", "dateOpened": "2016-08-05", "dateClosed": null, "caseObjective": "test Neo4J", "phaseOfInvolvement": "Referred", subjects: [] },
  { id: 6, "familyFinderStaffName": "Dolores", "caseManager": "Jen", "status": "Open", "dateOpened": "2016-08-05", "dateClosed": null, "caseObjective": "test Neo4J", "phaseOfInvolvement": "Referred", subjects: [] }
];

const cases = [
  { caseId: "12345", staffName: "Jenny", childName: "Bob Jones", caseNumber: "234956" },
  { caseId: "12346", staffName: "Jenny", childName: "Ben James", caseNumber: "234957" },
  { caseId: "12347", staffName: "Jenny", childName: "Kate Smith", caseNumber: "234958" },
];

export const MOCK_BACKEND = false;
export const SERVICE_URL_BASE = "http://localhost:8080";

function sendRequest(url, method, data) {
  const requestOpts = {
    method: method,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };
  if (data) {
    requestOpts.body = JSON.stringify(data)
  }
  const request = new Request(url, requestOpts)
  return fetch(request).then(r => {
    if (r.ok) {
      return r.json();
    }
  });
}

export default {
  getPerson(id) {
    if (MOCK_BACKEND) {
      return new Promise((resolve, reject) => {
        const matches = PEOPLE_DATA.filter(p => p.id == id);
        if (matches.length == 1) {
          resolve(matches[0]);
        } else {
          reject(new Error("Person not found"));
        }
      })
    } else {
      return sendRequest(`${SERVICE_URL_BASE}/people/${id}`, 'GET');
    }
  },
  getRelationship(personId, relationId) {
    return this.getPerson(personId).then(r => {
      const family = r.family;
      const friends = r.friends;

      let matches = family.filter(f => f.id == relationId);
      if (matches.length == 1) {
        return Promise.resolve(matches[0]);
      }
      matches = friends.filter(f => f.id == relationId);
      if (matches.length == 1) {
        return Promise.resolve(matches[0]);
      }
      return Promise.reject(new Error("No such relationship"));
    });
  },
  getCaseStatuses() {
    return Promise.resolve(["Open", "Closed"])
  },
  getPhases() {
    return Promise.resolve(["Referred", "Searching"])
  },
  getUsers() {
    return new Promise((resolve, reject) => {
      // This should actually be a fetch AJAX request
      setTimeout(() => {
        resolve(["Shaun", "LJ", "Yael"]);
      }, 2000);
    });
  },
  getCases() {
    if (MOCK_BACKEND) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(CASE_DATA);
        }, 2000);
      });
    } else {
      return sendRequest(`${SERVICE_URL_BASE}/cases`, 'GET');
    }
  },
  getCase(id) {
    if (MOCK_BACKEND) {
      return new Promise((resolve, reject) => {
        const singleCase = CASE_SUMMARY_DATA.filter(c => c.case_id == id);
        if (singleCase.length = 1) {
          resolve(singleCase[0]);
        } else {
          reject(new Error("Case not found"));
        }
      });
    } else {
      return sendRequest(`${SERVICE_URL_BASE}/cases/${id}`, "GET");
    }
  },
  addCase(caseDetails) {
    if (MOCK_BACKEND) {
      CASE_DETAILS_DATA.push(caseDetails);
      CASE_SUMMARY_DATA.push({ staffName: caseDetails.staffName, surname: caseDetails.surname, firstname: caseDetails.firstname, caseNumber: caseDetails.caseNumber, phase: "New" })
      return Promise.resolve(true);
    } else {
      return sendRequest(`${SERVICE_URL_BASE}/cases`, 'POST', caseDetails);
    }
  },
  updateCase(caseDetails) {
    if (MOCK_BACKEND) {
      return Promise.resolve(caseDetails);
    } else {
      return sendRequest(`${SERVICE_URL_BASE}/cases`, 'PUT', caseDetails);
    }
  }
}
