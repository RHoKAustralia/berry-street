import React from 'react';
import API from '../api.js';

export default React.createClass({
  getInitialState() {
    return {
      ffCase: {
        caseId: "",
        staffName: "",
        subject: {},
        status: "",
        dateOpened: "",
        caseObjective:""
      },
      caseLoaded: false,
      newCase: true,
    };
  },

  componentDidMount() {
    if(this.props.params.caseId)
    {
      API.getCase(this.props.params.caseId, dbCase => {
        this.setState({ffCase: dbCase});
        this.setState({caseLoaded: true});
        this.setState({newCase: false});
      });
    }
    else
    {
      this.setState({caseLoaded: true});
    }
  },

  updateStaffName(e) {
    var stateCase = this.state.ffCase;
    stateCase.staffName = e.target.value;
    this.setState({ffCase: stateCase});
  },

    updateCaseId(e) {
    var stateCase = this.state.ffCase;
    stateCase.caseId = e.target.value;
    this.setState({ffCase: stateCase});
  },

    updateStatus(e) {
    var stateCase = this.state.ffCase;
    stateCase.status = e.target.value;
    this.setState({ffCase: stateCase});
  },

    updateObjective(e) {
    var stateCase = this.state.ffCase;
    stateCase.caseObjective = e.target.value;
    this.setState({ffCase: stateCase});
  },

    updateDateOpened(e) {
    var stateCase = this.state.ffCase;
    stateCase.dateOpened = e.target.value;
    this.setState({ffCase: stateCase});
  },
  
   saveCase() {
     alert("lets pretend we're saving the case!");
 /*
     if(this.state.newCase)
     {
        API.createCase(this.state.ffCase, id => {
        var stateCase = this.state.ffCase;
        stateCase.caseId = id;
        this.setState({ffCase: stateCase});
        this.setState({newCase: false});
      });
     }
     else
     {
       API.updateCase(this.state.ffCase.caseId, this.state.ffCase, callback => {});
     }
  */
  },

  render() {

    var heading = <h1>New Case</h1>;
    if(!this.state.newCase)
      heading = <h1>Edit Case</h1>;

    return (
      <div className="container">
        {heading}
        <fieldset>
          <legend>
            Family First Details
          </legend>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="caseNumber">Case Number</label>
                  <input type="text" className="form-control" id="caseNumber" placeholder="Case Number" value={this.state.ffCase.caseId} onChange={this.updateCaseId}  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="staffName">Staff Name</label>
                  <input type="text" className="form-control" id="staffName" placeholder="Case Owner" value={this.state.ffCase.staffName} onChange={this.updateStaffName}  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="staffName">Status</label>
                  <input type="text" className="form-control" id="status" placeholder="Status" value={this.state.ffCase.status} onChange={this.updateStatus}  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="caseNumber">Objective</label>
                  <input type="text" className="form-control" id="objective" placeholder="Objective" value={this.state.ffCase.caseObjective} onChange={this.updateObjective}  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="staffName">Date Opened</label>
                  <input type="text" className="form-control" id="dateOpened" placeholder="Case Owner" value={this.state.ffCase.dateOpened} onChange={this.updateDateOpened}  />
                </div>
              </div>
              
            </div>
            <div className="row">
            <div className="col-md-10">
               &nbsp;
              </div>
            <div className="col-md-2">
                  <button type="button" className="btn btn-primary pull-right" onClick={this.saveCase}>Save Case</button>
              </div>
            </div>
        </fieldset>
       </div>
      );
  }
});
