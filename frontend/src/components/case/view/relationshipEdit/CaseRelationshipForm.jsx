import React, { Component } from 'react'
import api from '../../../../api.jsx'

export default class CaseRelationshipForm extends Component {
  constructor (prop) {
    super(prop)
    this.state = {
      acquaintanceSelected: false,
      caseSubject: null,
      relationship: null,
      caseAcquaintance: null
    }
    this.handleAcquaintanceChange = this.handleAcquaintanceChange.bind(this)
    this.handleRelationshipChange = this.handleRelationshipChange.bind(this)
  }
  componentDidMount () {
    api.getRelationshipTypes().then(r => this.setState({ relationshipTypes: r }))
    this.loadDataIfPersonSelected(this.props.caseSubjectId, this.props.relationshipId)
  }
  componentWillReceiveProps (nextProps) {
    this.loadDataIfPersonSelected(nextProps.caseSubjectId, nextProps.relationshipId)
  }
  loadDataIfPersonSelected (caseSubjectId, relationshipId) {
    if (caseSubjectId && relationshipId) {
      this.setState(Object.assign({}, this.state, {caseAcquaintance: null, relationship: null}))
      this.loadData(caseSubjectId, relationshipId)
    } else {
      this.setState({ acquaintanceSelected: false })
    }
  }
  loadData (caseSubjectId, relationshipId) {
    api.getPerson(caseSubjectId).then(caseSubject => {
      let relationship = null
      let matches = caseSubject.family.filter(f => f.id === relationshipId)
      if (matches.length === 1) {
        relationship = matches[0]
      } else {
        matches = caseSubject.friends.filter(f => f.id === relationshipId)
        if (matches.length === 1) {
          relationship = matches[0]
        }
      }

      this.setState({
        acquaintanceSelected: true,
        caseSubject: caseSubject,
        relationship: relationship,
        caseAcquaintance: relationship.kith || relationship.kin
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
  handleAcquaintanceChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    let st = Object.assign({}, this.state)
    st.caseAcquaintance[name] = value
    this.setState(st)
  }
  save (event) {
    event.preventDefault()
    api.updatePerson(this.state.caseSubject)
    this.props.caseUpdated()
  }
  render () {
    if (!this.state.acquaintanceSelected) {
      return <div className="alert alert-info">
        <strong>Select a related person on the left for more details</strong>
      </div>
    } else {
      if (this.state.caseAcquaintance) {
        return <div>
          <form onSubmit={this.save.bind(this)}>
            <fieldset>
              <legend>Personal Details</legend>
              <div className="row">

                <div className="col-xs-6 form-group">
                  <label htmlFor="givenNames">Given Names</label>
                  <input id="givenNames" name="givenNames" type="text" className="form-control" value={this.state.caseAcquaintance.givenNames} onChange={this.handleAcquaintanceChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="familyName">Family Name</label>
                  <input id="familyName" name="familyName" type="text" className="form-control" value={this.state.caseAcquaintance.familyName} onChange={this.handleAcquaintanceChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input id="dateOfBirth" name="dateOfBirth" type="date" className="form-control" value={this.state.caseAcquaintance.dateOfBirth} onChange={this.handleAcquaintanceChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="address">Address</label>
                  <input id="address" name="address" type="text" className="form-control" value={this.state.caseAcquaintance.address} onChange={this.handleAcquaintanceChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="text" className="form-control" value={this.state.caseAcquaintance.phone} onChange={this.handleAcquaintanceChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="form-control" value={this.state.caseAcquaintance.email} onChange={this.handleAcquaintanceChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="atsi">ATSI</label>
                  <input id="atsi" name="atsi" type="checkbox" style={{'margin-left': '15px'}} value={this.state.caseAcquaintance.atsi} onChange={this.handleAcquaintanceChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="atsiLocation">ATSI mob or location</label>
                  <input id="atsiLocation" name="atsiLocation" type="text" className="form-control" value={this.state.caseAcquaintance.atsiLocation} onChange={this.handleAcquaintanceChange} />
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
