import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import Auth0Lock from 'auth0-lock';
import $ from 'jquery';
import Login from './Login.jsx';
import LoggedIn from './LoggedIn.jsx';
import config from '../config.jsx';
import utils from '../utils.jsx';

export default React.createClass({
  refresh_token_check_cycle: 10,
  componentWillMount: function () {
    this.createLock();
    this.setState({ idToken: this.getIdToken() })
  },
  componentDidMount: function () {
    this.timer = setInterval(this.refeshTokenTick, this.refresh_token_check_cycle * 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  refeshTokenTick: function () {
    if (this.state.idToken) {
      if (utils.hasTokenExpired(this.state.idToken, 2 * this.refresh_token_check_cycle)) {
        var refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          this.lock.getClient().refreshToken(refreshToken, this.handleRefreshTokenDelegationResult);
        }
      }
    }
  },
  handleRefreshTokenDelegationResult: function (err, delegationResult) {
    if (!err) {
      var idToken = delegationResult.id_token;
      localStorage.setItem('userToken', idToken);
      this.setState({ idToken: idToken })
    } else {
      console.log(err);
      this.logout();
    }
  },
  createLock: function () {
    this.lock = new Auth0Lock(
      config.key,
      config.url);
  },
  getIdToken: function () {
    var idToken = localStorage.getItem('userToken');
    var authHash = this.lock.parseHash(window.location.hash);
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token);
        localStorage.setItem('refreshToken', authHash.refresh_token);
        browserHistory.push('#');
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
      }
    }

    return idToken;
  },

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('refreshToken');
    this.setState({ idToken: null });
  },

  render() {
    if (this.state.idToken) {
      return (
        <main lock={this.lock} idToken={this.state.idToken} >
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <span className="brand brand-name navbar-left"><img src="src/assets/images/Berry-Street-Sml.png" alt="Berry Street" />
                </span>
                <IndexLink to="/" className="navbar-brand">Family Finder</IndexLink>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to='/cases'>Case List</Link></li>
                <li><Link to='/personlist'>People</Link></li>
                <li><Link to='/case/new'>Create Case</Link></li>
                <li><Link to='/person'>Create Person</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><LoggedIn lock={this.lock} idToken={this.state.idToken} /></li>
                <li><Link to='#' onClick={this.logout}>Log out</Link></li>
              </ul>
            </div>
          </nav>
          {this.props.children}
        </main>
      );
    } else {
      return (<Login lock={this.lock} />);
    }
  }
});
