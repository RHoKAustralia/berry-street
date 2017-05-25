import React, { Component } from 'react'
import api from '../../../api.jsx'
import CaseHeader from './CaseHeader.jsx'
import CaseRelationshipList from './relationshipList/CaseRelationshipList.jsx'
import CaseRelationshipForm from './relationshipEdit/CaseRelationshipForm.jsx'

class CaseView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ffCase: null,
      error: null,
      caseSubject: null,
      relationships: null,
      selectedRelationshipId: null
    }
  }

  componentDidMount () {
    this.reloadCase()
  }

  reloadCase () {
    api.getCase(this.props.params.caseId)
      .then(r => {
        // FIXME: GET /cases/{id} returns a subject with empty arrays for family and friends!!!
        // We have to workaround this by doing 2 requests: First for the case, Second for the
        // full person details via the referenced subject
        return Promise.all([ r, api.getPerson(r.subjects[0].person.id), api.getRelationships(r.subjects[0].person.id)])
      })
      .then(results => {
        this.setState(Object.assign({}, this.state, {ffCase: results[0], caseSubject: results[1], relationships: results[2]}))
      })
      .catch(err => this.setState({ error: err }))
  }

  onRelationSelected (id) {
    this.setState(Object.assign({}, this.state, {selectedRelationshipId: id}))
  }

  onAddRelationship () {
    this.setState(Object.assign({}, this.state, {selectedRelationshipId: null}))
  }

  render () {
    const { ffCase, caseSubject, relationships } = this.state
    if (!ffCase && !caseSubject && !relationships) {
      return this.renderLoading()
    }
    return (
      <div className="container">
        <CaseHeader case={ffCase} />
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <CaseRelationshipList subjectId={caseSubject.id} relationships={relationships} selectedRelationshipId={this.state.selectedRelationshipId}
              onRelationSelected={this.onRelationSelected.bind(this)} />
            <div>
                <button className="btn btn-default" onClick={this.onAddRelationship.bind(this)}>Add Related Person</button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-9">
            <CaseRelationshipForm subjectId={caseSubject.id} relationships={relationships} selectedRelationshipId={this.state.selectedRelationshipId} caseUpdated={this.reloadCase.bind(this)} />
          </div>
        </div>
      </div>
    )
  }

  renderLoading () {
    return (<p>Loading...</p>)
  }
}

export default CaseView
