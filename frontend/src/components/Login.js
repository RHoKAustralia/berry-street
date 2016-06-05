import React from 'react';

export default React.createClass({
  showLock: function() {
    this.props.lock.show();
  },

  render: function() {
    return (
    <div className="login-box auth0-box before">
      <img src="http://www.berrystreet.org.au/custom/berrystreet/templates/images/xBerry-Street_Vert.gif.pagespeed.ic.7ZRIYBW81C.png" className="center-block" />
      <div>&nbsp;</div>
      <a onClick={this.showLock} className="btn btn-primary btn-lg btn-login btn-block">Sign In</a>
    </div>);
  }
});
