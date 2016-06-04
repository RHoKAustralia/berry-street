import React from 'react';
import API from '../api.js';

export default React.createClass({
  getInitialState() {
    return {
      ffCase: {}
    };
  },

  render() {
    return (
      <div><h2>New Case</h2></div>
      );
  }
});

