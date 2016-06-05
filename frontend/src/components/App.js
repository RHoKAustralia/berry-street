import React from 'react';
import { IndexLink, Link } from 'react-router';
// import Auth0Variables from './auth0-variables.js';
import Auth0Lock from 'auth0-lock';
import $ from 'jquery';
import Home from './Home.js';
import LoggedIn from './LoggedIn.js';

export default React.createClass({
  componentWillMount: function() {
    this.setupAjax();
    this.createLock();
    this.setState({idToken: this.getIdToken()})
  },
  createLock: function() {
    this.lock = new Auth0Lock(
      'MxPklQCyko4T1lfQmZOAQnSA7ZhCYDN7',
      'rhok-berry-street.au.auth0.com');
  },
  setupAjax: function() {
    $.ajaxSetup({
      'beforeSend': function(xhr) {
        if (localStorage.getItem('userToken')) {
          xhr.setRequestHeader('Authorization',
                'Bearer ' + localStorage.getItem('userToken'));
        }
      }
    });
  },
  getIdToken: function() {
    var idToken = localStorage.getItem('userToken');
    var authHash = this.lock.parseHash(window.location.hash);
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
      }
    }
    return idToken;
  },
  render() {
    if (this.state.idToken) {
    return (
        <main lock={this.lock} idToken={this.state.idToken} >

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <IndexLink to="/" className="navbar-brand">Family Finder</IndexLink>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/users'>Users</Link></li>
              <li><Link to='/cases'>Case List</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to='/logout'>Logout</Link></li>
              </ul>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
        </main>
      );
      } else {
      return (<Home lock={this.lock} />);
    }

/*
      return (<LoggedIn lock={this.lock} idToken={this.state.idToken} />);
      */
  }
});
