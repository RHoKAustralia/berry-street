import React, { Component } from 'react'
import api from '../../../../api.jsx'

export default class CaseRelationshipForm extends Component {
  constructor (prop) {
    super(prop)
    this.state = {
      caseSubject: null,
      relationship: null,
      relatedPerson: null,
      relatedPersonSelected: false
    }
    this.handleRelatedPersonChange = this.handleRelatedPersonChange.bind(this)
    this.handleRelationshipChange = this.handleRelationshipChange.bind(this)
  }
  componentDidMount () {
    api.getRelationshipTypes().then(r => this.setState({ relationshipTypes: r }))

    if (this.props.newRelation) {
      this.loadCaseSubjectAndNewRelation(this.props.caseSubjectId)
    } else {
      this.loadDataIfPersonSelected(this.props.caseSubjectId, this.props.relationshipId)
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.newRelation) {
      this.loadCaseSubjectAndNewRelation(nextProps.caseSubjectId)
    } else {
      this.loadDataIfPersonSelected(nextProps.caseSubjectId, nextProps.relationshipId)
    }
  }
  loadDataIfPersonSelected (caseSubjectId, relationshipId) {
    if (caseSubjectId && relationshipId) {
      this.setState(Object.assign({}, this.state, {relatedPerson: null, relationship: null}))
      this.loadData(caseSubjectId, relationshipId)
    } else {
      this.setState({ relatedPersonSelected: false })
    }
  }
  loadData (caseSubjectId, relationshipId) {
    api.getPerson(caseSubjectId).then(caseSubject => {
      let relationship = null
      let relatedPerson = null
      let matches = caseSubject.connections.filter(f => f.id === relationshipId)
      if (matches.length === 1) {
        relationship = matches[0]
        if(relationship.from.id){
          relatedPerson = relationship.from
        } else if(relationship.to.id){
          relatedPerson = relationship.to
        }
      }
      this.setState({
        relatedPersonSelected: true,
        caseSubject: caseSubject,
        relationship: relationship,
        relatedPerson: relatedPerson
      })
    })
  }
  loadCaseSubjectAndNewRelation (caseSubjectId) {
    api.getPerson(caseSubjectId).then(caseSubject => {
      this.setState({
        relatedPersonSelected: true,
        caseSubject: caseSubject,
        relationship: {},
        relatedPerson: {}
      })
    })
  }
  handleRelationshipChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    let st = Object.assign({}, this.state)
    st.relationship[name] = value
    this.setState(st)
  }
  handleRelatedPersonChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    let st = Object.assign({}, this.state)
    st.relatedPerson[name] = value
    this.setState(st)
  }
  save (event) {
    event.preventDefault()
    if (this.props.relationshipId) {
      api.updatePerson(this.state.caseSubject).then(() => {
        this.props.caseUpdated()
      });
    } else {
      api.addPerson(this.state.relatedPerson).then(createdPerson => {
        api.linkPerson(this.state.caseSubject.id, createdPerson.id, this.state.relationship)
        this.props.caseUpdated()
      })
    }
  }
  render () {
    if (!this.state.relatedPersonSelected) {
      return <div className="alert alert-info">
        <strong>Select a related person on the left for more details</strong>
      </div>
    } else {
      if (this.state.relatedPerson) {
        return <div>
          <form onSubmit={this.save.bind(this)}>
            <fieldset>
              <legend>Personal Details</legend>
              <div className="row">

                <div className="col-xs-6 form-group">
                  <label htmlFor="givenNames">Given Names</label>
                  <input id="givenNames" name="givenNames" type="text" className="form-control" value={this.state.relatedPerson.givenNames} onChange={this.handleRelatedPersonChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="familyName">Family Name</label>
                  <input id="familyName" name="familyName" type="text" className="form-control" value={this.state.relatedPerson.familyName} onChange={this.handleRelatedPersonChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input id="dateOfBirth" name="dateOfBirth" type="date" className="form-control" value={this.state.relatedPerson.dateOfBirth} onChange={this.handleRelatedPersonChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="address">Address</label>
                  <input id="address" name="address" type="text" className="form-control" value={this.state.relatedPerson.address} onChange={this.handleRelatedPersonChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="text" className="form-control" value={this.state.relatedPerson.phone} onChange={this.handleRelatedPersonChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="form-control" value={this.state.relatedPerson.email} onChange={this.handleRelatedPersonChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="atsi">ATSI</label>
                  <select id="atsi" name="atsi" className="form-control" value={this.state.relatedPerson.atsi} onChange={this.handleRelatedPersonChange}>
                    <option key="Unknown">Unknown</option>
                    <option key="Yes">Yes</option>
                    <option key="No">No</option>
                    <option key="NotIdentifying">Not Identifying</option>
                  </select>
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="atsiLocation">ATSI mob or location</label>
                  <input id="atsiLocation" name="atsiLocation" type="text" className="form-control" value={this.state.relatedPerson.atsiLocation} onChange={this.handleRelatedPersonChange} />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Relationship</legend>
              <div className="row">
                <div className="col-xs-6 form-group">
                  <label htmlFor="relationship">Relationship to Child</label>
                  {(() => {
                    if (this.state.relationshipTypes) {
                      return <select id="relationship" name="relationship" type="text" className="form-control" value={this.state.relationship.relationship} onChange={this.handleRelationshipChange}>
                        <option></option>
                        {this.state.relationshipTypes.map((st, i) => <option key={i}>{st}</option>)}
                      </select>
                    } else {
                      return <div className="alert alert-info">
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...</span>
                      </div>
                    }
                  })()}
                </div>
                <div className="col-xs-6 form-group">
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
              <div className="row">
                <div className="col-xs-6 form-group">
                  <label htmlFor="riskAlert">Risk Alert</label>
                  <select id="riskAlert" name="riskAlert" className="form-control" value={this.state.relationship.riskAlert} onChange={this.handleRelationshipChange}>
                    <option></option>
                    <option>Current</option>
                    <option>Past</option>
                    <option>None</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Knowledge Trust</legend>
              <div className="row">
                <div className="col-xs-6 form-group">
                  <label htmlFor="howFound">How found</label>
                  <select id="howFound" name="howFound" type="text" className="form-control" value={this.state.relationship.howFound} onChange={this.handleRelationshipChange}>
                    <option></option>
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
                  <select id="howInfoConfirmed" name="howInfoConfirmed" type="text" className="form-control" value={this.state.relationship.howInfoConfirmed} onChange={this.handleRelationshipChange}>
                    <option></option>
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
                {/*
                <div className="col-xs-6 form-group">
                  <label htmlFor="blendedPerspectives">Blended perspectives</label>
                  <select id="blendedPerspectives" className="form-control" ...blendedPerspectives}>
                    <option>Invited</option>
                    <option>Not to be invited</option>
                    <option>Accepted</option>
                    <option>Apology Refused</option>
                  </select>
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="threePlans">3 plans</label>
                  <select id="threePlans" className="form-control" ...threePlans}>
                    <option>Not to be invited</option>
                    <option>Accepted</option>
                    <option>Apology Refused</option>
                  </select>
                </div>
              */}
              </div>
            </fieldset>
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea className="form-control" id="notes" name="notes" placeholder="Add Notes" value={this.state.relationship.notes} onChange={this.handleRelationshipChange} />
            </div>

            <button type="submit" className="btn btn-default">Save</button>
          </form>
        </div>
      } else {
        return <div className="alert alert-info">
          <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      }
    }
  }
}
