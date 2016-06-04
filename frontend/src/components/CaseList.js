import React from 'react';
import API from '../api.js';
import { IndexLink, Link } from 'react-router';

export default React.createClass({
  getInitialState() {
    return {
      cases: []
    };
  },

  componentDidMount() {
    API.getCases(newCases => {
      this.setState({cases: newCases});
    });
  },

  cases() {
    return this.state.cases.map((c, i) => {
      return <CaseLink key={i} name={c.childName} caseId={c.caseId} />;
    });
  },

  render() {
    return (
      <div>
        <h2><Link to='/case'>New Case</Link></h2>
        <fieldset>
          <legend>Existing Cases</legend>
        <ul>{this.cases()}</ul>
        </fieldset>
     </div>
    );
  }
});

var CaseLink = React.createClass({
  render() {
    return (
      <li><Link to={'/case/' + this.props.caseId}>{this.props.name}</Link></li>
    );
  }
});

