export default {

  getUsers(callback) {
    // This should actually be a fetch AJAX request
    setTimeout(() => {
      callback(["Shaun","LJ","Yael"]);
    }, 2000);
  }

};
