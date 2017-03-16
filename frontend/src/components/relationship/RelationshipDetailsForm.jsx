import React, { Component } from "react"
import { reduxForm } from 'redux-form'

class RelationshipDetailsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initVals: props.initVals || {}
    }
  }
  render() {
    const {
      fields: {
        riskAlert,
        relToChild,
        assumedOrConfirmed,
        howFound,
        howInfoConfirmed,
        blendedPerspectives,
        threePlans,
        notes
      }, handleSubmit
    } = this.props
    return <form onSubmit={handleSubmit(this)}>
      {/* TODO: We can probably interrogate redux-form for dirty state to conditionally show the below warning */}
      <div className="alert alert-warning">
        <strong><i className="fa fa-warning"/> Be sure to save any changes before selecting a different person</strong>
      </div>
      <fieldset>
        <div className="row">
          <div className="col-xs-6 form-group">
            <label htmlFor="riskAlert">Risk Alert</label>
            <select id="riskAlert" className="form-control" {...riskAlert}>
              <option>Current</option>
              <option>Past</option>
              <option>None</option>
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Relationship</legend>
        <div className="row">
          <div className="col-xs-6 form-group">
            <label htmlFor="relToChild">Relationship to Child</label>
            {/* TODO: Need options here. Is this a fixed list of relationships or something we get from the backend? */}
            <select id="relToChild" type="text" className="form-control" {...relToChild} />
          </div>
          <div className="col-xs-6 form-group">
          {/* FIXME: This doesn't work in a redux-form case. Should consult docs to see how radios are meant to work in redux-form */}
          <label htmlFor="assumedOrConfirmed">Assumed/Confirmed</label>
            <div className="radio">
              <label>
                <input type="radio" name="assumedOrConfirmed" id="assumedOrConfirmed1" value="assumed" checked />
                Assumed
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="assumedOrConfirmed" id="assumedOrConfirmed2" value="confirmed" checked />
                Confirmed
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Knowledge Trust</legend>
        <div className="row">
          <div className="col-xs-6 form-group">
            <label htmlFor="howFound">How found</label>
            <select id="howFound" className="form-control" {...howFound}>
              <option>Referral</option>
              <option>Previous Search</option>
              <option>Child</option>
              <option>Parents</option>
              <option>Kith or Kin</option>
              <option>Other Professional</option>
              <option>File Search</option>
              <option>Facebook</option>
              <option>Other Social Media</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="howInfoConfirmed">How info was confirmed</label>
            <select id="howInfoConfirmed" className="form-control" {...howInfoConfirmed}>
              <option>Referral</option>
              <option>Previous Search</option>
              <option>Child</option>
              <option>Parents</option>
              <option>Kith or Kin</option>
              <option>Other Professional</option>
              <option>File Search</option>
              <option>Facebook</option>
              <option>Other Social Media</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="blendedPerspectives">Blended perspectives</label>
            <select id="blendedPerspectives" className="form-control" {...blendedPerspectives}>
              <option>Invited</option>
              <option>Not to be invited</option>
              <option>Accepted</option>
              <option>Apology Refused</option>
            </select>
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="threePlans">3 plans</label>
            <select id="threePlans" className="form-control" {...threePlans}>
              <option>Not to be invited</option>
              <option>Accepted</option>
              <option>Apology Refused</option>
            </select>
          </div>
        </div>
      </fieldset>
      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea className="form-control" id="notes" placeholder="Add Notes" {...notes} />
      </div>
      <button type="submit" className="btn btn-default">Save</button>
    </form>
  }
}

function validateRelationship(data, props) {
  const errors = {}
  return errors
}

const WrappedRelationshipDetailsForm = reduxForm({
  fields: [
    "riskAlert",
    "relToChild",
    "assumedOrConfirmed",
    "howFound",
    "howInfoConfirmed",
    "blendedPerspectives",
    "threePlans",
    "notes"
  ],
  form: 'relationshipDetails',
  validate: validateRelationship
},
  (state, ownProps) => ({
    initialValues: ownProps.initVals
  })
)(RelationshipDetailsForm)

export default WrappedRelationshipDetailsForm
