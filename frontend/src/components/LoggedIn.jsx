import React from 'react';

export default React.createClass({
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
