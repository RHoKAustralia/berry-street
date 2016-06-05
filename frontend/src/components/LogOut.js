import React from 'react';
import { browserHistory } from 'react-router'

export default React.createClass({
  componentDidMount: function() {
    localStorage.removeItem('userToken');
    this.onChange(false)
  },
  render: function() {
    return null;
  }
});
