import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'

const CaseList = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Existing Cases <small><Link to='/case'>Add New Case</Link></small></h1>
        </div>
        <fieldset>
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
              {this.props.cases.map(c =>
                  <CaseRow key={c.caseId} caseId={c.caseId} staffName={c.staffName} childName={c.childName} />
              )}
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
});

var CaseRow = React.createClass({
  render() {
    return (
      <tr>
        <td>{this.props.caseId}</td>
        <td>{this.props.childName}</td>
        <td>{this.props.staffName}</td>
        <td><CaseViewLink caseId={this.props.caseId} /></td>
        <td><CaseEditLink caseId={this.props.caseId} /></td>
      </tr>
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

const mapStateToProps = (state) => {
  return {
    cases: state.cases.cases
  }
}

const VisibleCaseList = connect(
    mapStateToProps
)(CaseList)

export default VisibleCaseList
