export default {

  getUsers(callback) {
    // This should actually be a fetch AJAX request
    setTimeout(() => {
      callback(["Shaun","LJ","Yael"]);
    }, 2000);
  },

  getCases(callback) {
	var cases = [
		{ caseId: "12345", staffName: "Jenny", childName: "Bob Jones"},
		{ caseId: "12346", staffName: "Jenny", childName: "Ben James"},
		{ caseId: "12347", staffName: "Jenny", childName: "Kate Smith"}
	]

    setTimeout(() => {
      callback(cases);
    }, 2000);

  }




}
