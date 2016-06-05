import React from 'react';
import API from '../api.js';

export default React.createClass({
  getInitialState() {
    return {
      ffCase: {
        caseId: "",
        staffName: "",
        subject: "",
        status: {},
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

  render() {
    
    var heading = <h1>New Case</h1>;
    if(!this.state.newCase)
      heading = <h1>Edit Case</h1>;
    
    return (
      <div>
        {heading}
        <fieldset>
          <legend>
            Family First Details
          </legend>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="caseNumber">Case Number</label>
                  <input type="text" className="form-control" id="caseNumber" value={this.state.ffCase.caseId} onChange={this.updateCaseId}  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="staffName">Staff Name</label>
                  <input type="text" className="form-control" id="staffName" placeholder="Case Owner" value={this.state.ffCase.caseId} onChange={this.updateStaffName}  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="staffName">Status</label>
                  <input type="text" className="form-control" id="status" placeholder="Case Owner" value={this.state.ffCase.status} onChange={this.updateStatus}  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="caseNumber">Objective</label>
                  <input type="text" className="form-control" id="objective" value={this.state.ffCase.caseObjective} onChange={this.updateObjective}  />
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
            </div>
        </fieldset>
        <fieldset>
          <legend>
            Child Details
          </legend>
        </fieldset>
      </div>
      );
  }
});

