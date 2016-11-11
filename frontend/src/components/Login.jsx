import React from 'react';

export default React.createClass({
  showLock: function () {
    this.props.lock.show({
      // ... other options ...
      authParams: {
        scope: 'openid offline_access'
      }
    });
  },

  render: function () {
    return (
      <div className="login-box auth0-box before">
        <img src="src/assets/images/logo.png" className="center-block" />
        <div>&nbsp; </div>
        <a onClick={this.showLock} className="btn btn-primary btn-lg btn-login btn-block">Sign In</a>
      </div>);
  }
});
