import React from 'react';
import { IndexLink, Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <main>
        <h1><IndexLink to="/">Family Finder</IndexLink></h1>
        <nav>
          <Link to='/about'>About</Link>&nbsp;|&nbsp;
          <Link to='/users'>Users</Link>&nbsp;|&nbsp;
          <Link to='/cases'>Case List</Link>
        </nav>
        {this.props.children}
      </main>
    );
  }
});
