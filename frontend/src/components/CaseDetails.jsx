import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCase } from '../actions.jsx'
import { selectCaseById } from '../reducers.jsx'
import api from '../api.jsx'
import CaseHeader from './CaseHeader.jsx'
import PersonRelationshipList from './PersonRelationshipList.jsx'
import RelationshipDetails from './RelationshipDetails.jsx'

class CaseDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ffCase: null,
      error: null,
      person: null,
      selectedRelationshipId: null
    }
  }

  componentDidMount() {
    api.getCase(this.props.params.caseId)
      .then(r => {
        // FIXME: GET /cases/{id} returns a subject with empty arrays for family and friends!!!
        // We have to workaround this by doing 2 requests: First for the case, Second for the
        // full person details via the referenced subject
        return Promise.all([ r, api.getPerson(r.subjects[0].person.id) ])
      })
      .then(results => {
        this.setState({ffCase: results[0], person: results[1]})
      })
      .catch(err => this.setState({ error: err }))
  }
  onRelationSelected(id) {
    this.setState({ selectedRelationshipId: id })
  }
  render() {
    const { ffCase, person, error } = this.state
    if (!ffCase && !person) {
      return this.renderLoading()
    }
    const relations = person.family.concat(person.friends)
    return (
      <div className="container">
        <CaseHeader case={ffCase} />
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <PersonRelationshipList relationships={relations} selectedRelationId={this.state.selectedRelationshipId} onRelationSelected={this.onRelationSelected.bind(this)} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-9">
            <RelationshipDetails personId={person.id} relationshipId={this.state.selectedRelationshipId} />
          </div>
        </div>
      </div>
    )
  }

  renderLoading() {
    return (<p>Loading...</p>)
  }
}

export default CaseDetails
