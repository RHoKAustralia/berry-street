import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import { createCase, addCase, fetchCase, updateCase } from '../actions.jsx'

class EditCase extends Component {

  componentWillMount() {
    this.props.dispatch(this.props.params.caseId ? fetchCase(this.props.params.caseId): createCase())
  }

  saveCase(caseToSave) {
    this.props.dispatch(this.props.params.caseId ? updateCase(caseToSave) : addCase(caseToSave))
  }

  render() {
    const {fields: {caseId, staffName, status, objective, dateOpened}, handleSubmit} = this.props

    var heading = <h1>New Case</h1>;
    if (this.props.params.caseId) {
      heading = <h1>Edit Case</h1>;
    }
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.saveCase.bind(this))}>
          {heading}
          <fieldset>
            <legend>
              Family First Details
            </legend>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="caseId">Case Number</label>
                  <input type="text" className="form-control" id="caseId" placeholder="Case Number" {...caseId} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="staffName">Staff Name</label>
                  <input type="text" className="form-control" id="staffName" placeholder="Case Owner" {...staffName} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="status">Status</label>
                  <input type="text" className="form-control" id="status" placeholder="Status" {...status} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="objective">Objective</label>
                  <input type="text" className="form-control" id="objective" placeholder="Objective" {...objective} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="dateOpened">Date Opened</label>
                  <input type="text" className="form-control" id="dateOpened" placeholder="Date Opened" {...dateOpened} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                &nbsp;
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary pull-right">Save Case</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default reduxForm({
    fields: ['caseId', 'staffName', 'status', 'objective', 'dateOpened'],
    form: 'editCase'
  },
  state => ({
      initialValues: state.cases.selectedCase
  })
)(EditCase);
