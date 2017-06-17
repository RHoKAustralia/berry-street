import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Auth0Lock from 'auth0-lock';
import $ from 'jquery';
import Login from './Login.jsx';
import LoggedIn from './LoggedIn.jsx';
import config from '../config.jsx';
import utils from '../utils.jsx';
import { setIdToken } from '../actions.jsx';
import './App.css';

function mapStateToProps(state, ownProps) {
  return {
    login: state.auth.login
  }
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    setIdToken: (idToken) => dispatch(setIdToken(idToken))
  }
}

const App = React.createClass({
  refresh_token_check_cycle: 2,
  componentWillMount: function () {
    const { setIdToken } = this.props;
    this.createLock();
    setIdToken(this.getIdToken());
  },
  componentDidMount: function () {
    this.timer = setTimeout(this.refeshTokenTick, this.refresh_token_check_cycle * 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  refeshTokenTick: function () {
    console.log("refreshTokenTick")
    const { login } = this.props;
    if (login && login.idToken) {
      //FIXME: Now that we have webpack live/hot reloading, we're spamming auth0 here, need to fix this to not do
      //that (maybe record last check date?)
      if (utils.hasTokenExpired(login.idToken.idToken, 2 * this.refresh_token_check_cycle)) {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          this.lock.getClient().refreshToken(refreshToken, this.handleRefreshTokenDelegationResult);
        }
      }
    }
  },
  handleRefreshTokenDelegationResult: function (err, delegationResult) {
    const { setIdToken } = this.props;
    if (!err) {
      var idToken = delegationResult.id_token;
      localStorage.setItem('userToken', idToken);
      setIdToken(idToken);
      console.log(`Next JWT token check in ${delegationResult.expires_in * 0.9}s`)
      setTimeout(this.refeshTokenTick, (delegationResult.expires_in * 0.9) * 1000);
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
    const { setIdToken } = this.props;
    localStorage.removeItem('userToken');
    localStorage.removeItem('refreshToken');
    setIdToken(null);
  },

  render() {
    const { login } = this.props;
    if (login && login.idToken) {
      return (
        <main lock={this.lock} idToken={login.idToken} >
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <span className="brand brand-name navbar-left"><img src="src/assets/images/Berry-Street-Sml.png" alt="Berry Street" />
                </span>
                <IndexLink to="/" className="navbar-brand">My Cases</IndexLink>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to='/cases/new/child'>Create Case</Link></li>
                {/*
                <li><Link to='/cases'>Case List</Link></li>
                <li><Link to='/people'>People</Link></li>
                <li><Link to='/people/new'>Create Person</Link></li>
                */}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><LoggedIn lock={this.lock} idToken={login.idToken} /></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
