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
    alert("TODO: Save this information");
    debugger;
  }
  render() {
    const {
      fields: { 
        riskAlert,
        familyName,
        givenName,
        dob,
        address,
        phone,
        email,
        atsi,
        atsiLocation,
        relToChild,
        assumedOrConfirmed,
        howFound,
        howInfoConfirmed,
        blendedPerspectives,
        threePlans,
        notes
      }, handleSubmit 
    } = this.props;
    return <form onSubmit={handleSubmit(this.saveRelationship.bind(this))}>
      {/* TODO: We can probably interrogate redux-form for dirty state to conditionally show the below warning */}
      <div className="alert alert-warning">
        <strong><i className="fa fa-warning"/> Be sure to save any changes before selecting a different person</strong>
      </div>
      <fieldset>
        <legend>Personal Details</legend>
        <div className="row">
          <div className="col-xs-6 form-group">
            <label for="riskAlert">Risk Alert</label>
            <select id="riskAlert" className="form-control" {...riskAlert}>
              <option>Current</option>
              <option>Past</option>
              <option>None</option>
            </select>
          </div>
          <div className="col-xs-6 form-group">
            <label for="familyName">Family Name</label>
            <input id="familyName" type="text" className="form-control" {...familyName} />
          </div>
          <div className="col-xs-6 form-group">
            <label for="givenName">Given Name</label>
            <input id="givenName" type="text" className="form-control" {...givenName} />
          </div>
          <div className="col-xs-6 form-group">
            <label for="dob">DOB</label>
            {/* TODO: Hook this up to a date picker component (eg. react-widgets DatePicker) */}
            <input id="dob" type="text" className="form-control" {...dob} />
          </div>
          <div className="col-xs-6 form-group">
            <label for="address">Address</label>
            <input id="address" type="text" className="form-control" {...address} />
          </div>
          <div className="col-xs-6 form-group">
            <label for="phone">Phone</label>
            <input id="phone" type="text" className="form-control" {...phone} />
          </div>
          <div className="col-xs-6 form-group">
            <label for="email">Email</label>
            <input id="email" type="email" className="form-control" {...email} />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Relationship</legend>
        <div className="row">
          <div className="col-xs-6 form-group">
            <label for="atsi">ATSI</label>
            <input id="atsi" type="checkbox" {...atsi} />
          </div>
          <div className="col-xs-6 form-group">
            <label for="atsiLocation">ATSI mob or location</label>
            <input id="atsiLocation" type="text" className="form-control" {...atsiLocation} />
          </div>
          <div className="col-xs-6 form-group">
            <label for="relToChild">Relationship to Child</label>
            {/* TODO: Need options here. Is this a fixed list of relationships or something we get from the backend? */}
            <select id="relToChild" type="text" className="form-control" {...relToChild} />
          </div>
          <div className="col-xs-6 form-group">
          {/* FIXME: This doesn't work in a redux-form case. Should consult docs to see how radios are meant to work in redux-form */}
          <label for="assumedOrConfirmed">Assumed/Confirmed</label>
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
            <label for="howFound">How found</label>
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
            <label for="howInfoConfirmed">How info was confirmed</label>
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
            <label for="blendedPerspectives">Blended perspectives</label>
            <select id="blendedPerspectives" className="form-control" {...blendedPerspectives}>
              <option>Invited</option>
              <option>Not to be invited</option>
              <option>Accepted</option>
              <option>Apology Refused</option>
            </select>
          </div>
          <div className="col-xs-6 form-group">
            <label for="threePlans">3 plans</label>
            <select id="threePlans" className="form-control" {...threePlans}>
              <option>Not to be invited</option>
              <option>Accepted</option>
              <option>Apology Refused</option>
            </select>
          </div>
        </div>
      </fieldset>
      <div className="form-group">
        <label for="notes">Notes</label>
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
    "familyName",
    "givenName",
    "dob",
    "address",
    "phone",
    "email",
    "atsi",
    "atsiLocation",
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
)(RelationshipDetailsForm);

function prepareRelationshipForForm(rel) {
  //HACK: kin or kith? typo?
  const kin = rel.kin || rel.kith || {};
  return {
    riskAlert: "",                        //TODO: Figure out where in `rel` to pluck this information
    familyName: kin.familyName || "",
    givenName: kin.givenNames || "",
    dob: kin.dateOfBirth || "",
    address: "",                          //TODO: Figure out where in `rel` to pluck this information
    phone: "",                            //TODO: Figure out where in `rel` to pluck this information
    email: "",                            //TODO: Figure out where in `rel` to pluck this information
    atsi: !!kin.atsi,
    atsiLocation: kin.atsiLocation || "",
    relToChild: rel.relationship || "",
    assumedOrConfirmed: "",               //TODO: Figure out where in `rel` to pluck this information
    howFound: "",                         //TODO: Figure out where in `rel` to pluck this information
    howInfoConfirmed: "",                 //TODO: Figure out where in `rel` to pluck this information
    blendedPerspectives: "",              //TODO: Figure out where in `rel` to pluck this information
    threePlans: "",                       //TODO: Figure out where in `rel` to pluck this information
    notes: ""                             //TODO: Figure out where in `rel` to pluck this information
  };
}

export default class RelationshipDetails extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      init: false,
      relData: null
    };
  }
  componentDidMount() {
    //TODO: I dunno if we really have to do this. The relationship from the parent person should
    //have sufficient information
    if (this.props.personId && this.props.relationshipId) {
      api.getRelationship(this.props.personId, this.props.relationshipId).then(rel => {
        this.setState({
          init: true,
          relData: rel
        });
      });
    } else {
      this.setState({ init: true });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.personId && nextProps.relationshipId) {
      this.setState({ init: false }, () => {
        api.getRelationship(nextProps.personId, nextProps.relationshipId).then(rel => {
          this.setState({
            init: true,
            relData: rel
          });
        });
      });
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
      if (this.state.relData) {
        const data = prepareRelationshipForForm(this.state.relData);
        return <WrappedRelationshipDetailsForm initVals={data} />;
      } else {
        return <div className="alert alert-info">
          <strong>Select a related person on the left for more details</strong>
        </div>;
      }
    }
  }
}