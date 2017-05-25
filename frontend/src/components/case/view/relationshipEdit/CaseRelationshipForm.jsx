import React, { Component } from 'react'
import api from '../../../../api.jsx'

export default class CaseRelationshipForm extends Component {

  constructor (prop) {
    super(prop)
    this.state = {
      loading: false,
      relationship: null,
      relatedPerson: null,
      relatedPersonSelected: false
    }
    this.handleRelatedPersonChange = this.handleRelatedPersonChange.bind(this)
    this.handleRelationshipChange = this.handleRelationshipChange.bind(this)
  }

  componentDidMount () {
    this.loadDataIfPersonSelected(this.props.subjectId, this.props.selectedRelationshipId)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedRelationshipId) {
      this.loadDataIfPersonSelected(nextProps.subjectId, nextProps.selectedRelationshipId)
    } else {
      this.loadCaseSubjectAndNewRelation(nextProps.subjectId)
    }
  }

  loadDataIfPersonSelected (subjectId, selectedRelationshipId) {
    if (subjectId && selectedRelationshipId) {
      this.setState(Object.assign({}, this.state, {loading: true, relatedPerson: null, relationship: null}))
      this.loadData(subjectId, selectedRelationshipId)
    } else {
      this.setState({ relatedPersonSelected: false })
    }
  }

  loadData (subjectId, selectedRelationshipId) {
    let relationship = null
    let relatedPerson = null
    let matches = this.props.relationships.filter(f => f.id === selectedRelationshipId)
    if (matches.length === 1) {
      relationship = matches[0]
      if(relationship.from.id){
        relatedPerson = relationship.from
      } else if(relationship.to.id){
        relatedPerson = relationship.to
      }
    }
    this.setState({
      loading: false,
      relatedPersonSelected: true,
      relationship: relationship,
      relatedPerson: relatedPerson
    })
  }

  loadCaseSubjectAndNewRelation (subjectId) {
    this.setState({
      loading: false,
      relatedPersonSelected: true,
      relationship: {
        relationship:'',
        notes:''
      },
      relatedPerson: {
        givenNames:'',
        familyName:'',
        additionalNames:'',
        gender:'',
        dateOfBirth:'',
        atsi:'',
        atsiLocation:'',
        image:'',
        contactInformation:''
      }
    })
    window.scrollTo(0, 0)
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
    this.setState({loading:true})
    if (this.props.selectedRelationshipId) { //UPDATE
      api.updatePerson(this.state.relatedPerson).then(() => {
        this.props.caseUpdated()
        this.setState({loading:false})
      });
    } else { //NEW
      api.addPerson(this.state.relatedPerson).then(createdPerson => {
        api.linkPerson(this.props.subjectId, createdPerson.id, this.state.relationship).then(()=> {
          this.props.caseUpdated()
          this.setState({loading:false})
        })
      })
    }
  }

  render () {
    if (!this.state.relatedPersonSelected) {
      return <div className="alert alert-info">
        <strong>Select a related person on the left for more details</strong>
      </div>
    } else {
      if (!this.state.loading) {
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
                  <label htmlFor="additionalNames">Additional Names</label>
                  <input id="additionalNames" name="additionalNames" type="text" className="form-control" value={this.state.relatedPerson.additionalNames} onChange={this.handleRelatedPersonChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" name="gender" className="form-control" value={this.state.relatedPerson.gender} onChange={this.handleRelatedPersonChange}>
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input id="dateOfBirth" name="dateOfBirth" type="date" className="form-control" value={this.state.relatedPerson.dateOfBirth} onChange={this.handleRelatedPersonChange} />
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
                <div className="col-xs-6 form-group">
                  <label htmlFor="contactInformation">Contact Information</label>
                  <textarea className="form-control" id="contactInformation" name="contactInformation" placeholder="Add Contact Information" value={this.state.relatedPerson.contactInformation} onChange={this.handleRelatedPersonChange} />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Relationship</legend>
              <div className="row">
                <div className="col-xs-6 form-group">
                  <label htmlFor="relationship">Relationship</label>
                  <input id="relationship" name="relationship" type="text" className="form-control" value={this.state.relationship.relationship} onChange={this.handleRelationshipChange} />
                </div>
                <div className="col-xs-6 form-group">
                  <label htmlFor="notes">Notes</label>
                  <textarea className="form-control" id="notes" name="notes" placeholder="Add Notes" value={this.state.relationship.notes} onChange={this.handleRelationshipChange} />
                </div>
              </div>
              <div className="row">
              </div>
            </fieldset>

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
