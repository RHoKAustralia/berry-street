import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createCase, addCase, updateCase, selectCase } from '../actions.jsx'
import { withRouter } from 'react-router'
import { selectCaseById } from '../reducers.jsx'
import api from '../api.jsx'

class EditCase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statuses: null,
      phases: null
    }
  }
  componentDidMount() {
    api.getPhases().then(r => this.setState({ phases: r }))
    api.getCaseStatuses().then(r => this.setState({ statuses: r }))
  }
  componentWillMount() {
    this.props.dispatch(this.props.params.caseId ? selectCase(this.props.params.caseId) : createCase())
  }

  saveCase(caseToSave) {
    this.props.dispatch(this.props.params.caseId ? updateCase(caseToSave) : addCase(caseToSave))
    this.props.router.push('/cases')
  }

  render() {
    const {fields: {id, caseManager, familyFinderStaffName, status, objective, dateOpened, dateClosed, phaseOfInvolvement}, handleSubmit} = this.props
    const { phases, statuses } = this.state;
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
                  <label htmlFor="caseManager">Case Manager</label>
                  <input type="text" className="form-control" id="caseManager" {...caseManager} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="familyFinderStaffName">Family Finder Staff Member</label>
                  <input type="text" className="form-control" id="familyFinderStaffName" {...familyFinderStaffName} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  {(() => {
                    if (statuses) {
                      return <select className="form-control" id="status" placeholder="Status" {...status}>
                        <option></option>
                        {statuses.map((st, i) => <option key={i}>{st}</option>)}
                      </select>
                    } else {
                      return <div className="alert alert-info">
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...</span>
                      </div>
                    }
                  })()}

                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phaseOfInvolvement">Phase of Involvement</label>
                  {(() => {
                    if (phases) {
                      return <select className="form-control" id="phaseOfInvolvement" {...phaseOfInvolvement}>
                        <option></option>
                        {phases.map((ph, i) => <option key={i}>{ph}</option>)}
                      </select>
                    } else {
                      return <div className="alert alert-info">
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...</span>
                      </div>
                    }
                  })()}

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="dateOpened">Date Opened</label>
                  <input type="text" className="form-control" id="dateOpened" placeholder="Date Opened" {...dateOpened} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="dateClosed">Date Closed</label>
                  <input type="text" className="form-control" id="dateClosed" placeholder="Date Closed" {...dateClosed} />
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

function validateCase(data, props) {
  const errors = {}
  return errors
}

EditCase.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};

export default reduxForm({
    fields: ['id', 'caseManager', 'familyFinderStaffName', 'status', 'objective', 'dateOpened', 'dateClosed', 'phaseOfInvolvement'],
    form: 'editCase',
    validate: validateCase
  },
  state => ({
      initialValues: selectCaseById(state, state.selectedCase)
  })
)(withRouter(EditCase));
