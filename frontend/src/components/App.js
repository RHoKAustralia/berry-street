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
    this.setState({idToken: null});
  },
  
  render() {
    if (this.state.idToken) {
    return (
        <main lock={this.lock} idToken={this.state.idToken} >
          <h1><IndexLink to="/">Family Finder</IndexLink></h1>
          <nav>
            <Link to='/about'>About</Link>&nbsp;|&nbsp;
            <Link to='/users'>Users</Link>&nbsp;|&nbsp;
            <Link to='/cases'>Case List</Link>&nbsp;|&nbsp;
            <Link to='/' onClick={this.logout}>Log out</Link>
          </nav>
          {this.props.children}
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
