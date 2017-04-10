import React, { Component } from 'react'
import { connect } from 'react-redux'
import './CaseRelationshipList.css'
import CaseRelationship from './CaseRelationship.jsx'

class CaseRelationshipList extends Component {
  constructor (props) {
    super(props)
    this.personRelationshipOnClick = this.personRelationshipOnClick.bind(this)
  }
  render () {
    // FIXME: There is no risk status in the modeled relationship
    return (
      <div className="CaseRelationshipList">
        <ul className="list-group">
            {this.props.relationships.map(relationship => {
              const related = relationship.kin || relationship.kith || {}
              return <li key={relationship.id} onClick={() => this.personRelationshipOnClick(relationship)} className={ 'list-group-item ' + (this.props.selectedRelationId === relationship.id ? 'active' : '')}>
                <CaseRelationship personName={this.getRelationshipPersonName(related)} relationship={relationship.relationship} riskStatus={relationship.riskAlert}/>
              </li>
            })}
        </ul>
      </div>
    )
  }

  getRelationshipPersonName (relatedPerson) {
    if (relatedPerson.givenNames === null) {
      return '';
    }

    return relatedPerson.givenNames + (relatedPerson.familyName === null ? '' : ' ' + relatedPerson.familyName);
  }

  personRelationshipOnClick (personRelationship) {
    if (this.props.onRelationSelected) {
      this.props.onRelationSelected(personRelationship.id)
    }
  }
}

export default CaseRelationshipList
