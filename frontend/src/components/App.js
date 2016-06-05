import React from 'react';
import { IndexLink, Link } from 'react-router';
import Auth0Lock from 'auth0-lock';
import $ from 'jquery';
import Home from './Home.js';
import LoggedIn from './LoggedIn.js';
import config from '../config.js';

export default React.createClass({
  componentWillMount: function() {
    this.setupAjax();
    this.createLock();
    this.setState({idToken: this.getIdToken()})
  },
  createLock: function() {
    this.lock = new Auth0Lock(
      config.key,
      config.url);
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

  logout() {
    localStorage.removeItem('userToken');
    this.setState({idToken: null});
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

/*
      return (<LoggedIn lock={this.lock} idToken={this.state.idToken} />);
      */
  }
});
