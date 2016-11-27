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
    debugger;
  }
  render() {
    const { fields: { personalDetails, relationship, adminDetails, notes }, handleSubmit } = this.props;
    return <form onSubmit={handleSubmit(this.saveRelationship.bind(this))}>
      <div className="form-group">
        <label for="personalDetails">Personal Details</label>
        <textarea className="form-control" id="personalDetails" placeholder="Personal Details" {...personalDetails} />
      </div>
      <div className="form-group">
        <label for="relationship">Relationship</label>
        <input type="text" className="form-control" id="relationship" placeholder="Relationship" {...relationship} />
      </div>
      <div className="form-group">
        <label for="adminDetails">Admin Details</label>
        <select id="adminDetails" multiple className="form-control">
          <option>Found</option>
          <option>Confirmed</option>
          <option>Status on first two meetings</option>
        </select>
      </div>
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
    if (this.props.relationshipId) {
      api.getRelationship(this.props.relationshipId).then(rel => {
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