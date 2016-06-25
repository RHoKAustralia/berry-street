import React from 'react';
import utils from '../utils.jsx';

export default React.createClass({

  makeCall: function () {

    if (!utils.hasTokenExpired(localStorage.getItem('userToken'), 20)) {
      var request = new Request('http://localhost:8081/products/1', {
        headers: new Headers({
          'Authorization': 'Bearer ' + localStorage.getItem('userToken')
        })
      });
      fetch(request).then(function () { /* handle response */ });
    }
  },

  render() {
    this.makeCall();
    return <h1>About Us</h1>;
  }
});
