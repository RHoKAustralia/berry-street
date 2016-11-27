import React from 'react';
import { connect } from 'react-redux';
//import './PersonRelationshipList.css';
import PersonRelationship from './PersonRelationship.jsx';

const PersonRelationshipList = React.createClass({
  render() {
    return (
      <div >
        <ul>
            {this.props.relationships.map(relationship =>
                <li key={relationship.id}><PersonRelationship personName={relationship.personName}
                    relationship={relationship.relationship} riskStatus={relationship.riskStatus}/></li>
            )}
        </ul>
      </div>
    );
  }
});

export default connect((state) => {
  return {
    relationships: [
        {
            id: 1,
            personName: 'Lisa Simpson',
            relationship: 'parent',
            riskStatus: 1
        },
        {
            id: 2,
            personName: 'Maggie Simpson',
            relationship: 'sister',
            riskStatus: 1
        }
    ]
  }
})(PersonRelationshipList)