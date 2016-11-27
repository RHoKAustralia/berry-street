import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import api from "../api.jsx";

class RelationshipDetailsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initVals: props.initVals || {}
    }
  }
  saveRelationship(rel) {
    
  }
  render() {
    const { fields: { riskAlert, familyName, givenName, dob, address, phone, email, atsi, atsiLocation, relToChild, assumedOrConfirmedm, howFound, howInfoConfirmed }, handleSubmit } = this.props;
    return <form onSubmit={handleSubmit(this.saveRelationship.bind(this))}>
      <fieldset>
        <legend>Personal Details</legend>
        <div className="row">
          <div className="col-xs-6 form-group">
            <label for="riskAlert">Risk Alert</label>
            <select id="riskAlert" className="form-control">
              <option>Current</option>
              <option>Past</option>
              <option>None</option>
            </select>
          </div>
          <div className="col-xs-6 form-group">
            <label for="familyName">Family Name</label>
            <input id="familyName" type="text" className="form-control" />
          </div>
          <div className="col-xs-6 form-group">
            <label for="givenName">Given Name</label>
            <input id="givenName" type="text" className="form-control" />
          </div>
          <div className="col-xs-6 form-group">
            <label for="dob">DOB</label>
            <input id="dob" type="text" className="form-control" />
          </div>
          <div className="col-xs-6 form-group">
            <label for="address">Address</label>
            <input id="address" type="text" className="form-control" />
          </div>
          <div className="col-xs-6 form-group">
            <label for="phone">Phone</label>
            <input id="phone" type="text" className="form-control" />
          </div>
          <div className="col-xs-6 form-group">
            <label for="email">Email</label>
            <input id="email" type="email" className="form-control" />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Relationship</legend>
        <div className="row">
          <div className="col-xs-6 form-group">
            <label for="atsi">ATSI</label>
            <input id="atsi" type="checkbox" />
          </div>
          <div className="col-xs-6 form-group">
            <label for="atsiLocation">ATSI mob or location</label>
            <input id="atsiLocation" type="text" className="form-control" />
          </div>
          <div className="col-xs-6 form-group">
            <label for="relToChild">Relationship to Child</label>
            <select id="relToChild" type="text" className="form-control" />
          </div>
          <div className="col-xs-6 form-group">
          <label for="assumedOrConfirmed">Assumed/Confirmed</label>
            <div class="radio">
              <label>
                <input type="radio" name="assumedOrConfirmed" id="assumedOrConfirmed1" value="assumed" checked />
                Assumed
              </label>
            </div>
            <div class="radio">
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
            <label for="howFound">How found</label>
            <select id="howFound" className="form-control">
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
            <label for="howInfoConfirmed">How info was confirmed</label>
            <select id="howInfoConfirmed" className="form-control">
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
            <label for="blendedPerspectives">Blended perspectives</label>
            <select id="blendedPerspectives" className="form-control">
              <option>Invited</option>
              <option>Not to be invited</option>
              <option>Accepted</option>
              <option>Apology Refused</option>
            </select>
          </div>
          <div className="col-xs-6 form-group">
            <label for="3plans">3 plans</label>
            <select id="3plans" className="form-control">
              <option>Not to be invited</option>
              <option>Accepted</option>
              <option>Apology Refused</option>
            </select>
          </div>
        </div>
      </fieldset>
      <div className="form-group">
        <label for="notes">Notes</label>
        <textarea className="form-control" id="notes" placeholder="Add Notes" />
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
  fields: ["personalDetails", "relationship", "adminDetails", "notes"],
  form: 'relationshipDetails',
  validate: validateRelationship
},
  state => ({
    initialValues: state.initVals
  })
)(RelationshipDetailsForm);

export default class RelationshipDetails extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      init: false,
      relData: {}
    };
  }
  componentDidMount() {
    if (this.props.personId && this.props.relationshipId) {
      api.getRelationship(this.props.personId, this.props.relationshipId).then(rel => {
        this.setState({
          init: true,
          relData: rel
        });
      })
    } else {
      this.setState({ init: true });
    }
  }
  render() {
    if (!this.state.init) {
      return <div className="alert alert-info">
        <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>;
    } else {
      return <WrappedRelationshipDetailsForm initVals={this.state.relData} />;
    }
  }
}