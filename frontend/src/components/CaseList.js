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
    var rows = [];
    this.state.cases.map((c, i) => {
     rows.push(
        <tr>
          <td>{c.caseNumber}</td>
          <td>{c.childName}</td>
          <td>{c.staffName}</td>
          <td><CaseViewLink key={i} caseId={c.caseId} /></td>
          <td><CaseEditLink key={i} caseId={c.caseId} /></td>
        </tr>
        );
      });

    return rows;
  },

  render() {
    return (
      <div className="container">
      <div class="page-header">
        <h1>Existing Cases <small><Link to='/case'>Add New Case</Link></small></h1>
      </div>
        <fieldset>
          <legend></legend>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Case Number</th>
                <th>Child Name</th>
                <th>Staff Member</th>
                <th>View</th>
                <th>Edit</th>
              </tr>
            </thead>
              <tbody>
                {this.cases()}
              </tbody>
          </table>
        </fieldset>
     </div>
    );
  }
});

var CaseViewLink = React.createClass({
  render() {
    return (
      <Link to={'/case/' + this.props.caseId}>View</Link>
    );
  }
});

var CaseEditLink = React.createClass({
  render() {
    return (
      <Link to={'/case/' + this.props.caseId + '/edit'}>Edit</Link>
    );
  }
});
