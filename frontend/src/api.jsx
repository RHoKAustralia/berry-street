const CASE_SUMMARY_DATA = [
  { surname: "Simpson", staffName: "", firstname: "Bart", phase: "New", caseNumber: "1" },
  { surname: "Simpson", staffName: "", firstname: "Lisa", phase: "Talking", caseNumber: "2" },
  { surname: "Van Houten", staffName: "", firstname: "Milhouse", phase: "New", caseNumber: "3" },
  { surname: "Wiggum", staffName: "", firstname: "Ralph", phase: "New", caseNumber: "4" },
  { surname: "Muntz", staffName: "", firstname: "Nelson", phase: "Closed", caseNumber: "5" },
  { surname: "Simpson", staffName: "", firstname: "Maggie", phase: "Closed", caseNumber: "6" }
];

const CASE_DETAILS_DATA = [
  { caseNumber: "1" },
  { caseNumber: "2" },
  { caseNumber: "3" },
  { caseNumber: "4" },
  { caseNumber: "5" },
  { caseNumber: "6" }
];

const cases = [
  { caseId: "12345", staffName: "Jenny", childName: "Bob Jones", caseNumber: "234956" },
  { caseId: "12346", staffName: "Jenny", childName: "Ben James", caseNumber: "234957" },
  { caseId: "12347", staffName: "Jenny", childName: "Kate Smith", caseNumber: "234958" },
];

export const MOCK_BACKEND = true;
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
    if (r.ok()) {
      return r.json();
    }
  });
}

export default {
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
          resolve(CASE_SUMMARY_DATA);
        }, 2000);
      });
    } else {
      return sendRequest(`${SERVICE_URL_BASE}/cases`, 'GET');
    }
  },
  getCase(id) {
    return new Promise((resolve, reject) => {
      const singleCase = CASE_SUMMARY_DATA.filter(c => c.case_id == id);
      if (singleCase.length = 1) {
        resolve(singleCase[0]);
      } else {
        reject(new Error("Case not found"));
      }
    });
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
