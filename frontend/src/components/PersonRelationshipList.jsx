import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PersonRelationshipList.css';
import PersonRelationship from './PersonRelationship.jsx';

class PersonRelationshipList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedRelationShip: this.props.relationships[0]
    }

    this.personRelationshipOnClick = this.personRelationshipOnClick.bind(this);
  }

  render() {
    return (
      <div className="PersonRelationshipList">
        <ul className="list-group">
            {this.props.relationships.map(relationship =>
                <li onClick={() => this.personRelationshipOnClick(relationship)} className={ 'list-group-item ' + (this.state.selectedRelationShip === relationship ? 'active' : '' ) }><PersonRelationship key={relationship.id} personName={relationship.personName}
                    relationship={relationship.relationship} riskStatus={relationship.riskStatus}/></li>
            )}
        </ul>
      </div>
    );
  }

  personRelationshipOnClick(personRelationship) {
    this.setState({
      selectedRelationShip: personRelationship
    });
  }
}

export default PersonRelationshipList;