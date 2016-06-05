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
     rows.push(<CaseRow key={i} caseId={c.caseId} staffName={c.staffName} childName={c.childName} />  );
      });
    
    return rows;
  },

  render() {
    return (
      <div>
        <h2><Link to='/case'>New Case</Link></h2>
        <fieldset>
          <legend>Existing Cases</legend>
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

var CaseRow = React.createClass({
  render() { return (
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

