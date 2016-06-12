import React from 'react';
import API from '../api.jsx';

export default React.createClass({
  getInitialState() {
    return {
      ffCase: {}
    };
  },

  componentDidMount() {
    API.getCase(this.props.params.caseId, newCase => {
      this.setState({ffCase: newCase});
    });
  },

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Case <small> ID: {this.state.ffCase.caseId}</small></h1>
        </div>
        <span>
        <h4>Staff Member Name:</h4> {this.state.ffCase.staffName}
        <h4>Child Name:</h4> {this.state.ffCase.childName}
        </span>
     </div>
    );
  }
});
