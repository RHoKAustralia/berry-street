export default {
  getUsers(callback) {
    // This should actually be a fetch AJAX request
    setTimeout(() => {
      callback(["Shaun","LJ","Yael"]);
    }, 2000);
  },

  getCases(callback) {
    var cases = [
    { caseId: "12345", staffName: "Jenny", childName: "Bob Jones", caseNumber: "234956"},
    { caseId: "12346", staffName: "Jenny", childName: "Ben James", caseNumber: "234956"},
    { caseId: "12347", staffName: "Jenny", childName: "Kate Smith", caseNumber: "234956"},
  ];
    setTimeout(() => {
      callback(cases);
    }, 2000);
  },

  getCase(id, callback) {
    var cases = [
    { caseId: "12345", staffName: "Jenny", childName: "Bob Jones", caseNumber: "234956"},
    { caseId: "12346", staffName: "Jenny", childName: "Ben James", caseNumber: "234956"},
    { caseId: "12347", staffName: "Jenny", childName: "Kate Smith", caseNumber: "234956"},
  ];
    var singleCase = cases[0];

    for(var i = 0; i < cases.length; i++) {
        if (cases[i].caseId == id) {
            singleCase = cases[i];
        }
      }

    callback(singleCase);
  }
}
