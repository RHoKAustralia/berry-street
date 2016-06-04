import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory } from 'react-router'

const Hello = React.createClass({
  render() {
    return (
      <h2>hello world</h2>
    );
  }
});

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
ReactDOM.render(<Hello />, document.getElementById('app'));
