import React from 'react';

export default React.createClass({
  callApi: function () {
    $.ajax({
      url: 'http://localhost:3001/secured/ping',
      method: 'GET'
    }).then(function (data, textStatus, jqXHR) {
      alert("The request to the secured enpoint was successfull");
    }, function () {
      alert("You need to download the server seed and start it to call this API");
    });
  },

  getInitialState: function () {
    return {
      profile: null
    }
  },

  componentDidMount: function () {
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        alert("Error loading the Profile");
      }
      this.setState({ profile: profile });
    }.bind(this));
  },

  render: function () {
    if (this.state.profile) {
      return (
        <div>
          <img src={this.state.profile.picture} />
        </div>
      );
    } else {
      return (
        <div>
        </div>);
    }
  }
});
