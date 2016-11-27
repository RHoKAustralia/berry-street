import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import CaseHeader from './CaseHeader.jsx'
import { fetchCases } from '../actions.jsx'

const CaseList = React.createClass({

  componentWillMount: function() {
    this.props.dispatch(fetchCases())
  },

  render: function() {
    if (!this.props.cases) {
        return renderLoading()
    }

    return (
      <div className="container">
        <div className="page-header">
          <h1>Existing Cases <small><Link to='/cases/new'>Add New Case</Link></small></h1>
        </div>
        <fieldset>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Case Number</th>
                <th>Child Name</th>
                <th>Case Manager</th>
                <th>Status</th>
                <th>Phase of Involvement</th>
                <th>View</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cases.map(ffCase =>
                  <CaseRow key={ffCase.id} personOne={ffCase.subjects[0].person} caseId={ffCase.id} caseManager={ffCase.caseManager} status={ffCase.status} phaseOfInvolvement={ffCase.phaseOfInvolvement} childName={ffCase.childName} />
              )}
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  },

  renderLoading() {
      return (
          <p>Loading...</p>
      )
  }
});

var CaseRow = React.createClass({
  render() {
    return (
      <tr>
        <td>{this.props.caseId}</td>
        <td>{this.props.personOne.name}</td>
        <td>{this.props.caseManager}</td>
        <td>{this.props.status}</td>
        <td>{this.props.phaseOfInvolvement}</td>
        <td><CaseViewLink caseId={this.props.caseId} /></td>
        <td><CaseEditLink caseId={this.props.caseId} /></td>
      </tr>
    );
  }
});

var CaseViewLink = React.createClass({
  render() {
    return (
      <Link to={'/cases/' + this.props.caseId}>View</Link>
    );
  }
});

var CaseEditLink = React.createClass({
  render() {
    return (
      <Link to={'/cases/' + this.props.caseId + '/edit'}>Edit</Link>
    );
  }
});

export default connect((state) => {
  return {
    cases: state.cases
  }
})(CaseList)
