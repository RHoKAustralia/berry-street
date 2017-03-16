import React, { Component } from "react"
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router'
import api from '../api.jsx'
import RelatedPersonForm from './relationship/RelatedPersonForm.jsx'
import RelationshipDetailsForm from './relationship/RelationshipDetailsForm.jsx'

function prepareRelationshipForForm(rel) {
  //HACK: kin or kith? typo?
  const kin = rel.kin || rel.kith || {};
  return {
    riskAlert: "",                        //TODO: Figure out where in `rel` to pluck this information
    relToChild: rel.relationship || "",
    assumedOrConfirmed: "",               //TODO: Figure out where in `rel` to pluck this information
    howFound: "",                         //TODO: Figure out where in `rel` to pluck this information
    howInfoConfirmed: "",                 //TODO: Figure out where in `rel` to pluck this information
    blendedPerspectives: "",              //TODO: Figure out where in `rel` to pluck this information
    threePlans: "",                       //TODO: Figure out where in `rel` to pluck this information
    notes: ""                             //TODO: Figure out where in `rel` to pluck this information
  }
}

export default class RelationshipDetails extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      init: false,
      relData: null
    }
  }
  componentDidMount() {
    // TODO: I dunno if we really have to do this. The relationship from the parent person should
    // have sufficient information
    if (this.props.personId && this.props.relationshipId) {
      this.fetchRelationshipData(this.props.personId, this.props.relationshipId)
    } else {
      this.setState({ init: true })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.personId && nextProps.relationshipId) {
      this.fetchRelationshipData(nextProps.personId, nextProps.relationshipId)
    } else {
      this.setState({ init: true })
    }
  }
  fetchRelationshipData(personId, relationshipId) {
    api.getRelationship(personId, relationshipId).then(relationship => {
      this.setState({
        init: true,
        relData: relationship,
        person: (relationship.kin || relationship.kith || {})
      })
    })
  }
  saveRelationship(relationship) {
    api.updatePerson(this.state.relData)
  }
  render() {
    if (!this.state.init) {
      return <div className="alert alert-info">
        <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
    } else {
      if (this.state.relData) {
        const data = prepareRelationshipForForm(this.state.relData)
        return <div>
          <RelatedPersonForm person={this.state.person} handleSubmit={this.saveRelationship} />
          <RelationshipDetailsForm initVals={data} handleSubmit={this.saveRelationship} />
        </div>
      } else {
        return <div className="alert alert-info">
          <strong>Select a related person on the left for more details</strong>
        </div>
      }
    }
  }
}
